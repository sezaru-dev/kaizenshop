'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import PromoIcon from '@/public/promoIcon.svg'
import { useCartStore } from '@/store/cart-store'
import Button from './MyButton'
import { useRouter } from "next/navigation"

const CartOrderSummary = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart)
  const subtotal = useCartStore((state) => state.subtotal)
  const total = useCartStore((state) => state.total)
  const [discount] = useState({
    isDiscount: false,
    value: 15
  })

  const discountedPrice:number = discount.isDiscount ? Number((cart.reduce((acc, item) => acc + item.total, 0) * (discount.value/100)).toFixed(2)) : 0
  const shippineFee:number = 15
  
  const handleNavigate = () => {
    // Programmatically navigate to the '/checkout' page
    router.push("/checkout");
  };

  return (
    <div className='lg:col-span-5 border border-gray-300 px-6 py-5 rounded-xl h-min'>
      <h3 className='text-xl md:text-2xl font-bold text-gray-900'>Order Summary</h3>
      <div className='flex flex-col gap-5 mt-6'>
        <p className='flex items-center justify-between text-black/60 text-sm md:text-lg'>Subtotal <span className='font-bold text-gray-900'>${subtotal}</span></p>
        <p className='flex items-center justify-between text-black/60 text-sm md:text-lg'>Discount{discount.isDiscount ? `(${discount.value}%)` : ''} <span className='font-bold text-red-500'>${discountedPrice}</span></p>
        <p className='flex items-center justify-between text-black/60 text-sm md:text-lg'>Shipping <span className='font-bold text-gray-900'>${shippineFee}</span></p>
        <div className='h-[1px] bg-black/10 w-full'/>
        <p className='flex items-center justify-between font-medium md:text-lg'>Total<span className='font-bold text-gray-900 text-lg lg:text-xl'>${total}</span></p>
      </div>

      <div className='flex gap-2 md:gap-4 items-center justify-center mt-6'>
        <div className='relative h-auto w-[70%]'>
          <Image src={PromoIcon} alt='promo icon' className='absolute top-1/2 left-4 -translate-y-1/2'/>
          <input type="text" placeholder='Add discount code'  className='w-full py-3 pl-14 outline-none border border-gray-300 rounded-lg placeholder:text-xs text-sm'/>
        </div>
        <Button className='py-3 px-4 md:px-6 w-[30%] text-center bg-orange-600 text-white font-medium rounded-lg  '>Apply</Button>
      </div>

      <Button onClick={handleNavigate} className='py-3 px-6 mt-6 w-full text-center bg-orange-600 text-white font-medium rounded-lg'>Checkout</Button>
    </div>
  )
}

export default CartOrderSummary