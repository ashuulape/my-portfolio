import React, { useState } from 'react'
import StaggeredMenu from './components/StaggeredMenu'
import logo from '../src/assets/mask.png'
import { Slide } from './Slide';
import MagicBento from './components/MagicBento'
import Spline from '@splinetool/react-spline';


const AboutMe = () => {
const [show, setshow] = useState(false)

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
    <div className='h-[100dvh] w-screen relstive bg-black '>
        <div className='absolute w-full overflow-clip z-99'>
            <Slide/>
        </div>
     <div className='h-screen w-screen absolute pointer-events-none z-10'>
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

       <div className='w-full h-auto flex items-center justify-end p-[5vw]'>
            <MagicBento 
  textAutoHide={true}
  enableStars
  enableSpotlight
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism
  clickEffect={true}
  spotlightRadius={370}
  particleCount={12}
  glowColor="132, 0, 255"
  disableAnimations={false}
/>

       </div>
         
    </div>
  )
}

export default AboutMe