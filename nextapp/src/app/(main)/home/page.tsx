import React from 'react'
import Header from './_components/Header'
import TodayTODO from './_components/TodayTODO'
import RecentNotes from './_components/RecentNotes'
import TopPosts from './_components/TopPosts'

const DashBoard = () => {
  return (
    <div className='w-full flex flex-col items-center h-1000 px-2 md:px-4 lg:px-8 '>
      <div className='bg-background w-full h-full pt-12'>
        <Header/>
        <TodayTODO/>
        <RecentNotes/>
        <TopPosts/>
          

      </div>

      
    </div>
  )
}

export default DashBoard