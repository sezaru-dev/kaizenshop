'use client'
import React, { ReactNode } from 'react'

interface ButtonProps {
  children: string | ReactNode
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({children, type, onClick, className}:ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}>
      {children}
    </button>
  )
}

export default Button