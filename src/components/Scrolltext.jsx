import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React, { useRef } from "react";
import OrbitImages from "./OrbitImages";
import meThinking from "../assets/meThinking.png";

const Scrolltext = () => {
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

  useGSAP(() => {
    const textsplit = new SplitText("#maintext", { type: "chars , words" });

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

    gsap.from(imagedivRef.current, {
      y: 50,
      opacity: 0,

      scrollTrigger: {
        trigger: "#maintext",
        start: "top bottom",
        end: screen.width < 768 ? "top 50%" : "top 70%",
      },
    });

    return () => textsplit.revert();
  }, []);

  return (
    <div ref={scrollRef} className="text-white w-full md:px-20 px-10 ">
      <h1 id="maintext" className="md:text-6xl font-thin text-3xl mb-5">
        Wants to know more!
      </h1>
      <div className="w-full h-fit flex md:flex-row flex-col gap-2 md:flex-wrap  ">
        <div className="bg-white w-100 h-auto flex-1 ">hi</div>
        <div
          ref={imagedivRef}
          id="imgdiv"
          className="w-[clamp(100%,60%,70%)] h-fit flex-1 relative"
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
              src={meThinking}
              alt="Me thinking"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrolltext;
