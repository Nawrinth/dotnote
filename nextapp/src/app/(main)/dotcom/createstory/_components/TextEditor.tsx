
import React from 'react'
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor'

const TextEditor = ({setContent}:{setContent:any}) => {
  return (
    <div className='w-full'>
        <SimpleEditor setContent={setContent}/>
    </div>
  )
}

export default TextEditor