'use client'
import React, { FormEvent, useState } from 'react'
import Button from './ui/Button'
import Link from 'next/link'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const SignUpModal = () => {
  const [isHidden, setIsHidden] = useState(true)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    }

    const showPasswordHandler = () => {
      setIsHidden(!isHidden)
    }

  return (
    <div className='fixed top-0 left-0 z-40 w-full h-screen'>
      <div className='absolute top-0 left-0 h-screen w-full bg-black/60'/>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 relative z-10">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-900 ">Fullname</label>
                <input type="text" name="fullname" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" required/>
              </div>
              <div>
                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 ">Home Address</label>
                <input type="text" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" required/>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" required/>
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <div className='relative overflow-hidden'>
                  <Button type='button' onClick={showPasswordHandler}className='absolute h-12 w-12 right-0 text-gray-600 grid place-content-center rounded-r-lg'>{isHidden? <FaEye />: <FaEyeSlash />}</Button>
                  <input type={`${isHidden? 'password': 'text'}`} name="password" id="password" autoComplete="on" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5" required/>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300" required/>
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 ">I accept the <a className="font-medium text-purple-600 hover:underline " href="#">Terms and Conditions</a></label>
                </div>
              </div>
                <Button type="submit" className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</Button>
                <p className="text-sm font-light text-gray-500">
                    Don’t have an account yet? <Link href="/signup" className="font-medium text-purple-600 hover:underline">Sign up</Link>
                </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpModal