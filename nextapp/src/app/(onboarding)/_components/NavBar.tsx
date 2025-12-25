import { Button } from '@/components/ui/button'
import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full  h-15 border-b flex justify-between items-center px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32'>

            {/* LOGO  */}
            <div className='flex gap-2'>
                <div className='flex flex-row'>
                    <div className='size-8 rounded-full bg-foreground'></div>
                    <div className='size-8 rounded-full bg-foreground/20 -ml-4'></div>
                </div>
                {/* <h1 className='font-bold text-xl'>.note</h1> */}
            </div>

            {/* ACTION BUTTON */}

            <div className='flex gap-4'>
                <Button className='cursor-pointer '>
                    Get Started
                </Button>

            </div>

        
    </div>
  )
}

export default NavBar