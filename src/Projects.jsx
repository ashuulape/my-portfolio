import React, { useEffect, useRef, useState } from "react";
import { Slide } from "./Slide";
import { motion } from "framer-motion";
import SplitText from "./components/SplitText";
import StaggeredMenu from "./components/StaggeredMenu";
import portPc from "./assets/portPc.png";
import portMobile from "./assets/portMobile.png";
import HorizontalScroll from "./components/HorizontalScroll";
import ProjectDetails from "./components/ProjectDetails";
import ProjectFooter from "./components/ProjectFooter";
import LightPillar from "./components/LightPillar";
import DotField from "./components/DotField";
import UberPc from "./assets/projectImg/UberPC.png";
import UberMobile from "./assets/projectImg/UberMobile.png";
import GamePC from "./assets/projectImg/GamePC.png";
import GameMobile from "./assets/projectImg/GameMobile.png";
import {
  SiReact,
  SiJavascript,
  SiSocketdotio,
  SiTailwindcss,
  SiGooglemaps,
  SiJsonwebtokens,
  SiAxios,
  SiGsap,
  SiNodedotjs,
  SiExpress,
  SiCss,
  SiMongodb,
  SiLeaflet,
  SiHtml5,
  SiThreedotjs,
  SiTwinmotion,
} from "react-icons/si";
import Intro from "./components/Intro";

const Projects = () => {
  const scrollObj = [
    {
      bg: UberPc,
      title: "Uber Clone",
      mobileImg: UberMobile,
      bgcolor: "bg-[#343134]",
      tech: [
        <SiReact color="#61DAFB" />,
        <SiJavascript color="#F7DF1E" />,
        <SiNodedotjs color="#339933" />,
        <SiExpress color="#000000" />,
        <SiMongodb color="#47A248" />,
        <SiTailwindcss color="#06B6D4" />,
        <SiLeaflet color="#199900" />,
        <SiSocketdotio color="#010101" />,
        <SiGooglemaps color="#4285F4" />,
        <SiJsonwebtokens color="#000000" />,
        <SiGsap color="#88CE02" />,
        <SiAxios color="#5A29E4" />,
      ],
    },
    {
      bg: portPc,
      title: "Portfolio",
      mobileImg: portMobile,
      bgcolor: "bg-[#7949A6]",
      tech: [
        <SiReact color="#61DAFB" />,
        <SiTailwindcss color="#06B6D4" />,
        <SiThreedotjs color="#000000" />,
        <SiGsap color="#88CE02" />,
      ],
    },
    {
      bg: GamePC,
      title: "GameFlix",
      mobileImg: GameMobile,
      bgcolor: "bg-[#BC0912]",
      tech: [
        <SiJavascript color="#F7DF1E" />,
        <SiCss color="#1572B6" />,
        <SiHtml5 color="#E34F26" />,
      ],
    },
  ];

  const slideRef = useRef();

  const [load, setload] = useState(true);
  const handleClick = (link, label) => {
    console.log(label);
    if (label !== "Projects") {
      slideRef.current.transition(link);
    }
  };

  useEffect(() => {
    const time = setTimeout(() => setload(false), 2500);

    return () => clearTimeout(time);
  }, []);

  return (
    <div
      className={`${load ? "h-dvh" : "h-fit"} w-full text-10 bg-transparent relative overflow-clip pointer-events-none`}
    >
      <Slide color={"bg-[#87ceeb]"} ref={slideRef} />
      <Intro text={"PROJECTS"} color={"text-[#87ceeb]"} />

      <LightPillar
        topColor="#87ceeb"
        bottomColor="#ffcafc"
        intensity={0.9}
        rotationSpeed={0.1}
        glowAmount={0.002}
        pillarWidth={5}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={25}
        interactive={true}
        mixBlendMode="screen"
        quality="high"
        className="pointer-events-auto"
      />

      <DotField
        dotRadius={1.5}
        dotSpacing={20}
        cursorRadius={500}
        cursorForce={0.1}
        bulgeOnly={true}
        bulgeStrength={67}
        glowRadius={160}
        sparkle={false}
        waveAmplitude={0}
      />

      <StaggeredMenu transitionfun={handleClick} />
      <HorizontalScroll scrollObj={scrollObj} />
      <ProjectDetails obj={scrollObj} />
      <ProjectFooter />
    </div>
  );
};

export default Projects;
