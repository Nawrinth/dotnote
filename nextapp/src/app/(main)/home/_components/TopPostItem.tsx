import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const TopPostItem = () => {
  return (
    <div className='border w-full min-h-30 rounded p-2 px-4'>
        {/* IMAGE  */}
        <div className='w-full aspect-video bg-sidebar'>
            <img src="https://www.deptagency.com/wp-content/uploads/2022/08/Dept_Office-2-1.jpg" className='w-full h-full object-cover' alt="" />
        </div>

        {/* CONTENTS  */}
        <div className='mt-3'>
            {/* TOPIC  */}
            <p className='text-sm bg-gradient-to-tr from-purple-500 to-pink-500 text-transparent bg-clip-text font-semibold'>Software Engineering</p>

            {/* HEADING  */}
            <div className='mt-2 flex gap-4 justify-between group cursor-pointer'>
                <h1 className='text-xl font-bold'>Build your API Stack  </h1>
                <button className='h-full group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-150 hover:opacity-70'>
                    <ArrowUpRight />
                </button>
            </div>

            {/* Short Description  */}
            <div className='mt-2 text-sm font-medium opacity-65'>
                <p className='leading-6'>The rise of RESTful APIs has been met by a rise in tools for creating, testing and managing them</p>
            </div>

            {/* POSTED BY  */}
            <div className='flex gap-2 mt-6'>
                {/* PROFILE IMAGE  */}
                <div className='flex gap-2'>
                    <Avatar className='size-10'>
                        <AvatarImage src={""} className='object-cover' />
                        <AvatarFallback>J</AvatarFallback>
                    </Avatar>
                    <div className='h-full flex flex-col justify-evenly'>
                        {/* NAME  */}
                        <p className='font-semibold text-sm'>Jon Snow</p>
                        <p className='text-xs opacity-70'>{"19 Jan 2025"}</p>
                    </div>
                </div>
            </div>

        </div>


    </div>
  )
}

export default TopPostItem