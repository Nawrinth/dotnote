import React from 'react'
import AddTodayTODO from './AddTodayTODO'
import ListTodayTODO from './ListTodayTODO'

const TodayTODO = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-xl font-semibold'>Today's TODO</h1>
        <div className='mt-4 flex flex-col gap-2'>
            <AddTodayTODO/>
            <div className='mt-2'>
                <ListTodayTODO/>
                <ListTodayTODO/>
                <ListTodayTODO/>
                <ListTodayTODO/>
            </div>
        </div>

        
    </div>
  )
}

export default TodayTODO