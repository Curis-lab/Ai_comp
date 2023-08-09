'use client';

import React, { ChangeEventHandler, useState } from 'react'


import * as Lucide from 'lucide-react';
import { Input } from './ui/input';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from '@/hooks/use-debounce';


function SearchInput() {
    const router =useRouter();
    const searchParams = useSearchParams();

    const categoryId = searchParams.get('categoryId');
    const name = searchParams.get('name');

    const [value, setValue] = useState(name || '');

    const debouncedValue = useDebounce<string>(value, 500);

    const onChange: ChangeEventHandler<HTMLInputElement> = (e)=>{
        setValue(e.target.value);
    }

    // TODO: continue for the next days
  return (
    <div className='relative w-full'>
        <Lucide.Search className='absolute h-4 w-4 top-3 left-4 text-muted-foreground'/>
        <Input placeholder='Search....' className='pl-10 bg-primary/10'/>
    </div>
  )
}

export default SearchInput
