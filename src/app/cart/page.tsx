'use client'
import CartItemCard from '@/components/cards/CartItemCard'
import React from 'react'
import { useCartStore } from '@/store/cart-store'
import CartOrderSummary from '@/components/CartOrderSummary'
import Link from 'next/link'

const CartPage = () => {
  const cart = useCartStore((state) => state.cart)
  return (
    <main>
      <section>
        <div className='container lg:max-w-[1280px] mx-auto px-6 '>
          <h2 className='mt-6 text-[2.5rem] font-bold'>YOUR CART</h2>
          {
            cart.length >0 ? 
              <div className='grid lg:grid-cols-12 gap-6 mt-6 min-h-[calc(100vh-12.4rem)]'>
                <div className='lg:col-span-7 border border-gray-300 px-6 py-5 rounded-xl h-min'>
                  {
                    cart.map((item, index) => (
                      <CartItemCard key={item.productId} cartItem={item} index={index}/>
                    ))
                  }
                </div>
                <CartOrderSummary/>
              </div>
            : <div className='text-center min-h-[calc(100vh-12.4rem)] max-w-md grid place-content-center mx-auto gap-6'>
              <p className='text-lg text-gray-600'>Your shopping cart is currently empty. Browse our collection and add your favorite items to the cart.</p>
              <Link href='/shop' className='bg-purple-600 hover:bg-purple-500 px-6 py-2.5 text-white font-medium w-full rounded-sm'>Go to Shop</Link>
              </div>
          }
        </div>
      </section>
    </main>
  )
}

export default CartPage