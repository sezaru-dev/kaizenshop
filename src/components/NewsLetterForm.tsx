'use client'
import React, { FormEvent } from 'react'
import { HiOutlineEnvelope } from "react-icons/hi2";
import Button from './ui/Button';

const NewsLetterForm = () => {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    }

  return (
    <div className='-mt-40 lg:-mt-36 w-full'>
      <div className='bg-gray-950 rounded-lg px-6 lg:px-16 py-[28px] lg:py-[36px] flex flex-col lg:flex-row items-center justify-between'>
        <h2 className='lg:w-[551px] font-bold text-[32px] lg:text-[2.5rem] text-white leading-none lg:leading-[45px] uppercase w-full text-left'>Stay up-to-date on our latest offers</h2>
        <form onSubmit={handleSubmit} className='mt-8 lg:mt-0 w-full lg:w-[349px]'>
          <div className='mb-3 relative'>
            <HiOutlineEnvelope size="1.5rem" className='absolute top-1/2 -translate-y-1/2 left-5 text-black/40'/>
            <input type="text" placeholder='Enter your email address' className='py-3 lg:py-3 w-full bg-white rounded-lg pl-14 pr-4' />
          </div>
          <Button className='py-3 lg:py-3 px-3 w-full border-2 border-orange-600 hover:bg-orange-600/20 bg-orange-600/10 text-white rounded-lg font-bold text-sm lg:text-base text-nowrap'>Subscribe to Newsletter</Button>
        </form>

      </div>
    </div>
  )
}

export default NewsLetterForm