import React from 'react'
import { useCartStore } from '@/store/cart-store';
import Image from 'next/image';
import Link from 'next/link';
import Rating from './ui/Rating';
import { ProductType } from '@/store/fetch-products-store';
import { Button } from '@/components/ui/button';
import { LuShoppingCart } from "react-icons/lu";
import TooltipWrapper from './TooltipWrapper';
import { toast } from 'sonner';

interface ProductCardProps {
  product: ProductType
}



const ProductCard = ({product}:ProductCardProps) => {
    const AddToCart = useCartStore((state) => state.AddToCart);

    const addToCartHandler = (product:ProductType) => {
      AddToCart({
        productId: Number(product?.id) || 0,
        productName: product?.title || 'Unknown Product',
        productPrice: product?.price || 0,
        productImage: product?.image || '',
        quantity: 1,
        total: product?.price ? product.price * 1 : 0,
      })
      toast.custom(() => (
        <div className='w-96 p-2'>
          <h1>Added to cart</h1>
          <div className='flex items-center gap-4 text-gray-500'>
            <small className='max-w-[80%] truncate'>{product?.title}</small>
            <small>x1</small>
          </div>
        </div>
      ));
    
    }
    
  return (
    <div key={product.id} className='w-full p-4'>
      <div className='group'>
        <div className='relative overflow-hidden rounded-lg w-full h-32 md:h-52'>
          <Image
            src={product.image}
            alt='Product Image'
            fill
            priority
            className='object-contain scale-[.8] group-hover:scale-[.9] transition-transform duration-200 ease-in-out'
          />
        </div>
      </div>
      <div className='mt-2'>
        <p className='uppercase text-xs text-gray-500 mb-1'>{product.category}</p>
        <h4 className='text-gray-800 text-sm font-medium underline'>
          <Link href={`/product-details/${product.id}`}>{product.title}</Link>
        </h4>
        <div className='flex items-center mt-2 gap-2'>
          <Rating rate={product.rating.rate} />
          <p className='text-gray-500 text-sm'>{product.rating.count} ratings</p>
        </div>
        <div className='inline-flex justify-between w-full mt-2'>
          <h5 className='font-bold text-xl text-gray-900'>${product.price}</h5>
          
          <TooltipWrapper description='Add to cart'>
            <Button
              onClick={() => addToCartHandler(product)}
              variant='outline' 
              size='icon' 
              className='bg-purple-500 text-white hover:bg-purple-300'>
              <LuShoppingCart/>
            </Button>
          </TooltipWrapper>
        </div>
      </div>
    </div>
  )
}

export default ProductCard