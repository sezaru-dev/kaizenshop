'use client'
import Link from 'next/link'
import React from 'react'
import { HiOutlineUserCircle, } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import Button from './ui/Button';
import { useCartStore } from '@/store/cart-store';
import { useModalStore } from '@/store/modal-store';



const Header = () => {
  const cart = useCartStore((state) => state.cart);
  const openLoginModal = useModalStore((state) => state.openLoginModal)
  const openSignupModal = useModalStore((state) => state.openSignupModal)
  return (
    <header className='bg-gray-100'>
      <div className='container mx-auto lg:max-w-[1280px] p-6 flex items-center justify-between'>
        <div className='flex items-center gap-4 lg:gap-6'>
          <Link href='/'>
            <h1 className='text-lg md:text-xl font-bold'>KaizenShop</h1>
          </Link>
          <Link href='/shop'>
            <p className='text-sm md:text-base font-medium'>Shop</p>
          </Link>
        </div>

        

        <nav className="flex gap-4">
          <ul className='flex items-center justify-between gap-4'>
            <li>
              <Link href='/cart' className='relative'>
              {
                cart && cart.length > 0 && (
                  <div className='absolute -top-2 -right-2 md:-top-1 md:-right-1 text-xs font-medium h-4 w-4 bg-red-600 text-white rounded-full flex items-center justify-center'>
                    <small>{cart.length}</small>
                  </div>
                )
              }
                <LuShoppingCart className='text-lg'/>
              </Link>
            </li>
            <li>
              <Button className='hidden'>
                <HiOutlineUserCircle size='1.6rem'/>
              </Button>
            </li>
          </ul>


          <ul className='hidden md:flex items-center justify-between gap-4 font-medium'>
            <li>
              <Button onClick={openLoginModal}>
                Login
              </Button>
            </li>
            <li>
              <Button onClick={openSignupModal}>
                Sign Up
              </Button>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  )
}

export default Header