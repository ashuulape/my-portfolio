import LogoLoop from './components/LogoLoop';
import { SiReact, SiJavascript, SiFigma, SiTailwindcss ,SiRefinedgithub,SiGit,SiHtml5,SiCss,SiNodedotjs,SiExpress,SiPostman,SiMongodb,SiFramer } from 'react-icons/si';

const techLogos = [
  { node: <SiReact color="#61DAFB" />, title: "React", href: "https://react.dev" },
  { node: <SiJavascript color="#F7DF1E" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTailwindcss color="#06B6D4" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiRefinedgithub color="#ffffff" />, title: "GitHub", href: "https://github.com" },
  { node: <SiGit color="#F05032" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiHtml5 color="#E34F26" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <SiCss color="#663399" />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiNodedotjs color="#5FA04E" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress color="#ffffff" />, title: "Express", href: "https://expressjs.com" },
  { node: <SiPostman color="#FF6C37" />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiMongodb color="#47A248" />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiFramer color="#0055FF" />, title: "Framer", href: "https://www.framer.com" },
  { node: <SiFigma color="#F24E1E" />, title: "Figma", href: "https://www.figma.com" },
];
 
// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export  function LogoSlide() {
  return (
    <div className='h-fit relative overflow-hidden'>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={window.innerWidth<700?35:50}
        gap={60}
        hoverSpeed={0.8}
        scaleOnHover={true}
        fadeOut
        fadeOutColor="#000"
        ariaLabel="Technology partners"
      />
      
      {/* Vertical loop with deceleration on hover */}
   
    </div>
  );
}