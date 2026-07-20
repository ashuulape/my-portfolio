import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React, { useRef } from "react";
import OrbitImages from "./OrbitImages";
import meThinking from "../assets/meThinking.png";

const Scrolltext = () => {
  console.log(window.outerWidth);
  const images = [
    "https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=DiGZkjCzyZXn&format=png&color=000000",
    "https://imgs.search.brave.com/GV-0JcmF6GaQw5WGcuCZj_48JbbMUcRc334IWOJmRwg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWdvb2dsZS1hbnRp/Z3Jhdml0eS1pY29u/LXN2Zy1kb3dubG9h/ZC1wbmctMTQ1NTAy/NDMucG5nP2Y9d2Vi/cCZ3PTEyOA",
    "https://img.icons8.com/?size=100&id=0TquPajTna5W&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000",
  ];

  gsap.registerPlugin(ScrollTrigger);

  const scrollRef = useRef();
  const imagedivRef = useRef();
  const pararef = useRef();

  useGSAP(() => {
    const textsplit = new SplitText("#maintext", { type: "chars , words" });
    const linesplit = new SplitText(pararef.current, { type: "lines" });
    const linesplit2 = new SplitText(".paratext", { type: "lines" });

    gsap.from(textsplit.chars, {
      y: 50,
      autoAlpha: 0,
      force3D: true,
      stagger: {
        each: 0.04,
        from: "start",
      },
      scrollTrigger: {
        trigger: "#maintext",
        start: "top bottom",
        end: window.outerWidth < 768 ? "top 60%" : "top 40%",
        scrub: 1,
      },
    });

    gsap.from(linesplit.lines, {
      y: 200,
      autoAlpha: 0,
      force3D: true,
      stagger: {
        each: 0.07,
        from: "start",
      },
      scrollTrigger: {
        trigger: pararef.current,
        start: "top bottom",
        end: window.outerWidth < 768 ? "top 60%" : "top 80%",
        scrub: 1,
      },
    });
    gsap.from(linesplit2.lines, {
      y: 200,
      autoAlpha: 0,
      force3D: true,
      stagger: {
        each: 0.07,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".paratext",
        start: "top bottom",
        end: window.outerWidth < 768 ? "top 60%" : "top 80%",
        scrub: 1,
      },
    });

    gsap.from("#me", {
      y: 50,
      autoAlpha: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".paratext",
        start: "top bottom",
        end: window.innerWidth < 768 ? "top 40%" : "top 90%",
        scrub: 1,
      },
    });

    return () => textsplit.revert();
  }, []);

  return (
    <div ref={scrollRef} className="text-white w-full md:px-20 px-6 ">
      <h1
        id="maintext"
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin leading-tight lg:mb-0 mb-8 "
      >
        Want's to know more!
      </h1>
      <div className="w-full h-full flex lg:flex-row md:flex-col flex-col gap-2 md:flex-wrap  ">
        <div className="flex items-center justify-center flex-col w-full h-auto flex-1 gap-6 md:gap-10 ">
          <p
            ref={pararef}
            className="text-sm sm:text-base md:text-lg lg:text-[1.2vw] font-extralight leading-relaxed"
          >
            I come from an electronics and computer background, but somewhere
            along the way, software pulled me in and hardware just couldn't
            compete. Software feels limitless: it's a space where creativity has
            no ceiling. I'm constantly chasing that feeling of learning
            something new a tool, a framework, a random project I saw online and
            then reverse-engineering it just to understand how it ticks.
          </p>
          <p className="paratext text-sm sm:text-base md:text-lg lg:text-[1.2vw] font-extralight leading-relaxed">
            I also carry a bit of a gamer's mindset into everything I do. In
            games, you don't move past a boss until you beat it no shortcuts, no
            skipping ahead. I apply that same mentality to life: if something
            isn't done right, I don't walk away from it until it's fully solved
            and satisfies me. That's the part of tech I love most you don't need
            money, equipment, or permission to build something impressive. All
            you need is curiosity, persistence, and the hunger to keep pushing
            further.
          </p>
        </div>
        <div
          ref={imagedivRef}
          id="imgdiv"
          className="w-full h-full flex-1 relative"
        >
          <OrbitImages
            images={images}
            shape="ellipse"
            radiusX={440}
            radiusY={90}
            rotation={-12}
            duration={25}
            itemSize={100}
            responsive={true}
            radius={200}
            direction="reverse"
            fill
            showPath
            paused={false}
            className="relative z-10"
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full flex items-end justify-center z-0">
            <img
              id="me"
              src={meThinking}
              alt="Me thinking"
              className="w-full  h-auto object-fit drop-shadow-[#FF80F2] drop-shadow-xl/25 saturate-[0]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrolltext;
