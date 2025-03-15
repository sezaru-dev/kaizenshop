'use client'
import React from 'react'
import Button from './Button'
import { useModalStore } from '@/store/modal-store'
import { SignupForm } from './forms/SignupForm'

const SignUpModal = () => {
  const isSignupModalOpen = useModalStore((state) => state.isSignupModalOpen)
  const closeSignupModal = useModalStore((state) => state.closeSignupModal)
  const openLoginModal = useModalStore((state) => state.openLoginModal)

  console.log('SIGNUP MODAL RENDERED');

  return (
    <>
    {
      isSignupModalOpen ?
      <div className='fixed top-0 left-0 z-40 w-full h-screen'>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 relative z-10">

        <div className='absolute top-0 left-0 h-screen w-full bg-black/70' onClick={closeSignupModal}/>

          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md p-6 z-10">
           
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-6">
              Create an account
            </h1>
            <SignupForm/>
            <p className="text-sm font-light text-gray-500 mt-6">
                Don’t have an account yet? <Button type='button' onClick={openLoginModal} className="font-medium text-purple-600 hover:underline">Sign in</Button>
            </p>

          </div>
        </div>
      </div> : ''
    }
    </>
  )
}

export default SignUpModal
