import React from 'react'
import Button from './ui/Button'
import { useCartStore } from '@/store/cart-store';
import Image from 'next/image';
import Link from 'next/link';
import Rating from './ui/Rating';
import { ProductType } from '@/store/fetch-products-store';

interface ProductCardProps {
  product: ProductType
}

const ProductCard = ({product}:ProductCardProps) => {
    const AddToCart = useCartStore((state) => state.AddToCart);
  return (
    <div key={product.id} className='w-full p-4'>
      <div className='group'>
        <div className='relative overflow-hidden rounded-lg w-full h-32 md:h-52'>
          <div className='absolute top-0 left-0 z-10 opacity-0 group-hover:opacity-100 bg-black/20 w-full h-full grid place-content-center text-white font-bold'>
            <Button
              onClick={() =>
                AddToCart({
                  productId: Number(product?.id) || 0,
                  productName: product?.title || 'Unknown Product',
                  productPrice: product?.price || 0,
                  productImage: product?.image || '',
                  quantity: 1,
                  total: product?.price ? product.price * 1 : 0,
                })
              }
              className='px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm'
            >
              Add to cart
            </Button>
          </div>
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
        </div>
      </div>
    </div>
  )
}

export default ProductCard