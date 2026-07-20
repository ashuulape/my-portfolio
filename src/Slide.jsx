import React from 'react'
import { motion } from 'motion/react'


export const Slide = ({color='bg-red-500'}) => {

const delay=[2,2.2,2.4,2.6,2.8]



  return (

    <div className="absolute w-full z-999 pointer-events-none">
    <div className='flex relative h-screen overflow-clip'>

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
                className={`${color} h-screen w-[20vw]`}
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
    </div>
  )
}

