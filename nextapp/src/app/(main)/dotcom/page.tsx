import React, {  } from 'react'
import Trending from './_components/Trending'
import SearchBar from './_components/SearchBar'
import CreateStoryButton from './_components/CreateStoryButton'
import DisplayPosts from './_components/DisplayPosts'

const DotCom = () => {
  
  return (
    <div className='min-h-2000 '>
        <Trending/>
        <SearchBar/>
        <DisplayPosts/>
    </div>
  )
}

export default DotCom