'use client';
import React, { useCallback } from 'react';
import Button from './Button';
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';
import { useCartStore } from '@/store/cart-store';

interface CounterProps {
  className?: string;
  buttonStyles?: string;
  inputStyles?: string;
  productId?: number;
  cartItemQuantity?: number;
  count?: number;
  setCount?: React.Dispatch<React.SetStateAction<number>>;
}

const Counter = ({ className, buttonStyles, inputStyles, productId, cartItemQuantity, count, setCount }: CounterProps) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity)

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (count && setCount) {      
      if (newValue <= 0) {
        setCount(1);
      } else {
        setCount(newValue);
      }
    }
    if (productId && cartItemQuantity) {      
      if (newValue <= 0) {
        updateQuantity(productId, 1);
      } else {
        updateQuantity(productId, newValue);
      }
    }
  };

  const incrementCount = useCallback(
    () => {
      if (count && setCount) {
        setCount((prevState) => prevState + 1);
      }
    },[count, setCount],
  )
  

  const decrementCount = useCallback(
    () => {
      if (count && setCount){
        if (count > 1) {
          setCount((prevState) => prevState - 1);
        }
      }
    },[count, setCount]
  )

  const decrementQuantity = useCallback((productId:number, cartItemQuantity:number) => {
    const newQuantity = cartItemQuantity > 1 ? cartItemQuantity - 1 : 1;
    updateQuantity(productId, newQuantity)
    console.log(`Updating product ${productId} to quantity ${newQuantity}`);
  }, [updateQuantity]);

  const incrementQuantity = useCallback((productId:number, cartItemQuantity:number) => {
    updateQuantity(productId, cartItemQuantity + 1)
  }, [updateQuantity]);

  
  return (
    <div className={`${className} flex items-center justify-center`}>
      {
        productId && cartItemQuantity ? 
        <Button onClick={() => decrementQuantity(productId, cartItemQuantity)} className={`${buttonStyles} bg-gray-100 rounded-l-lg flex items-center justify-center flex-none`}>
          <HiOutlineMinusSm />
        </Button>

        :<Button onClick={decrementCount} className={`${buttonStyles} bg-gray-100 rounded-l-lg flex items-center justify-center flex-none`}>
          <HiOutlineMinusSm />
        </Button>
        
      }
      <input
        type="number"
        onChange={handleChange}
        onBlur={handleChange}
        min={1}
        id="quantity-setter"
        name="quantitySetter"
        value={count ? count : cartItemQuantity}
        className={`${inputStyles} text-center bg-gray-100 outline-none w-full min-w-8`}
      />
        {
        productId && cartItemQuantity ? 
          <Button onClick={() => incrementQuantity(productId, cartItemQuantity + 1)} className={`${buttonStyles} bg-gray-100 rounded-r-lg flex items-center justify-center flex-none`}>
            <HiOutlinePlusSm />
          </Button>
          :
          <Button onClick={incrementCount} className={`${buttonStyles} bg-gray-100 rounded-r-lg flex items-center justify-center flex-none`}>
            <HiOutlinePlusSm />
          </Button>
        }
    </div>
  );
};

export default React.memo(Counter)
