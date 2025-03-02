import React from 'react'
import { HiStar } from 'react-icons/hi'

interface RatingProps {
  rate: string | number | undefined
}

const Rating = ({rate}:RatingProps) => {
  return (
    <div className='flex items-center gap-1 w-min text-orange-500'>
      <HiStar/>
      <p className='font-medium text-sm'>{rate}</p>
    </div>
  )
}

export default Rating