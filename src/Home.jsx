import React from 'react'
import { Slide  } from './Slide'

import Lanyard from './components/Lanyard'
import DotField  from './components/DotField';
import ColorBends from './components/ColorBends';
import RotatingText from './components/RotatingText'
import StaggeredMenu from './components/StaggeredMenu';
import logo from './assets/mask.png'
import { LogoSlide } from './components/LogoSlide';



const Home = () => {

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Projects', ariaLabel: 'View my projects', link: '/projects' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

  return (

<div >
      <div className="absolute w-full z-999 pointer-events-none">
        <Slide />
      </div>

    <div className="fixed h-full w-full pointer-events-none z-0  ">
      <div className="absolute h-full w-full ">
    <ColorBends colors={["#b96fff"]}/>
      </div>
    <DotField
      dotRadius={1.5}
      dotSpacing={20}
      cursorRadius={500}
      cursorForce={0.10}
      bulgeOnly={true}
      bulgeStrength={67}
      glowRadius={160}
      sparkle={false}
      waveAmplitude={0} />

    </div>



    <div className='h-screen w-screen absolute pointer-events-none'>
  <StaggeredMenu
    position="left"
    items={menuItems}
    socialItems={socialItems}
    displaySocials
    displayItemNumbering={true}
    menuButtonColor="#ffffff"
    openMenuButtonColor="#fff"
    changeMenuColorOnOpen={true}
    colors={['#B497CF', '#5227FF']}
    logoUrl={logo}
    accentColor="#5227FF"
    onMenuOpen={() => console.log('Menu opened')}
    onMenuClose={() => console.log('Menu closed')}
    className={'absolute'}
  />
</div>
    
<div className='h-[100dvh] w-screen flex flex-col justify-between text-white'>

 <div className='h-[80dvh]  relative w-full flex items-center   pt-12  text-white z-10  pointer-events-none'>
      <Lanyard position={[5, 0, 20]} gravity={[0, -40, 0]} />
      <div className='h-1/2 w-1/2  flex flex-col items-start justify-center pl-[5vw] '>
          <h1 className=' flex items-center gap-1 text-3xl font-pixel-grid font-bold'>Be,<RotatingText texts={['Creative', 'Passinate',  'Cool!']}
  mainClassName=" w-fit text-white px-2 sm:px-2 md:px-3 bg-[#7463F8] text-black overflow-hidden py-0.5 sm:py-1 md:py-0.5 justify-center rounded-lg"/></h1> <br />
          <h2 className='text-3xl'>Hi! I'm Ashutosh.</h2>
          <h3 className='text-[2vh] text-white/50'> A creative Frontend Developer who knows some sort of Backend also</h3>
      </div>

 </div>
<h2 className='w-full text-center mb-[-6vh] tracking-widest '>SKILLS & TOOLS</h2>
<LogoSlide/>

</div>

 
</div>
  )
}

export default Home