'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import PromoIcon from '@/public/promoIcon.svg'
import { useCartStore } from '@/store/cart-store'
import Button from './ui/Button'

const CartOrderSummary = () => {
  const cart = useCartStore((state) => state.cart)
  const [discount] = useState({
    isDiscount: false,
    value: 15
  })
  const subtotal : number = Number(cart.reduce((acc, item) => acc + item.total, 0).toFixed(2))
  const discountedPrice:number = discount.isDiscount ? Number((cart.reduce((acc, item) => acc + item.total, 0) * (discount.value/100)).toFixed(2)) : 0
  const shippineFee:number = 15
  const total:number = Number(((subtotal - discountedPrice) + shippineFee).toFixed(2))
  
  return (
    <div className='lg:col-span-5 border border-gray-300 px-6 py-5 rounded-xl h-min'>
      <h3 className='text-2xl font-bold text-gray-900'>Order Summary</h3>
      <div className='flex flex-col gap-5 mt-6'>
        <p className='flex items-center justify-between text-black/60 lg:text-lg'>Subtotal <span className='font-bold text-gray-900'>${subtotal}</span></p>
        <p className='flex items-center justify-between text-black/60 lg:text-lg'>Discount{discount.isDiscount ? `(${discount.value}%)` : ''} <span className='font-bold text-red-500'>${discountedPrice}</span></p>
        <p className='flex items-center justify-between text-black/60 lg:text-lg'>Shipping <span className='font-bold text-gray-900'>${shippineFee}</span></p>
        <div className='h-[1px] bg-black/10 w-full'/>
        <p className='flex items-center justify-between font-medium :text-lg'>Total<span className='font-bold text-gray-900 text-lg lg:text-xl'>${total}</span></p>
      </div>

      <div className='flex gap-4 items-center justify-center mt-6'>
        <div className='relative h-auto w-[70%]'>
          <Image src={PromoIcon} alt='promo icon' className='absolute top-1/2 left-4 -translate-y-1/2'/>
          <input type="text" placeholder='Add discount code'  className='w-full py-3 pl-14 outline-none border border-gray-300 rounded-lg'/>
        </div>
        <Button className='py-3 px-6 w-[30%] text-center bg-orange-600 text-white font-medium rounded-lg'>Apply</Button>
      </div>

      <Button className='py-3 px-6 mt-6 w-full text-center bg-orange-600 text-white font-medium rounded-lg'>Checkout</Button>
    </div>
  )
}

export default CartOrderSummary