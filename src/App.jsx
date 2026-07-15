import React from 'react'
import { Slide  } from './Slide'
import Aurora from './Aurora';
import logo from './assets/mask.png';
import vite from './assets/react.svg';
import Lanyard from './Lanyard'
import { GridDemo } from './GridDemo';


const App = () => {


console.log(document.documentElement.clientWidth);



  return (
    <div className='relative h-full w-full pointer-events-none'>

      <div className='absolute w-full'>
      <Slide/>
      </div>
     <div className='absolute h-full w-full'>
           <Aurora
           colorStops={["#FF8F00","#CD202C"]}
            amplitude={0.4}
           blend={0.5}
           />
     </div>
      
     <GridDemo/>
    
    <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  )
}

export default App