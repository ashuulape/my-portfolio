import React, { useEffect, useRef, useState } from "react";
import { Slide } from "./Slide";
import { motion } from "framer-motion";
import SplitText from "./components/SplitText";
import StaggeredMenu from "./components/StaggeredMenu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section",
        start: "top top",
        end: () => (window.innerWidth < 768 ? "bottom top" : "bottom bottom"),
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to("#projects", {
      scale: 5, // set to whatever you actually intended
      x: "200vw",
      force3D: true,
      ease: "none",
      duration: 1,
    });
    tl.to(
      ".image",
      {
        opacity: 1,
        duration: 1,
      },
      "<",
    );
    tl.to("#projects", {
      x: "-600vw",
      duration: 5,
    });
  });

  return (
    <section className="h-[100dvh] w-[100dvw] text-10 text-white relative bg-black">
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
      <section
        id="section"
        className="w-[100dvw]  px-10 h-[600vw] relative  bg-black  "
      >
        <div
          id="projects"
          className=" flex flex-row gap-1 items-center full-height w-full  sticky top-0 z-10"
        >
          <h1 className="text-[15vw] flex justify-center flex-col font-black">
            PROJECTS
          </h1>
          <img
            className="image md:h-[8vw] h-10 w-fit opacity-0"
            src="https://imgs.search.brave.com/Mjre6AXaqhRs_zIEoGLNNGaWtYjAsmBJw1rr0cA5Jd4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzaG9tZS5j/b20vaW1hZ2VzL3Bh/Z2VzL2ljb19oLzI3/MzI3LmpwZw"
            alt=""
          />
          <img
            className="image md:h-[8vw] h-10 w-fit opacity-1 z-20"
            src="https://imgs.search.brave.com/gzcYg-ceJgisbC19HO8p3Wi3r0P8EW7ndtDGnhQXL58/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bWFnaWNkZWNvci5p/bi9jb20vMjAyMy8w/NS8wODE0MzkyNC9U/cm9waWNhbC1XYWxs/cGFwZXItZm9yLVdh/bGxzLTcxMHg0ODgu/anBn"
            alt=""
          />
          <img
            className="image md:h-[8vw] h-10 w-fit opacity-1 z-20"
            src="https://imgs.search.brave.com/gzcYg-ceJgisbC19HO8p3Wi3r0P8EW7ndtDGnhQXL58/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bWFnaWNkZWNvci5p/bi9jb20vMjAyMy8w/NS8wODE0MzkyNC9U/cm9waWNhbC1XYWxs/cGFwZXItZm9yLVdh/bGxzLTcxMHg0ODgu/anBn"
            alt=""
          />
        </div>
      </section>
    </section>
  );
};

export default Projects;
