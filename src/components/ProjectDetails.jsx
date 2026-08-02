import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React from "react";
import { Iphone } from "./ui/iphone";
import { resolveTransition } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, SplitText);
const ProjectDetails = ({ obj }) => {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".infodiv");

    cards.forEach((card) => {
      const headline = card.querySelector(".headline");
      const text = card.querySelector(".paragraph");
      const iphone = card.querySelector(".mobile");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card, // ← this specific card, not the class
          start: "top bottom",
          end: () => (window.innerWidth < 768 ? "top 50%" : "top 40%"),
          scrub: 1,
        },
      });

      tl.from(headline, {
        x: "-50vw",
        duration: 1.8,
        opacity: 0,
        ease: "power3.out",
      })
        .from(
          iphone,
          { x: "50vw", opacity: 0, duration: 2, ease: "power2.out" },
          "<",
        )
        .from(
          text,
          { y: "80vw", opacity: 0, duration: 3, ease: "power3.out" },
          "<",
        );

      gsap.to(card, {
        scale: 0.9,
        y: 10,
        scrollTrigger: {
          trigger: card,
          start: () => (window.innerWidth < 768 ? "20% top" : "20% top"),
          end: "70% top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  });

  return (
    <section className="maindiv h-fit pb-20 md:px-4 px-2 lg:px-6 flex flex-col md:gap-[30vh] xl:gap-52 gap-20 items-center relative ">
      <h1
        id="Headtext"
        className="  font-thin  text-[7vw] md:translate-y-[30vh] text-white tracking-widest "
      >
        Details
      </h1>
      {obj.map((e) => {
        return (
          <div className=" w-full xl:w-[80vw] infodiv aspect-video relative z-10 rounded-lg flex  xl:gap-2 ">
            <div className="w-[70%]  h-full rounded-2xl flex flex-col gap-1 xl:gap-2">
              <div
                className={`w-full h-fit py-2 md:py-4 lg:py-6 xl: headline bg-white/5  outline-1 outline-white/30 backdrop-blur-md rounded-lg flex flex-col xl:justify-around justify-center px-4 `}
              >
                <h1 className="text-white h-auto font-[akira] text-sm md:text-2xl lg:text-4xl xl:text-[4vw] ">
                  {e?.title}
                </h1>
                <div className="w-fit h-fit flex flex-row flex-wrap gap-1 md:gap-2 lg:gap-4 xl:gap-10">
                  {e.tech.map((e) => {
                    return (
                      <span className=" w-fit aspect-square  text-xs md:text-sm lg:text-2xl xl:text-3xl ">
                        {e}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="w-full min-h-fit h-full paragraph outline-1 outline-white/10 bg-black/50 backdrop-blur-lg rounded-lg text-white flex justify-around flex-col px-4 py-6 ">
                <h1 className="text-[12px] sm:text-[14px] md:text-[20px] lg:text-[22px] xl:text-[26px] 2xl:text-[28px] font-semibold">
                  {e?.tag}
                </h1>
                <ul>
                  {e?.feat?.map((e) => {
                    return (
                      <li className="mt-1 font-light   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] text-[8px]">
                        <span className="font-medium text-white/90">
                          • {e?.split("—")[0]}
                        </span>
                        :
                        <span className="text-white/70">
                          {e?.split("—")[1]}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div
              className="mobile md:w-[30%] w-[40%] h-full  flex flex-col items-center justify-start cursor-pointer pointer-events-auto"
              onClick={() => (window.location.href = e?.link)}
            >
              <Iphone
                className={"relative h-65 md:h-110 lg:h-130 xl:h-full"}
                src={e?.mobileImg}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectDetails;
