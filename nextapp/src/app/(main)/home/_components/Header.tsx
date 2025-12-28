"use client"
import { useAuthStore } from '@/store/useAuthStore'
import React from 'react'

const Header = () => {
    const {authUser} = useAuthStore();
  return (
    <div>
        <h1 className='text-4xl font-bold'>
            {authUser?.fullName}'s Dashboard
        </h1>
    </div>
  )
}

export default Header