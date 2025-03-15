'use client'

import { ProductType } from "@/store/fetch-products-store";
import Image from "next/image";
import React, { lazy, Suspense, useState, useEffect } from 'react';
import { useCartStore } from "@/store/cart-store";
import Loader from "@/components/ui/Loader";
import { toast } from "sonner";

// Lazy load components
const Button = lazy(() => import('@/components/Button'));
const Counter = lazy(() => import('@/components/ui/Counter'));
const Rating = lazy(() => import('@/components/ui/Rating'));

type Props = {
  params: {
    productId: string;
  };
};

const ProductDetails = ({ params }: Props) => {
  const cart = useCartStore((state) => state.cart);
  const AddToCart = useCartStore((state) => state.AddToCart);
  const [product, setProduct] = useState<ProductType>();
  const [count, setCount] = useState<number>(1);

  const productId = parseInt(params.productId);

  const FetchProductDetails = async (id?: number) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchProductDetails(productId);
  }, [productId]);

/*   const handleAddToCart = (item:CartInterface) => {
    AddToCart(item);
    router.back();
  }; */

  const addToCartHandler = (product:ProductType) => {
    AddToCart({
      productId: Number(product?.id) || 0,
      productName: product?.title || 'Unknown Product',
      productPrice: product?.price || 0,
      productImage: product?.image || '',
      quantity: count,
      total: product?.price ? product.price * 1 : 0,
    })
    toast.custom(() => (
      <div className='w-96 p-2'>
        <h1>Added to cart</h1>
        <div className='flex items-center gap-4 text-gray-500'>
          <small className='max-w-[80%] truncate'>{product?.title}</small>
          <small>x{count}</small>
        </div>
      </div>
    ));
  
  }

  console.log(cart);

  return (
    <main className="min-h-[calc(100vh-7rem)] w-full">
      {product ? (
        <section className="container lg:max-w-[1280px] mx-auto px-6">
          <h2 className="mt-6 lg:mt-16 text-2xl lg:text-[2.5rem] font-bold text-gray-800 uppercase">Product Details</h2>
          <div className="grid md:grid-cols-2 gap-14 my-10">
            <div className="relative overflow-hidden rounded-lg w-full h-64 border">
              <Image
                src={product?.image}
                alt="Product Image"
                fill
                priority
                className="object-contain scale-[.8] group-hover:scale-[.9] transition-transform duration-200 ease-in-out"
              />
            </div>
            <div>
              <div>
                <h3 className="text-2xl lg:text-[2.5rem] font-bold text-gray-900">{product?.title}</h3>
                <p className="hidden capitalize py-1 px-3 rounded-full bg-gray-200 w-max text-xs">{product?.category}</p>
                <div className="flex items-center gap-2 mt-3">
                  <Suspense fallback={<div>Loading Rating...</div>}>
                    <Rating rate={product?.rating?.rate} />
                  </Suspense>
                  <p className="text-sm text-black/70">{product?.rating.count} reviews</p>
                </div>
                <h4 className="text-xl lg:text-2xl font-bold mt-1">${product?.price}</h4>
                <p className="text-sm lg:text-base mt-6 text-black/70">{product?.description}</p>
              </div>
              <div className="flex gap-4 mt-6">
                <Suspense fallback={<div>Loading Counter...</div>}>
                  <Counter buttonStyles="h-10 w-10" inputStyles="h-10" setCount={setCount} count={count} />
                </Suspense>
                <Suspense fallback={<div>Loading Button...</div>}>
                  <Button
                    type="button"
                    className="py-2.5 px-6 text-center w-full bg-purple-600 text-white font-bold rounded-lg"
                    onClick={() => addToCartHandler(product)}>
                    Add to Cart
                  </Button>
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      ) : 
      <div className='min-h-[calc(100vh-7rem)] w-full grid place-content-center'>
        <Loader/>
      </div>
    }
    </main>
  );
};

export default ProductDetails;
