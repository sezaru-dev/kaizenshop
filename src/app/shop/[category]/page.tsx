'use client'

import Button from '@/components/ui/Button'
import Rating from '@/components/ui/Rating'
import { useCartStore } from '@/store/cart-store'
import { useFetchProductsStore } from '@/store/fetch-products-store'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

type Props = {
  params: {
    category: string
  }
}

const CategoryProductsPage = ({params}: Props) => {
  const category = params.category;
  const filteredProducts = useFetchProductsStore((state) => state.filteredProducts)
  const getProductsByCategory = useFetchProductsStore((state) => state.getProductsByCategory)
      const AddToCart = useCartStore((state) => state.AddToCart);

  
      useEffect(() => {
        getProductsByCategory(category)
      },[category, getProductsByCategory])

  return (
    <main>
      <section className='min-h-screen'>
        <div className='container lg:max-w-[1280px] mx-auto px-6 pt-20'>
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
            <ul className='space-y-4'>
                <li className='font-bold'>
                  <Link href='/shop'>All</Link>
                </li>
                <li>
                  <Link href='/shop/electronics'>Electronics</Link>
                </li>
                <li>
                  <Link href='/shop/jewelery'>Jewelery</Link>
                </li>
                <li>
                  <Link href="/shop/men's clothing">Men&apos;s Clothing</Link>
                </li>
                <li>
                  <Link href="/shop/women's clothing">Women&apos;s Clothing</Link>
                </li>
              </ul>
            </div>
            <div className='col-span-9'>
              <div className='flex justify-between items-center'>
                <h3 className='text-gray-800 text-3xl font-bold capitalize'>{filteredProducts[0]?.category}</h3>
                <div className='flex items-center gap-2'>
                  <p>Sort by</p>
                  <select className='border border-gray-200 p-2 rounded-lg'>
                    <option value=''>Default</option>
                    <option value=''>Name: (A_Z)</option>
                    <option value=''>Name: (Z-A)</option>
                    <option value=''>Price: Low to High</option>
                    <option value=''>Price: High to Low</option>
                    <option value=''>Rating: Low to High</option>
                    <option value=''>Rating: High to Low</option>
                    </select>
                </div>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20'>
                {
                  filteredProducts? 
                  filteredProducts.map(product => (
                    <div  key={product.id} className="w-full p-4">
                      <div className='group'>
                        <div className="relative overflow-hidden rounded-lg w-full h-52">
                          <div className='absolute top-0 left-0 z-10 opacity-0 group-hover:opacity-100 bg-black/20 w-full h-full grid place-content-center text-white font-bold'>
                            <Button
                              onClick={() =>
                                AddToCart({
                                  productId: Number(product?.id) || 0,
                                  productName: product?.title || "Unknown Product",
                                  productPrice: product?.price || 0,
                                  productImage: product?.image || "",
                                  quantity: 1,
                                  total: product?.price ? product.price * 1 : 0,
                                })
                              }
                             className=' px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm'>
                              Add to cart
                            </Button>
                          </div>
                          <Image
                            src={product.image}
                            alt="Product Image"
                            fill
                            priority
                            className="object-contain scale-[.8] group-hover:scale-[.9] transition-transform duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="uppercase text-xs text-gray-500 mb-1">{product.category}</p>
                        <h4 className="text-gray-800 text-sm font-medium underline">
                          <Link href={`/product-details/${product.id}`}>
                          {product.title}
                          </Link>
                        </h4>
                        <div className="flex items-center mt-2 gap-2">
                          <Rating rate={product.rating.rate}/>
                          <p className="text-gray-500 text-sm">{product.rating.count} ratings</p>
                        </div>
                        <div className="inline-flex justify-between w-full mt-2">
                          <h5 className="font-bold text-xl text-gray-900">${product.price}</h5>
                        </div>
                      </div>
                    </div>
                  )): null
                }
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default CategoryProductsPage