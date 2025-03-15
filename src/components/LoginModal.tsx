'use client'
import React from 'react'
import { useModalStore } from '@/store/modal-store'
import { LoginForm } from './forms/LoginForm'
import { Button } from './ui/button'

const LoginModal = () => {
  const isLoginModalOpen = useModalStore((state) => state.isLoginModalOpen)
  const closeLoginModal = useModalStore((state) => state.closeLoginModal)
  const openSignupModal = useModalStore((state) => state.openSignupModal)

  console.log('LOGIN MODAL RENDERED');
    
  return (
    <>
    {
      isLoginModalOpen ?
      <div className={`${isLoginModalOpen? '': 'hidden'} fixed top-0 left-0 z-40 w-full h-screen`}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 relative">

          <div className='absolute top-0 left-0 h-screen w-full bg-black/70' onClick={closeLoginModal}/>

          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md p-6 z-10">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-6">
              Sign In to your account
            </h1>
            <LoginForm/>

            <p className="text-sm font-light text-gray-500 mt-6">
              Don’t have an account yet? <Button type='button'variant='link'  onClick={openSignupModal} className="font-medium text-purple-600 hover:underline">Sign up</Button>
            </p>
          </div>
        </div>
      </div>
      :''
    }
    </>
  )
}

export default LoginModal


/* 
  <div className="flex items-center justify-between">
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300" required/>
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="remember" className="text-gray-500">Remember me</label>
      </div>
    </div>
    <a href="#" className="text-sm font-medium text-purple-600 hover:underline">Forgot password?</a>
</div> 
*/