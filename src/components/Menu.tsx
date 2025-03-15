import React, { useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { useModalStore } from '@/store/modal-store';
import { useUserStore } from '@/store/user-store';
import { toast } from 'sonner';
import { Button } from './ui/button';

const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const openLoginModal = useModalStore((state) => state.openLoginModal)
  const openSignupModal = useModalStore((state) => state.openSignupModal)
  const user = useUserStore((state) => state.user)
  const clearUser = useUserStore((state) => state.clearUser)
  
  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev)
  }

  const handleOpenLoginModal = () => {
    setIsMenuVisible(false)
    openLoginModal()
  }
  const handleOpenSignupModal = () => {
    setIsMenuVisible(false)
    openSignupModal()
  }

  const logoutHandler = async() => {
      clearUser()
      toast.success("Logout success")
      //logout logic
    }


  return (
    <div className='relative h-min w-min md:hidden'>
      <Button className={`${isMenuVisible && 'bg-white'} rounded-full p-2 bg-transparent hover:bg-transparent shadow-none text-gray-800`} onClick={toggleMenu}>
        <FaRegUser />
      </Button>
      {
        isMenuVisible &&
        <div className='absolute right-0 z-50 mt-6 text-sm'>
          <ul className='relative bg-white shadow-md border border-gray-200 rounded-sm w-32 p-2'>
            <div className='absolute -top-2 right-0 h-4 w-4'/>
            {
              user ?
              <>
                <li className='py-2 px-2 w-full'>My Orders</li>
                <li className='py-2 px-2 w-full'>Profile</li>
                <li className=''>
                  <Button onClick={logoutHandler} className='py-2 px-2 w-full bg-purple-400 hover:bg-purple-500 text-white rounded-sm'>Logout</Button>
                </li>
              </> :
              <>
                <li>
                  <Button onClick={handleOpenLoginModal} className='py-2 px-2 w-full text-left bg-transparent hover:bg-transparent text-gray-800 shadow-none'>
                    Login
                  </Button>
                </li>
                <li>
                  <Button onClick={handleOpenSignupModal} className='py-2 px-2 w-full text-left bg-transparent hover:bg-transparent text-gray-800 shadow-none'>
                    Sign Up
                  </Button>
                </li>
              </>
            }

          </ul>
        </div>
      }
    </div>
  )
}

export default Menu