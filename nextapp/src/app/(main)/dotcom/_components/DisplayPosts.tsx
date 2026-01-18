import React from 'react'
import PostItem from './PostItem'

const DisplayPosts = () => {
  return (
    <div className='flex flex-col mt-10'>
        <h1 className='text-2xl font-bold'>Stories for You</h1>
        <div className='flex flex-col gap-10 mt-5'>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </div>
        
    </div>
  )
}

export default DisplayPosts