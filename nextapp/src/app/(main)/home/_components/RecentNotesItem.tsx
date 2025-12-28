import React from 'react'

const RecentNotesItem = () => {
  return (
    <div className=' w-full rounded-lg p-2 border '>
        {/* NOTE NAME  */}
        <div className='w-full aspect-video bg-sidebar/40 rounded'>

        </div>
        <h1 className='font-bold text-sm mt-2'>
            CA notes CSE345
        </h1>
        <p className='text-[10px] opacity-70 mt-2'>Updated At: {"12/12/25 9:58 pm"}</p>

    </div>
  )
}

export default RecentNotesItem