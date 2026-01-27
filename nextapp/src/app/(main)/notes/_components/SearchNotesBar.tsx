import { Search } from 'lucide-react'
import React from 'react'

const SearchNotesBar = () => {
  return (
    
    <div className='py-3 px-2 border rounded flex gap-2 w-full items-center max-w-150 '>
        <Search className='size-4'/>
        <input type="text" className='outline-0 border-0 w-full text-sm' placeholder='Search for a note' />
    </div>
  )
}

export default SearchNotesBar