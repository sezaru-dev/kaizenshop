'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

interface SortDropdownProps {
  className?: string
}

const SortDropdown = ({className}:SortDropdownProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sortBy, setSortBy] = useState<string | null>(searchParams.get('sortBy'));

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortBy(value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('sortBy', value);
    } else {
      params.delete('sortBy');
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    setSortBy(searchParams.get('sortBy'));
  }, [searchParams]);

  return (
    <div className={`${className} items-center gap-2 text-sm`}>
      <p>Sort by</p>
      <select className='border border-gray-200 p-2 rounded-lg' value={sortBy || ''} onChange={handleSortChange}>
        <option value=''>Default</option>
        <option value='name-asc'>Name: (A-Z)</option>
        <option value='name-desc'>Name: (Z-A)</option>
        <option value='price-asc'>Price: Low to High</option>
        <option value='price-desc'>Price: High to Low</option>
        <option value='rating-asc'>Rating: Low to High</option>
        <option value='rating-desc'>Rating: High to Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
