'use client';

import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

import * as Lucide from 'lucide-react';
import Sidebar from './sidebar';

function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4'>
        <Lucide.Menu/>
      </SheetTrigger>
      <SheetContent side='left' className='p-0 bg-secondary pt-10 w-32'>
        <Sidebar/>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
