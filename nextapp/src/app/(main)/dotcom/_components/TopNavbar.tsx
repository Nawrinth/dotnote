import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import CreateStoryButton from './CreateStoryButton'

const TopNavbar = () => {
  return (
    <div className='flex justify-between items-center h-[60px] border-b '>
        {/* LOGO  */}
        <div className='font-bold text-2xl'>
            .note
        </div>

        {/* Search Bar  */}
        <div className='flex gap-6 items-center'>
            <CreateStoryButton/>
            <Link href="" className='font-medium text-sm'>Favourities</Link>
            <Link href="" className='font-medium text-sm'>Profile</Link>
            {/* <div className='flex gap-2 bg-popover py-2 border border-border/40 px-3 items-center rounded-lg'>
                <Search className='size-4'/>
                <input type="text" className='outline-0 text-sm' placeholder='Search...' />
            </div> */}

            
        </div>
        
    </div>
  )
}

export default TopNavbar