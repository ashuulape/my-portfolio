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
      tech: [<SiReact />, <SiTailwindcss />, <SiThreedotjs />, <SiGsap />],
    },
    {
      bg: GamePC,
      title: "GameFlix",
      mobileImg: GameMobile,
      tech: [<SiJavascript />, <SiCss />, <SiHtml5 />],
    },
  ];

  const slideRef = useRef();
  const [text, settext] = useState(true);
  const [load, setload] = useState(true);
  const handleClick = (link, label) => {
    console.log(label);
    if (label !== "Projects") {
      slideRef.current.transition(link);
    }
  };

  useEffect(() => {
    const time = setTimeout(() => settext(false), 2000);

    return () => clearTimeout(time);
  }, []);
  useEffect(() => {
    const time = setTimeout(() => setload(false), 2500);

    return () => clearTimeout(time);
  }, []);

  return (
    <div
      className={`${load ? "h-dvh" : "h-fit"} w-full text-10 bg-transparent relative overflow-clip`}
    >
      <Slide color={"bg-[#87ceeb]"} ref={slideRef} />
      <Intro text={"PROJECTS"} />

      <LightPillar
        topColor="#82C8E5"
        bottomColor="#154C63"
        intensity={1.1}
        rotationSpeed={0.15}
        glowAmount={0.003}
        pillarWidth={7}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={25}
        interactive={true}
        mixBlendMode="screen"
        quality="high"
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
