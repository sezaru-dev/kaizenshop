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

  console.log(`Rendered ${selectedCartItem?.productName}`);

  return (
    <>
      {
        selectedCartItem ? 
        <div className='flex ga font-medium text-gray-800p-4'>
        <div className='w-[99px] lg:w-[124px] aspect-auto flex-none relative'>
          <Image
            src={selectedCartItem.productImage}
            alt="Product Image"
            fill
            priority
            className="object-contain scale-[.8] group-hover:scale-[.9] transition-transform duration-200 ease-in-out"
          />
        </div>
        <div className='w-full flex flex-col justify-between'>
          <div className='flex items-start justify-between'>
            <div className=''>
              <h4 className='text-lg font-medium text-gray-800 mr-4'>{selectedCartItem.productName}</h4>
            </div>
            <button className='flex-none' onClick={handleRemove}>
              <PiTrashFill color='#FF3333' className='text-2xl' />
            </button>
          </div>
          <div className='flex items-center justify-between mt-6'>
            <p className='text-sm text-gray-600'>{selectedCartItem.quantity} x ${selectedCartItem.productPrice}</p>
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
