import React from 'react'
import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import NewsLetterForm from './NewsLetterForm';

const Footer = () => {
  return (
    <footer className='w-full bg-gray-300/50 mt-40'>
      <div className='container relative lg:max-w-[1280px] mx-auto px-6 py-10 '>
      <NewsLetterForm/>
        <div className='wrapper mb-6 lg:flex lg:justify-between mt-10'>
          <div className='lg:max-w-[248px]'>
            <h2 className='font-bold text-[28.85px] mb-3 text-gray-900'>KaizenShop</h2>
            <p className='text-sm text-black/60'>Stay in the loop and stay inspired. Connect with us for updates, news, and stories.</p>
            <nav className='mt-5'>
              <ul className='flex items-center gap-3'>
                <li className='h-7 w-7 rounded-full overflow-hidden border border-black/20 flex items-center justify-center'><FaTwitter/></li>
                <li className='h-7 w-7 rounded-full overflow-hidden border border-black bg-black flex items-center justify-center'><FaFacebookF color='white'/></li>
                <li className='h-7 w-7 rounded-full overflow-hidden border border-black/20 flex items-center justify-center'><AiFillInstagram/></li>
                <li className='h-7 w-7 rounded-full overflow-hidden border border-black/20 flex items-center justify-center'><FaGithub/></li>
              </ul>
            </nav>
          </div>

          <div className='hidden lg:block'>
              <h6 className='font-medium text-sm lg:text-base text-gray-900'>COMPANY</h6>
              <nav className='mt-3'>
                <ul className='text-sm lg:text-base text-black/60 space-y-3'>
                  <li>About</li>
                  <li>Features</li>
                  <li>Works</li>
                  <li>Career</li>
                </ul>
              </nav>
          </div>

          <div className='hidden lg:block'>
            <h6 className='font-medium text-sm lg:text-base text-gray-900'>HELP</h6>
            <nav className='mt-3'>
              <ul className='text-sm lg:text-base text-black/60 space-y-3'>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </nav>
          </div>

          <div className='hidden lg:block'>
            <h6 className='font-medium text-sm lg:text-base text-gray-900'>FAQ</h6>
            <nav className='mt-3'>
              <ul className='text-sm lg:text-base text-black/60 space-y-3'>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </nav>
          </div>

          <div className='hidden lg:block'>
            <h6 className='font-medium text-sm lg:text-base text-gray-900'>RESOURCES</h6>
            <nav className='mt-3'>
              <ul className='text-sm lg:text-base text-black/60 space-y-3'>
                <li>Free eBook</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </nav>
          </div>

          <div className='lg:hidden grid grid-cols-2 gap-6 mt-6'>
            <div>
              <h6 className='font-medium text-sm text-gray-900'>COMPANY</h6>
              <nav className='mt-3'>
                <ul className='text-sm text-black/60 space-y-3'>
                  <li>About</li>
                  <li>Features</li>
                  <li>Works</li>
                  <li>Career</li>
                </ul>
              </nav>
            </div>

            <div>
              <h6 className='font-medium text-sm text-gray-900'>HELP</h6>
              <nav className='mt-3'>
                <ul className='text-sm text-black/60 space-y-3'>
                  <li>Customer Support</li>
                  <li>Delivery Details</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </nav>
            </div>

            <div>
              <h6 className='font-medium text-sm text-gray-900'>FAQ</h6>
              <nav className='mt-3'>
                <ul className='text-sm text-black/60 space-y-3'>
                  <li>Account</li>
                  <li>Manage Deliveries</li>
                  <li>Orders</li>
                  <li>Payments</li>
                </ul>
              </nav>
            </div>

            <div>
              <h6 className='font-medium text-sm text-gray-900'>RESOURCES</h6>
              <nav className='mt-3'>
                <ul className='text-sm text-black/60 space-y-3'>
                  <li>Free eBook</li>
                  <li>Development Tutorial</li>
                  <li>How to - Blog</li>
                  <li>Youtube Playlist</li>
                </ul>
              </nav>
            </div>
          </div>

        </div>

        <p className='text-sm mt-10 text-center'>KaizenShop &copy; 2025. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer