import React, { useEffect, useRef, useState } from "react";
import { Slide } from "./Slide";
import { motion } from "framer-motion";
import SplitText from "./components/SplitText";
import StaggeredMenu from "./components/StaggeredMenu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Iphone } from "./components/ui/iphone";
import portPc from "./assets/portPc.png";
import portMobile from "./assets/portMobile.png";
import HorizontalScroll from "./components/HorizontalScroll";
import ProjectDetails from "./components/ProjectDetails";

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
    <section className="h-[100dvh] w-[100dvw] text-10 text-red-500 relative bg-black">
      <Slide color={"bg-[#87ceeb]"} ref={slideRef} />
      {text && (
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="fixed flex w-full h-[100dvh] z-99999 text-center items-center justify-center"
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
    </section>
  );
};

export default Projects;
