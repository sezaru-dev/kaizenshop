

// Ensuring this component runs only on the client side
'use client';

import SortDropdown from '@/components/SortDropdown';
import Button from '@/components/ui/Button';
import { useFetchProductsStore } from '@/store/fetch-products-store';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { BiSlider } from "react-icons/bi";
import FilterModal from '@/components/modals/FilterModal';
import ProductCard from '@/components/ProductCard';

type Props = {
  params: {
    category: string;
  };
};

const Shop: React.FC<Props> = ({ params }) => {
  const childRef = useRef<{ isHidden: boolean; openModal: () => void }>(null);
  const products = useFetchProductsStore((state) => state.products);
  const getProducts = useFetchProductsStore((state) => state.getProducts);
  const searchParams = useSearchParams();
  const sortBy = searchParams.get('sortBy') || '';

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const sortedProducts = products?.slice().sort((a, b) => {
    switch (sortBy) {
      case 'name-asc':
        return a.title.localeCompare(b.title);
      case 'name-desc':
        return b.title.localeCompare(a.title);
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating-asc':
        return a.rating.rate - b.rating.rate;
      case 'rating-desc':
        return b.rating.rate - a.rating.rate;
      default:
        return 0;
    }
  });

  const handleOpenModal = () => {
    if (childRef.current) {
      childRef.current.openModal();
    }
  };

  return (
    <main>
      <section className="min-h-screen">
        <div className="container lg:max-w-[1280px] mx-auto px-6 lg:pt-20">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="col-span-3 hidden md:block">
              <ul className="space-y-4">
                <li className="font-bold">
                  <Link href={`/shop${sortBy ? `?sortBy=${sortBy}`:''}`}>All</Link>
                </li>
                <li>
                  <Link href={`/shop/electronics${sortBy ? `?sortBy=${sortBy}`:''}`}>Electronics</Link>
                </li>
                <li>
                  <Link href={`/shop/jewelery${sortBy ? `?sortBy=${sortBy}`:''}`}>Jewelery</Link>
                </li>
                <li>
                  <Link href={`/shop/men's clothing${sortBy ? `?sortBy=${sortBy}`:''}`}>Men&apos;s Clothing</Link>
                </li>
                <li>
                  <Link href={`/shop/women's clothing${sortBy ? `?sortBy=${sortBy}`:''}`}>Women&apos;s Clothing</Link>
                </li>
              </ul>
            </div>
            <div className="md:col-span-9">
              <div className="flex justify-between items-center py-6 md:py-0">
                <h3 className="text-gray-800 text-xl lg:text-3xl font-bold capitalize">All Products</h3>
                <SortDropdown className='hidden md:flex'/>
                <Button className='text-lg hover:bg-gray-100 h-8 w-8 rounded-md flex md:hidden items-center justify-center flex-none' onClick={handleOpenModal}><BiSlider /></Button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
                {sortedProducts ? sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product}/>
                )) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
      <FilterModal ref={childRef} params={params}/>
    </main>
  );
};

export default Shop;
