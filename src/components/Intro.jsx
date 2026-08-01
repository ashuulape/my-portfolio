import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(SplitText);

const Intro = (props) => {
  const container = useRef();

  useEffect(() => {
    const [black, colored] = gsap.utils.toArray(
      ".introtext",
      container.current,
    );
    const splitBlack = new SplitText(black, { type: "chars" });
    const splitColor = new SplitText(colored, { type: "chars" });

    const tl = gsap.timeline({
      defaults: { duration: 1.8, ease: "power2.out" },
    });

    tl.to(splitBlack.chars, {
      y: "-100dvh",
      stagger: 0.05,
      duration: 0.9,
      ease: "power3.out",
    }).to(
      splitColor.chars,
      {
        y: "-100dvh",
        stagger: 0.05,
        duration: 0.9,
        ease: "power3.out",
      },
      "<0.1",
    );
    tl.to(splitBlack.chars, {
      y: "-200dvh",
      stagger: -0.05,
      duration: 0.9,
      ease: "power3.in",
    }).to(
      splitColor.chars,
      {
        y: "-200dvh",
        stagger: -0.05,
        duration: 0.9,
        ease: "power3.in",
      },
      "<0.1",
    );
  }, []);

  return (
    <section
      ref={container}
      className="full-height fixed  z-999 my-[10vh] w-full flex items-center justify-center pointer-events-none"
    >
      <h1
        className={` introtext text-black absolute tracking-widest flex justify-center text-center font-[lowen] text-[30vw] w-fit h-fit md:translate-y-[100dvh] translate-y-[100dvh]  font-medium  pointer-events-auto z-10 `}
      >
        {props.text}
      </h1>
      <h1
        className={`${props.color} introtext absolute tracking-widest flex justify-center text-center font-[lowen] text-[30vw] w-fit h-fit md:translate-y-[100dvh] translate-y-[100dvh]  font-medium  pointer-events-auto z-8 `}
      >
        {props.text}
      </h1>
    </section>
  );
};

export default Intro;
