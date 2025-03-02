import React from 'react'

interface StatProps {
  title: string
  value: string
  containerStyles?: string
  titleStyles?: string
  valueStyles?: string
}

const Stat = ({title, value, containerStyles, titleStyles, valueStyles}:StatProps) => {
  return (
    <div className={containerStyles}>
      <h3 className={`${valueStyles}`}>{value}</h3>
      <p className={`${titleStyles} text-black/60`}>{title}</p>
    </div>
  )
}

export default Stat