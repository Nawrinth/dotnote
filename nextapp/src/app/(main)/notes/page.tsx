import React from 'react'
import SearchNotesBar from './_components/SearchNotesBar'
import { Button } from '@/components/ui/button'
import EmptyState from './_components/EmptyState'

const NotesPage = () => {
  return (
    <div className='pt-5  overflow-y-hidden h-full  w-full space-y-10 relative'>
        <div className='flex justify-between items-center px-10'>
            {/* SEARCH BAR  */}
            <SearchNotesBar/>

            {/* Create New One 
            <div className=' absolute md:block bottom-5 right-5 '>
                <Button className='font-semibold text-sm'>Create Note</Button>
                
            </div> */}
        </div>

        {/* Notes List  */}

        <EmptyState/>  {/*Empty State*/}

            
    </div>
  )
}

export default NotesPage