import React from 'react'
import TopPostItem from './TopPostItem'

const TopPosts = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-xl font-semibold'>Top Posts</h1>
        <div className='gap-4 mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            <TopPostItem/>
            <TopPostItem/>
            <TopPostItem/>
            <TopPostItem/>
            <TopPostItem/>
        </div>
    </div>
  )
}

export default TopPosts