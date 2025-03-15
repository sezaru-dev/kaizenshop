import React from 'react'

const PaymentMethods = () => {
  return (
    <div>
      <h3 className='text-xl font-medium mb-6'>Payment Method</h3>
      <div className='space-y-2'>
        <div className='space-x-2'>
          <input type="radio" name="payment-method" id="cod" />
          <label htmlFor="cod" className='cursor-pointer'>Cash on Delivery</label>
        </div>
        <div className='space-x-2'>
          <input type="radio" name="payment-method" id="digitalwallet" />
          <label htmlFor="digitalwallet" className='cursor-pointer'>Digital Wallets (GCash, PayPal, Apple Pay)</label>
        </div>
        <div className='space-x-2'>
          <input type="radio" name="payment-method" id="cards" />
          <label htmlFor="cards" className='cursor-pointer'>Credit/Debit Cards</label>
        </div>
        <div className='space-x-2'>
          <input type="radio" name="payment-method" id="banktransfers" />
          <label htmlFor="banktransfers" className='cursor-pointer'>Bank Transfers</label>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethods