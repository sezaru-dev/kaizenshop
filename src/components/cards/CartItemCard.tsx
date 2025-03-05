'use client'
import Image from 'next/image'
import React, { useCallback } from 'react'
import { PiTrashFill } from 'react-icons/pi'
import Counter from '../ui/Counter'
import { CartInterface, useCartStore } from '@/store/cart-store'
import HorizontalLine from '../ui/HorizontalLine'

interface CartItemCardProps {
  cartItem: CartInterface
  index: number
}

const CartItemCard = ({ cartItem, index }: CartItemCardProps) => {
  const removeFromCart = useCartStore(state => state.removeFromCart);
  const selectedCartItem = useCartStore(state => state.cart.find(item => item.productId === cartItem.productId));

  const handleRemove = useCallback(() => {
    removeFromCart(cartItem.productId);
  }, [removeFromCart, cartItem.productId]);

  return (
    <>
      {
        selectedCartItem ? 
        <div className='flex text-gray-800p-4'>
        <div className='w-[20%] lg:w-[124px] aspect-auto flex-none relative'>
          <Image
            src={selectedCartItem.productImage}
            alt="Product Image"
            fill
            priority
            className="object-contain scale-[.8] group-hover:scale-[.9] transition-transform duration-200 ease-in-out"
          />
        </div>
        <div className='w-full flex flex-col justify-between gap-2.5'>
          <div className='grid grid-cols-4'>

            <div className='col-span-3'>
              <h4 className='text-xs md:text-base font-medium text-gray-900 md:mr-4 truncate'>{selectedCartItem.productName}</h4>
            </div>

            <div className='col-span-1 grid place-content-end'>
              <button className='' onClick={handleRemove}>
                <PiTrashFill color='#FF3333' className='text-lg md:text-2xl' />
              </button>
            </div>
          </div>

          <div className='flex items-center justify-between md:mt-6'>
            <p className='text-xs md:text-base text-gray-500'>{selectedCartItem.quantity} x ${selectedCartItem.productPrice}</p>
            <Counter className='w-min' buttonStyles='h-8 w-8' inputStyles='h-8' productId={selectedCartItem.productId} cartItemQuantity={selectedCartItem.quantity} />
          </div>
        </div>
      </div>: ''
      }
      {index < useCartStore.getState().cart.length - 1 && <HorizontalLine className='my-6' />}
    </>
  );
}

export default React.memo(CartItemCard);
