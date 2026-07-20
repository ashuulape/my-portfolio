import React, { useEffect, useState } from 'react'
import { Slide } from './Slide'
import {motion}  from 'framer-motion'
import SplitText from './components/SplitText'




const Projects = () => {

    const [text, settext] = useState(true)
    
        useEffect(() => {
            
            const time = setTimeout(() => settext(false), 2000)
            
            return () => clearTimeout(time)
          }, [])
          
  return (
    <div>
          
                <Slide color={'bg-[#87ceeb]'} />
    {text && <motion.div 
                animate={{opacity:[1,0],}}
                transition={{ duration: 0.8, delay: 1.5 }}
                className='absolute flex w-full h-[100dvh] z-99999 text-center items-center justify-center'>
                <SplitText
                text="Projects"
                className="text-5xl font-semibold text-center text-black "/> 
            </motion.div>}
           
    </div>
  )
}

export default Projects