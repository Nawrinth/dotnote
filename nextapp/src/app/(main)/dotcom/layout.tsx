import React from 'react'
import TopNavbar from './_components/TopNavbar'

const DotComLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=''>
        <TopNavbar/>
        {children}
    </div>
  )
}

export default DotComLayout