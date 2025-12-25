"use client"

import { Volkhov } from 'next/font/google'
import React from 'react'
import {motion} from "motion/react"
import { Button } from '@/components/ui/button'
const volkhov = Volkhov({
    variable: "--font-volkhov",
    subsets: ["latin"],
    weight: '700'
})

const Hero = () => {
    
  return (
    <div className='flex flex-col items-center mt-20 gap-6'>
        <div className={`max-w-[95%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] ${volkhov.className}`}>
            <motion.h1 
            initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:1.2}}
            className={`text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-center tracking-wide md:leading-16 leading-12 lg:leading-18 2xl:leading-20 `}>Organize your <span className='bg-gradient-to-tr from-violet-500 to-pink-500 text-transparent bg-clip-text'>life and work</span> exactly the way you think</motion.h1>
            <motion.p 
            initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:1.2,delay:0.3}}
            className='text-center mt-2 uppercas font-semibold text-foreground/70'>Clear the mental clutter by centralizing every single important thought in one place.</motion.p>
        </div>
        <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:1.2,delay:0.6}} className='mt-8 flex gap-6'>
            <Button className='cursor-pointer'>Get Started</Button>
            <Button className='text-foreground border cursor-pointer bg-foreground/3 hover:bg-foreground/10'>Know More </Button>

        </motion.div>
    </div>
  )
}

export default Hero