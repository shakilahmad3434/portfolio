"use client"
import React from 'react'
import {motion} from 'motion/react'

const AnimatePage = () => {
  return (
    <motion.div className='w-24 h-24 bg-red-500 rounded' animate={{scale: 2, transition: {duration: 2}}}>

    </motion.div>
  )
}

export default AnimatePage