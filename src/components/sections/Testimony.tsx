'use client'
import { Testimonies } from '@/constant'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import React, { useRef } from 'react'
import Button from '../ui/Button';

const Testimony = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const testimonyRef = useRef<HTMLElement>(null);

  const slideLeft = () => {
    if (sliderRef.current && testimonyRef.current) {
      sliderRef.current.scrollLeft += testimonyRef.current.offsetWidth;
    }
  };
  
  const slideRight = () => {
    if (sliderRef.current && testimonyRef.current) {
      sliderRef.current.scrollLeft -= testimonyRef.current.offsetWidth;
    }
  };

  return (
    <section className="container lg:max-w-[1280px] mx-auto px-6 mt-28">
      <div className=' mb-8 flex items-center justify-between'>
        <h2 className="text-3xl font-extrabold text-gray-800">What Our Customers Say</h2>
        <div className='flex items-center gap-1'>
          <Button className='px-5 py-2 text-lg' onClick={slideRight}>
            <HiOutlineArrowLeft  />
          </Button>
          <Button className='px-5 py-2 text-lg' onClick={slideLeft}>
            <HiOutlineArrowRight  />
          </Button>
        </div>
      </div>
      <div className="">
        <div className="flex gap-6 overflow-x-auto scroll-smooth snap-mandatory snap-x scrollbar-hide" ref={sliderRef}>
          {
            Testimonies.map(testimony => (
              <article key={testimony.id} ref={testimonyRef} className="w-[400px] p-4 flex-none snap-start bg-gray-100/70">
                <h4 className="text-gray-800 font-medium mb-2 text-lg">{testimony.name}</h4>
                <blockquote className="text-sm text-gray-700">{testimony.review}</blockquote>
              </article>
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default Testimony