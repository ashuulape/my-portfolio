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

const Projects = () => {
  const slideRef = useRef();
  const [text, settext] = useState(true);
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

  const scrollObj = [
    { bg: portPc, title: "project 1", mobileImg: portMobile },
    { bg: portPc, title: "project 2", mobileImg: portMobile },
  ];

  return (
    <div className="min-h-dvh w-full text-10 bg-transparent relative overflow-clip">
      <Slide color={"bg-[#87ceeb]"} ref={slideRef} />

      <LightPillar
        topColor="#82C8E5"
        bottomColor="#154C63"
        intensity={1}
        rotationSpeed={0.3}
        glowAmount={0.003}
        pillarWidth={4.3}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={60}
        interactive={false}
        mixBlendMode="normal"
        quality="high"
      />

      <DotField className={"fixed z-0"} />

      {text && (
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="fixed flex w-[100svw] h-[100dvh] z-99999 text-center items-center justify-center"
        >
          <SplitText
            text="Projects"
            className="text-5xl font-semibold text-center text-black "
          />
        </motion.div>
      )}

      <StaggeredMenu transitionfun={handleClick} />
      <HorizontalScroll scrollObj={scrollObj} />
      <ProjectDetails />
      <ProjectFooter />
    </div>
  );
};

export default Projects;
