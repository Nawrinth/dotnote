"use client"
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CreateStoryButton = () => {
  return (
    <Link href={"/dotcom/createstory"}  className='py-2 px-3 text-background gap-2 rounded-full bg-foreground flex items-center cursor-pointer hover:opacity-85 transition-all duration-150' >
      <Plus className='size-4  text-background'/>
      <p className=' text-background text-sm font-semibold'>Create a story</p>
    </Link>
  )
}

export default CreateStoryButton