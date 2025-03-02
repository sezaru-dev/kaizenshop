'use client'
import React, { useState } from 'react'
import Link from "next/link";
import { HiOutlineX } from "react-icons/hi";

const Banner = () => {
  const [close, setClose] = useState(false)

  const handleClose = () => {
    setClose(true)
  }
  return (
    <div className={`${close && 'hidden'} w-full bg-black text-white py-[10px]`}>
      <div className='container lg:max-w-[1280px] mx-auto px-6 flex items-center justify-end relative'>
        <p className="relative lg:absolute lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 text-center font-light text-xs lg:text-sm w-full">Sign up and get 20% off to your first order. 
          <Link href='/signup' className="ml-1 underline underline-offset-3 text-purple-400">Sign Up Now</Link>
        </p>
        <button
          className="hidden md:block relative z-10"
          onClick={handleClose}
          >
          <HiOutlineX/>
        </button>
      </div>
  </div>
  )
}

export default Banner