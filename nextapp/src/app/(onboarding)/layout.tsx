import React from 'react'
import NavBar from './_components/NavBar'

const OnboardingLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default OnboardingLayout