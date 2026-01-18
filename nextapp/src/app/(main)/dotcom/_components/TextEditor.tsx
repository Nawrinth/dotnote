"use client"

import Tiptap from '@/components/Tiptap';
import React, { useState } from 'react'
const TextEditor = () => {

const [value, setValue] = useState<string | undefined>("");
  return (
    <div className='min-h-200'>
      <Tiptap/>
    </div>
  )
}

export default TextEditor