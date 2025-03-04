'use client';

import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import Button from '../ui/Button';
import { useRouter, useSearchParams } from 'next/navigation';

interface FilterModalProps  {
  params: { category: string };
};

const FilterModal = forwardRef(({ params }: FilterModalProps, ref) => {
  const [isHidden, setIsHidden] = useState(true);
  const [category, setCategory] = useState(params.category || 'all');
  const [sort, setSort] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const sortBy = searchParams.get('sortBy') || '';

  const categoryHandler = (categoryName: string) => {
    setCategory(categoryName);
  };
  const sortHandler = (sortName: string) => {
    setSort(sortName);
  };

  const hideModalAndApplyFilter = () => {
    router.push(`/shop${category && `/${category}`}${sort ? `?sortBy=${sort}` : ''}`);
    setIsHidden(true);
    document.body.classList.remove('no-scroll')
  };

  const hideModal = () => {
    setIsHidden(true);
    document.body.classList.remove('no-scroll')
  }

  useImperativeHandle(ref, () => ({
    isHidden,
    openModal: () => setIsHidden(false),
  }));

  useEffect(() => {
    setSort(sortBy);
  }, [sortBy]);

  return (
    <div className={`${isHidden && 'hidden'} md:hidden`}>
      <div className='fixed top-0 left-0 w-full h-screen bg-black/30' onClick={hideModal} />
      <div className='fixed top-[76px] left-0 z-10 px-6 py-6 bg-white w-full rounded-md'>
        <div className='flex items-center justify-between mb-4'>
          <h5 className='font-medium text-gray-800'>Filter</h5>
          <Button
            className='text-lg hover:bg-gray-100 h-8 w-8 rounded-md flex items-center justify-center flex-none text-gray-800'
            onClick={hideModal}
          >
            <HiOutlineX />
          </Button>
        </div>
        <div className='h-[1px] w-full bg-black/10 my-2' />

        {/* category filter */}
        <div className='text-sm text-gray-800'>
          <div className='py-1.5 w-full'>
            <label htmlFor='allproducts' className={`${category === '' ? 'font-bold' : ''} cursor-pointer`}>All Products</label>
            <input type='radio' name='category' id='allproducts' onChange={() => categoryHandler('')} hidden />
          </div>
          <div className='py-1.5 w-full'>
            <label htmlFor='electronics' className={`${category === 'electronics' ? 'font-bold' : ''} cursor-pointer`}>Electronics</label>
            <input type='radio' name='category' id='electronics' onChange={() => categoryHandler('electronics')} hidden />
          </div>
          <div className='py-1.5 w-full'>
            <label htmlFor='jewelery' className={`${category === 'jewelery' ? 'font-bold' : ''} cursor-pointer`}>Jewelery</label>
            <input type='radio' name='category' id='jewelery' onChange={() => categoryHandler('jewelery')} hidden />
          </div>
          <div className='py-1.5 w-full'>
            <label htmlFor='mensclothing' className={`${decodeURIComponent(category) === "men's clothing" ? 'font-bold' : ''} cursor-pointer`}>Men&apos;s Clothing</label>
            <input type='radio' name='category' id='mensclothing' onChange={() => categoryHandler("men's clothing")} hidden />
          </div>
          <div className='py-1.5 w-full'>
            <label htmlFor='womensclothing' className={`${decodeURIComponent(category) === "women's clothing" ? 'font-bold' : ''} cursor-pointer`}>Women&apos;s Clothing</label>
            <input type='radio' name='category' id='womensclothing' onChange={() => categoryHandler("women's clothing")} hidden />
          </div>
        </div>

        <div className='h-[1px] w-full bg-black/10 my-2' />
        <div className='mb-4'>
          <p className='font-medium mb-2 text-gray-800'>Sort By</p>
          <div className='text-sm text-gray-800'>
            <div className='py-1.5 w-full'>
              <label htmlFor='default' className={`${sort === '' ? 'font-bold' : ''} cursor-pointer`}>Default</label>
              <input type='radio' name='sort' id='default' onChange={() => sortHandler('')} hidden />
            </div>
            <div className='py-1.5 w-full'>
              <label htmlFor='nameasc' className={`${sort === 'name-asc' ? 'font-bold' : ''} cursor-pointer`}>Name: (A-Z)</label>
              <input type='radio' name='sort' id='nameasc' onChange={() => sortHandler('name-asc')} hidden />
            </div>
            <div className='py-1.5 w-full'>
              <label htmlFor='namedsc' className={`${sort === 'name-desc' ? 'font-bold' : ''} cursor-pointer`}>Name: (Z-A)</label>
              <input type='radio' name='sort' id='namedsc' onChange={() => sortHandler('name-desc')} hidden />
            </div>
            <div className='py-1.5 w-full'>
              <label htmlFor='priceasc' className={`${sort === 'price-asc' ? 'font-bold' : ''} cursor-pointer`}>Price: Low to High</label>
              <input type='radio' name='sort' id='priceasc' onChange={() => sortHandler('price-asc')} hidden />
            </div>
            <div className='py-1.5 w-full'>
              <label htmlFor='pricedsc' className={`${sort === 'price-desc' ? 'font-bold' : ''} cursor-pointer`}>Price: High to Low</label>
              <input type='radio' name='sort' id='pricedsc' onChange={() => sortHandler('price-desc')} hidden />
            </div>
            <div className='py-1.5 w-full'>
              <label htmlFor='ratingasc' className={`${sort === 'rating-asc' ? 'font-bold' : ''} cursor-pointer`}>Rating: Low to High</label>
              <input type='radio' name='sort' id='ratingasc' onChange={() => sortHandler('rating-asc')} hidden />
            </div>
            <div className='py-1.5 w-full'>
              <label htmlFor='ratingdsc' className={`${sort === 'rating-desc' ? 'font-bold' : ''} cursor-pointer`}>Rating: High to Low</label>
              <input type='radio' name='sort' id='ratingdsc' onChange={() => sortHandler('rating-desc')} hidden />
            </div>
          </div>
        </div>
        <Button onClick={hideModalAndApplyFilter} className='w-full bg-orange-500 text-center py-2 text-white font-medium rounded-sm'>
          Apply Filter
        </Button>
      </div>
    </div>
  );
});

// Add this line to give the component a display name
FilterModal.displayName = 'FilterModal';

export default FilterModal;
