import { Plus } from 'lucide-react'
import React from 'react'

const CreateNote = () => {
  return (
    <div className='w-full min-h-55  rounded-lg border flex flex-col gap-2 items-center justify-center'>
        <Plus className='size-8'/>
        <p>Create new note</p>
    </div>
  )
}

export default CreateNote