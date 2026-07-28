import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useEffect } from "react";

gsap.registerPlugin(SplitText);

const Intro = (props) => {
  useEffect(() => {
    const textsplit = new SplitText("#introtext", { type: "chars" });

    const tl = gsap.timeline();

    tl.to(textsplit.chars, {
      y: -1000,
      opacity: 1,
      duration: 1.1,
      stagger: 0.05,
      ease: "power3.out",
    })
      .to(textsplit.chars, {
        y: -2000,
        opacity: 0,
        duration: 0.7,
        stagger: -0.05,
        ease: "power3.in",
      })
      .to(textsplit.chars, {
        display: "none",
      }); // waits 1s after entrance finishes before exiting

    return () => {
      tl.kill();
      textsplit.revert();
    };
  }, []);

  return (
    <section className="full-height fixed  z-999 my-[10vh] w-full flex items-center justify-center pointer-events-none">
      <h1
        id="introtext"
        className={`text-black tracking-widest text-center font-[lowen] text-[30vw] w-fit h-fit md:translate-y-[70vh] translate-y-[100dvh]  font-medium  pointer-events-auto  `}
      >
        {props.text}
      </h1>
    </section>
  );
};

export default Intro;
