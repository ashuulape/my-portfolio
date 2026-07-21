import React, { useEffect, useRef, useState } from "react";
import StaggeredMenu from "./components/StaggeredMenu";
import logo from "../src/assets/mask.png";
import { Slide } from "./Slide";
import MagicBento from "./components/MagicBento";
import TextPressure from "./components/TextPressure";
import SideRays from "./components/SideRays";
import gsap from "gsap";
// import Scrolltext from "./components/Scrolltext";
import SplitText from "./components/SplitText";
import { motion } from "motion/react";
import Scrolltext from "./components/Scrolltext";

const AboutMe = () => {
  const [show, setShow] = useState(false);
  const [text, settext] = useState(true);
  const boxRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2800);
    const time = setTimeout(() => settext(false), 2000);

    return () => clearTimeout(timer, time);
  }, []);

  useEffect(() => {
    if (show && boxRef.current) {
      gsap.fromTo(
        boxRef.current,
        { height: "100%", overflow: "clip" },
        {
          height: "fit-content",
          overflow: "",
        },
      );
    }
  }, [show]);

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Projects", ariaLabel: "View my projects", link: "/projects" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <div
      ref={boxRef}
      className="full-height overflow-clip  w-full relative bg-black pointer-events-none z-10 "
    >
      <Slide color={"bg-[#ff69b4]"} />

      {text && (
        <motion.div
          animate={{
            opacity: [1, 0],
          }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute flex w-full h-[100dvh] z-99999 text-center items-center justify-center"
        >
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
            textAlign="center"
          />
        </motion.div>
      )}

      <div
        style={{
          width: "100%",
          height: "100dvh",
          position: "fixed",
          zIndex: "0",
        }}
      >
        <SideRays
          rayColor1="#5608ea"
          rayColor2="#ffa2ab"
          origin="top-right"
          speed={2.5}
          intensity={4}
          spread={10}
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={0.9}
        />
      </div>

      <div className="h-full w-full absolute pointer-events-none z-10">
        <StaggeredMenu
          position="left"
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["#B497CF", "#5227FF"]}
          logoUrl={logo}
          accentColor="#5227FF"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
          className={"absolute"}
        />
      </div>
      <div className="w-full h-fit pt-[10vh]">
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
          minFontSize={30}
        />
      </div>

      {/* ...Slide, StaggeredMenu, TextPressure unchanged... */}

      <div className="flex flex-col gap-10 items-center ">
        <div className="w-full h-full  p-[5vw] md-10vh pointer-events-auto ">
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
        <Scrolltext />
      </div>
    </div>
  );
};

export default AboutMe;
