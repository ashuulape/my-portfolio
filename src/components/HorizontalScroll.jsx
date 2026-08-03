import React, { useRef } from "react";
import { Iphone } from "./ui/iphone";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = ({ scrollObj }) => {
  const sectionRef = useRef(null);
  const projectsRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(() => {
    const section = sectionRef.current;
    const projectsEl = projectsRef.current;
    if (!section || !projectsEl) return;

    // Kill any existing ScrollTriggers tied to this section
    ScrollTrigger.getAll()
      .filter((st) => st.trigger === section)
      .forEach((st) => st.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        // end matches the section height so scrub covers the full scroll range
        end: "bottom bottom",
        // pin: false — CSS sticky top-0 handles pinning.
        // GSAP pin:true uses position:fixed which breaks on mobile browsers
        // when the address bar appears/disappears.
        pin: false,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(projectsEl, {
      scale: 5,
      x: "200vw",
      force3D: true,
      ease: "none",
      duration: 1,
    });
    tl.to(
      ".tag",
      {
        opacity: 0,
        duration: 1,
      },
      "<",
    );
    tl.to(
      ".image",
      {
        opacity: 1,
        duration: 1,
      },
      "<",
    );
    tl.to(projectsEl, {
      x: window.outerWidth > 768 ? "-255vw" : "-225dvh",
      duration: 7,
    });

    return () => {
      ScrollTrigger.getAll()
        .filter((st) => st.trigger === section)
        .forEach((st) => st.kill());
    };
  });

  return (
    // CRITICAL: NO overflow-hidden here — overflow:hidden/auto on any ancestor
    // breaks CSS position:sticky on children. Use overflow-x-clip only on the
    // inner sticky div to hide off-screen content without creating a scroll context.
    // The section needs explicit height so sticky has room to work.
    <section
      ref={sectionRef}
      className="w-full sticky h-[400dvh]  text-white pointer-events-none "
    >
      <div className="sticky pl-[5vw] top-0 h-[100dvh] w-screen z-10 [overflow-x:clip]">
        <div
          ref={projectsRef}
          id="projects"
          className=" flex flex-row gap-[3vw] items-center h-full w-full"
        >
          <h2 className="absolute tag  top-1/2 md:left-2/5 left-2/5 w-full text-xs md:text-[1.5vw] text-center font-thin">
            scroll ▻
          </h2>
          <h1 className="text-[25vw] font-[might] tracking-widest z-1  md:text-[12vw] flex justify-center flex-col font-black shrink-0">
            PROJECTS
          </h1>

          {scrollObj.map((obj, index) => (
            <a href={obj?.link}>
              <div
                key={index}
                loading="lazy"
                className="image laptop md:h-[8vw] h-10 md:translate-0 -translate-y-8 pointer-events-auto"
                style={{ backgroundImage: `url(${obj.bg})` }}
              >
                <h1 className="text-white font-thin text-[10px] md:text-[0.4vw] absolute w-full text-center top-[-18px]">
                  {obj?.title}
                </h1>
                <Iphone
                  src={obj.mobileImg}
                  className={
                    "absolute md:right-0 right-[50%]  md:translate-[1vw] translate-y-8 translate-x-5 md:h-[8vw] h-20 "
                  }
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
