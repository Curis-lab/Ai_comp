'use client';

import { UserButton } from '@clerk/nextjs';
import * as Lucide from 'lucide-react';

import { Poppins } from 'next/font/google';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';
import MobileSidebar from './mobile-sidebar';

const font = Poppins({
    weight:'600',
    subsets:['latin']
});

function Navbar() {
  return (
    <div className='fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16'>
        <div className='flex items-center'>
            <MobileSidebar/>
            <Link href='/'>
                <h1 className='hidden md:block text-xl md:text-3xl font-bold text-primary'>
                    companion.ai
                </h1>
            </Link>
        </div>
        <div className='flex items-center gap-x-3'>
            <Button variant="preminum" size='sm'>
                Upgrade
                <Lucide.Sparkles className='h-4 w-4 fill-white text-white ml-2'/>
            </Button>
            <ModeToggle/>
            <UserButton/>
        </div>
    </div>
  )
}

export default Navbar
