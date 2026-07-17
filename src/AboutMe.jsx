import React, { useEffect, useRef, useState } from 'react'
import StaggeredMenu from './components/StaggeredMenu'
import logo from '../src/assets/mask.png'
import { Slide } from './Slide';
import MagicBento from './components/MagicBento'
import TextPressure from './components/TextPressure';
import SideRays  from './components/SideRays';
import gsap from 'gsap';
import ScrollFloat from './components/ScrollFloat';
import ScrollReveal from './components/ScrollReveal';
import SplitText from './components/SplitText'
import {motion} from 'motion/react'


const AboutMe = () => {
  const [show, setShow] = useState(false)
  const [text, settext] = useState(true)
  const boxRef = useRef(null)
 

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2800)
    const time = setTimeout(() => settext(false), 2000)
    
    return () => clearTimeout(timer,time)
  }, [])

  useEffect(() => {
  
    if (show && boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 20, scale: 0.95 ,display:'none' },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, display:'block',ease: "power2.out" }
      );
   
    }
  }, [show]);

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


    <div className='h-fit  w-full relative bg-black pointer-events-none '>
  {text && <motion.div 
  animate={{
    opacity:[1,0],
  }}
    transition={{ duration: 0.8, delay: 1.5 }}
  className='absolute flex w-full h-[100dvh] z-99999 text-center items-center justify-center'>
    <SplitText
   text="About Me"
  className="text-5xl font-semibold text-center text-black "
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"/>
    
    </motion.div>}


<div style={{ width: '100%', height: 'full', position: 'fixed' }}>
          <SideRays
            rayColor1="#5608ea"
            rayColor2="#ffa2ab"
            origin="top-right"
            speed={2.5}
            intensity={2}
            spread={10}
            tilt={0}
            saturation={1.5}
            blend={0.75}
            falloff={1.6}
            opacity={1}
          />
        </div>
        <div className='absolute w-full overflow-clip z-99'>
            <Slide/>
        </div>
     <div className='h-full w-full absolute pointer-events-none z-10'>
      

   <StaggeredMenu
     position="left"
     
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
<div className='w-full h-fit pt-[10vh]'>

          <TextPressure
    text="All About Me!"
    flex
    alpha={false}
    stroke
    width
    weight
    italic
    textColor="#ffffff"
    strokeColor="#5227FF"
    minFontSize={36}

  />
</div>
      <div  ref={boxRef} className='h-fit w-full relativepointer-events-none hidden '>
      {/* ...Slide, StaggeredMenu, TextPressure unchanged... */}

      {show && (<div className='flex flex-col gap-10 items-center '>


        <div className='w-full h-fit flex flex-col gap-10 items-center justify-end p-[5vw] md-10vh '>
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

          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=70%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
           Want to Know More!
          </ScrollFloat>


          <ScrollReveal
            baseOpacity={0}
            enableBlur
            baseRotation={0}
            blurStrength={5}
          >
            When does a man die? When he is hit by a bullet? No! When he suffers a disease?
            No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
      </div>
        
      )}
    </div>
         
    </div>
  )
}

export default AboutMe