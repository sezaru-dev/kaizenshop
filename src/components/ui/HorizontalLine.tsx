import React from 'react'

interface ClassName  {
  className: string
}
const HorizontalLine = ({className}:ClassName) => {
  return (
    <div className={`${className}`}>
      <div className="w-full h-[1px] bg-gray-200"/>
    </div>
  )
}

export default HorizontalLine