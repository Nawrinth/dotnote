import { Search } from 'lucide-react'
import React from 'react'

const TopNavbar = () => {
  return (
    <div className='flex justify-between items-center h-[60px] '>
        {/* LOGO  */}
        <div className='font-bold text-2xl'>
            .note
        </div>

        {/* Search Bar  */}
        <div className='flex gap-6 items-center'>
            

            <div className='flex gap-2 bg-popover py-2 border border-border/40 px-3 items-center rounded-lg'>
                <Search className='size-4'/>
                <input type="text" className='outline-0 text-sm' placeholder='Search...' />
            </div>

            
        </div>
        
    </div>
  )
}

export default TopNavbar