
import React from 'react'
import CreateNote from './CreateNote'
import RecentNotesItem from './RecentNotesItem'

const RecentNotes = () => {
  return (
    <div className='flex flex-col gap-4 mt-10'>
        {/* HEADING  */}
        <div className=''>
        <h1 className='text-xl font-semibold'>Recent Notes</h1>
        </div>

        {/* All Elements  */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 align-bottom'>
            <CreateNote/>
            <RecentNotesItem/>
            <RecentNotesItem/>
            <RecentNotesItem/>
            <RecentNotesItem/>
            <RecentNotesItem/>
            <RecentNotesItem/>
            <RecentNotesItem/>
            <RecentNotesItem/>
            <RecentNotesItem/>

        </div>
        
    </div>
  )
}

export default RecentNotes