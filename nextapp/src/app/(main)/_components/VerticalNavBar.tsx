"use client"

import { ModeToggle } from '@/components/mode-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuthStore } from '@/store/useAuthStore'
import { useResponsiveStore } from '@/store/useResponsiveStore'
import { Calendar, ChevronsLeft, Home, MessageSquareMore, NotebookText, Search, Settings, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const VerticalNavBar = () => {
  const { navbarCollapsed, togglenavbarCollapsed } = useResponsiveStore();
  const navLinks = [
    { index: 0, name: "Home", icon: <Home className='size-4' />, navigateTo:"/home" },
    { index: 1, name: "Messages", icon: <MessageSquareMore className='size-4' />, navigateTo:"/message" },
    { index: 2, name: "DotCom", icon: <Users className='size-4' />, navigateTo:"/dotcom" },
    { index: 3, name: "Calendar", icon: <Calendar className='size-4' />, navigateTo:"/calendar" },
    { index: 4, name: "Notes", icon: <NotebookText className='size-4' />, navigateTo:"/notes" },
    { index: 5, name: "Settings", icon: <Settings className='size-4' />, navigateTo:"/settings" },
  ]

  const { authUser } = useAuthStore();
  return (
    <div className='overflow-y-auto h-screen p-2 w-70 bg-sidebar z-100'>
      <div className='flex gap-8 justify-between items-center p-1'>
        <div className='flex gap-3 items-center'>
          <div className='size-7 rounded-lg flex items-center justify-center'>
            {authUser?.image && <Avatar>
              <AvatarImage src={authUser?.image} className='object-cover' />
              <AvatarFallback>R</AvatarFallback>
            </Avatar>}
            {!authUser?.image && 
              <Avatar className='flex items-center justify-center  bg-gradient-to-tr from-purple-500/80 to-pink-500/80'>
               
                  <p className='text-white font-bold'>{authUser?.fullName[0] || ""}</p>

              </Avatar>
            }
          </div>
          <p className='truncate font-semibold'>
            {`${authUser?.fullName}`}
          </p>
        </div>
        <button className='p-1 flex items-center justify-center rounded-lg hover:bg-foreground/3 cursor-pointer'>
          <ChevronsLeft className='size-5 ' onClick={() => { togglenavbarCollapsed(); console.log(navbarCollapsed) }} />
        </button>
      </div>
      {/* NAVLINKS  */}
      <div className='mt-6 flex flex-col gap-2'>
        {navLinks.map((item, index) => {
          return <Link href={item.navigateTo} key={index} className='flex w-full p-2 hover:bg-foreground/8 gap-2 items-center rounded-lg'>
            {item.icon}
            <p className='text-sm'>{item.name}</p>

          </Link>
        })}

      </div>

      {/* Favourites  */}

      <div className='flex mt-8 flex-col gap-4'>
        <p className='text-xs font-semibold opacity-70 px-2 tracking-wider'>FAVOURITIES</p>
        <ModeToggle />

      </div>
    </div>
  )
}

export default VerticalNavBar