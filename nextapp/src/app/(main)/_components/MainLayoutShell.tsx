// src/app/(main)/_components/MainLayoutShell.tsx
"use client"

import React from 'react'
import { Menu } from 'lucide-react'
import { useResponsiveStore } from '@/store/useResponsiveStore'
import VerticalNavBar from './VerticalNavBar'
import { useAuthStore } from '@/store/useAuthStore'

const MainLayoutShell = ({ children }: { children: React.ReactNode }) => {
  const { navbarCollapsed, togglenavbarCollapsed } = useResponsiveStore();
  const {authUser} = useAuthStore();

  if (!authUser){
    return(
      <div className='flex items-center justify-center z-1000 h-screen w-screen top-0 left-0'>
          Loading...
      </div>
    )
  }

  return (
    <div className='w-screen min-h-screen flex gap-2'>
      {/* Sidebar Toggle Button */}
      <div className={`fixed top-2 left-2 z-50 ${navbarCollapsed ? "" : "hidden"}`}>
        <button 
          className='p-2 bg-background rounded-lg border hover:bg-accent' 
          onClick={() => togglenavbarCollapsed()}
        >
          <Menu className='size-5'/>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed z-40 ${navbarCollapsed ? "-left-80" : "left-0"} transition-all duration-300`}>
        <VerticalNavBar />
      </div>

      {/* Main Content Area */}
      <div className={`${navbarCollapsed ? "px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64" : "pl-76 pr-4"} w-full transition-all duration-300`}>
        {children}
      </div>
    </div>
  )
}

export default MainLayoutShell