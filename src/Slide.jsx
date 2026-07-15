import React from 'react'
import { motion } from 'motion/react'


export const Slide = () => {

const delay=[2,2.2,2.4,2.6,2.8]



  return (
    <div className='flex relative h-screen overflow-hidden'>

        <div className='absolute w-full z-20 flex'>
                  {
                  delay.map((e)=>{
                    return <motion.div
                    
                className='bg-white h-screen w-[20vw]'
                animate={{
                  y:[0,-500,-1000]
                }}
                transition={{
                  duration:0.4,
                  delay:e
                }}
                />
                  })
                 }
        </div>

        <div className='absolute w-full z-10 flex'>
                        {
                  delay.map((e)=>{
                    return <motion.div
                className='bg-red-500 h-screen w-[20vw]'
                animate={{
                  y:[0,500,1000]
                }}
                transition={{
                  duration:0.4,
                  delay:e,
                  
                }}
                />
                  })
                 }
                 

        </div>
     
    
    </div>
  )
}

