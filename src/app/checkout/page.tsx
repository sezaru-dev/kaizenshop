import CheckoutOrderSummary from '@/components/CheckoutOrderSummary'
import PaymentMethods from '@/components/PaymentMethods'
import React from 'react'

const CheckoutPage = () => {
  return (
    <main className='container mx-auto lg:max-w-[1280px] p-6 flex flex-col gap-6'>
      <section>
        <div>
            <h2 className='text-xl md:text-2xl font-bold text-gray-800'>Checkout page</h2>
        </div>

        <div className='grid lg:grid-cols-12 mt-12 gap-14 lg:gap-0'>
          <div className='lg:col-span-5 grid gap-14'>
            <div>
              <h3 className='text-xl font-medium mb-6'>Shipping Information</h3>
              <div className='space-y-4'>
                <div className='grid gap-1'>
                  <label htmlFor="user-name">Complete name</label>
                  <input type="text" name="" id="user-name" className='border-2 border-gray-200 p-2 outline-none'/>
                </div>


                  <div className='grid gap-1'>
                    <label htmlFor="street">Complete Address</label>
                    <input type="text" name="" id="street" className='border-2 border-gray-200 p-2 outline-none'/>
                  </div>

                <div className='grid gap-1'>
                  <label htmlFor="phonenumber">Phone number</label>
                  <input type="text" name="" id="phonenumber" className='border-2 border-gray-200 p-2 outline-none'/>
                </div>         
              </div>

            </div>

            <PaymentMethods/>
          </div>

          <CheckoutOrderSummary/>
        </div>
      </section>
    </main>
  )
}

export default CheckoutPage

/* 
If you have a profile page where users can fill in their shipping information in advance, you can make the checkout process much smoother and more user-friendly by pre-filling those fields with the saved data. Here's how it can work:

1. Pre-Filled Information
On the checkout page, automatically populate the name, shipping address, and contact details fields with the information from the user's profile.

Allow users to review and edit this information in case they want to ship to a different address.

2. Option to Save New Details
If the user enters new shipping information during checkout, offer an option to save the updated details to their profile for future use (e.g., a "Save this address to my profile" checkbox).

3. Fallback for First-Time Users
For users who haven’t completed their profile, display empty fields where they can input their shipping details manually.

After checkout, prompt them with an option to save their details to their profile for future orders.

Why This Approach Works:
It reduces friction for returning customers by skipping the need to enter details repeatedly.

It still allows flexibility for users who want to ship to a different address or use alternative contact details.

It ensures new users have a clear and straightforward way to provide their details.

This system balances convenience and flexibility, creating a seamless experience for users while leveraging the profile page data you’ve implemented. If you'd like guidance on coding these features, I’d be happy to help!



*/