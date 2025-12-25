"use client"

import React from 'react'
import VerticalNavBar from './_components/VerticalNavBar'
import { Menu } from 'lucide-react'
import { useResponsiveStore } from '@/store/useResponsiveStore'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  const {navbarCollapsed , togglenavbarCollapsed} = useResponsiveStore();
  return (
    <div className='w-screen min-h-screen flex gap-2 '>
        <div className={`fixed top-2 left-2  ${navbarCollapsed?"":"hidden"} `}>
          <button className=' p-2 bg-foreground/4 rounded-lg border hover:bg-foreground/10' onClick={()=>{togglenavbarCollapsed()}}>
            <Menu className='size-5'/>
          </button>
        </div>
        <div className={`fixed ${navbarCollapsed?"-left-100":"left-0"} transition-all duration-100`}>
            <VerticalNavBar/>
        </div>
        <div className={`${navbarCollapsed?"2xl:px-64 xl:px-32 lg:px-16 md:px-8 px-4":"pl-70"} w-full transition-all duration-100`}>
            {children}

        </div>

        
    </div>
  )
}

export default MainLayout