'use client'
import React, { FormEvent } from 'react'
import Button from './ui/Button'
import { useModalStore } from '@/store/modal-store'

const LoginModal = () => {
  const isLoginModalOpen = useModalStore((state) => state.isLoginModalOpen)
  const closeLoginModal = useModalStore((state) => state.closeLoginModal)
  const openSignupModal = useModalStore((state) => state.openSignupModal)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    }

    console.log('LOGIN MODAL RENDERED');
    
  return (
    <>
    {
      isLoginModalOpen ?
      <div className={`${isLoginModalOpen? '': 'hidden'} fixed top-0 left-0 z-40 w-full h-screen`}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 relative">

          <div className='absolute top-0 left-0 h-screen w-full bg-black/70' onClick={closeLoginModal}/>

          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 z-10">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign In to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" required/>
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input type="password" name="password" id="password" autoComplete="on" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" required/>
                </div>

                {/* I might still need this */}
  {/*               <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300" required/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500">Remember me</label>
                      </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-purple-600 hover:underline">Forgot password?</a>
                </div> */}
                  <Button type="submit" className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >Sign In</Button>
                  <p className="text-sm font-light text-gray-500">
                      Don’t have an account yet? <Button type='button' onClick={openSignupModal} className="font-medium text-purple-600 hover:underline">Sign up</Button>
                  </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      :''
    }
    </>
  )
}

export default LoginModal