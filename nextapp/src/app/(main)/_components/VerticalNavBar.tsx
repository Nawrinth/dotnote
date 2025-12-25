"use client"

import { useResponsiveStore } from '@/store/useResponsiveStore'
import {  Calendar, ChevronsLeft, Home, MessageSquareMore, NotebookText, Search, Settings } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React from 'react'

const VerticalNavBar = () => {
  const {navbarCollapsed , togglenavbarCollapsed} = useResponsiveStore();
  const {data:session} = useSession();
  const navLinks = [
    {index:0,name:"Search",icon:<Search className='size-5'/>},
    {index:1,name:"Home",icon:<Home className='size-5'/>},
    {index:2,name:"Messages",icon:<MessageSquareMore className='size-5'/>},
    {index:3,name:"Calendar",icon:<Calendar className='size-5'/>},
    {index:4,name:"Notes",icon:<NotebookText className='size-5'/>},
    {index:5,name:"Settings",icon:<Settings className='size-5'/>},
  ]
  return (
    <div className='overflow-y-auto h-screen p-4 w-70 bg-sidebar'>
        <div className='flex gap-8 justify-between items-center'>
            <p className='truncate font-semibold text-lg'>
                {`${"Ryan Noah"}'s Workspace`}
            </p>
            <button className='p-1 flex items-center justify-center rounded-lg hover:bg-foreground/3 cursor-pointer'>
                <ChevronsLeft className='size-5 ' onClick={()=>{togglenavbarCollapsed();console.log(navbarCollapsed)}}/>
            </button>
        </div>
        {/* NAVLINKS  */}
        <div className='mt-10 flex flex-col gap-2'>
          {navLinks.map((item,index)=>{
            return <div key={index} className='flex w-full p-2 hover:bg-foreground/3 gap-2 items-center rounded-lg'>
              {item.icon}
              <p>{item.name}</p>
              
            </div>
          })}

        </div>

        {/* Favourites  */}

        <div className='flex mt-10 flex-col gap-4'>
          <p className='text-xs font-semibold opacity-70 tracking-wider'>FAVOURITIES</p>

        </div>
    </div>
  )
}

export default VerticalNavBar