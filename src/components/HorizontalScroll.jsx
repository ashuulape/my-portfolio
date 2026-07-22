import React from "react";
import { Iphone } from "./ui/iphone";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const HorizontalScroll = ({ scrollObj }) => {
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
      duration: 7,
    });
  });

  return (
    <section
      id="section"
      className="w-[100dvw]  px-10 md:h-[300vw] h-[300vh] relative overflow-clip text-white bg-black
             "
    >
      <div
        id="projects"
        className="relative flex flex-row gap-[2vw] items-center full-height w-max  sticky top-0 bottom-0 z-10 "
      >
        <h2 className="absolute w-full text-[1.5vw] text-center font-thin md:translate-x-4">
          scroll {`▻`}
        </h2>

        <h1 className="text-[15vw] flex justify-center flex-col font-black">
          PROJECTS
        </h1>

        {scrollObj.map((obj) => {
          return (
            <div
              className="image md:h-[8vw] md:translate-0 -translate-y-10 h-[10vw] laptop"
              style={{ backgroundImage: `url(${obj.bg})` }}
            >
              <h1 className="text-white font-thin md:text-[0.4vw] text-[0.5vw] absolute w-full text-center">
                {obj?.title}
              </h1>
              <Iphone src={obj.mobileImg} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HorizontalScroll;
