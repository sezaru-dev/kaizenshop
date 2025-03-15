'use client'
import React from 'react'
import Button from './Button';
import { useCartStore } from '@/store/cart-store';

const CheckoutOrderSummary = () => {
  const cart = useCartStore((state) => state.cart)
  const subtotal = useCartStore((state) => state.subtotal)
  const total = useCartStore((state) => state.total)


  console.log('CheckoutOrderSummary');
  
  return (
    <div className='lg:col-start-8 lg:col-span-5 w-full'>
      <h3 className='text-xl font-medium mb-6'>Order Summary</h3>
      <ul className='text-sm md:text-base'>
        {
          cart.map(product => (
          <li key={product.productId} className='p-2 w-full grid grid-cols-3'>
            <p className=' col-span-2 truncate'>{product.productName}</p>
            <p className='justify-self-end'><span className='text-gray-500 text-xs md:text-sm mr-2'>(${product.productPrice}x{product.quantity})</span> ${product.total}</p>
          </li>
          ))
        }
      </ul>
      <div className='p-2 w-full flex items-center justify-between'>Subtotal <span>${subtotal}</span></div>
      <div className='p-2 w-full flex items-center justify-between'>Discount <span>0</span></div>
      <div className='p-2 w-full flex items-center justify-between'>Shipping Fee <span>$15</span></div>
      <div className='p-2 w-full flex items-center justify-between'>Total <span>${total}</span></div>
      <div className='grid'>
        <Button className='px-6 py-2.5 bg-purple-500 text-center text-white rounded-sm font-medium justify-self-end'>Place Order</Button>
      </div>
    </div>
  )
}

export default CheckoutOrderSummary