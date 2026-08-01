import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React from "react";
import { Iphone } from "./ui/iphone";
import { resolveTransition } from "framer-motion";

gsap.registerPlugin(ScrollTrigger, SplitText);
const ProjectDetails = ({ obj }) => {
  const features = [
    "Real-time updates via Socket.IO for instant ride requests and status changes between riders and drivers",
    "Interactive maps with React-Leaflet, showing live driver/rider markers with optimized re-rendering",
    "Live geolocation tracking with throttling and jitter-filtering for smooth accuracy",
    "Geocoding/routing powered by the Geoapify API",
    "Solved real-world challenges: CORS setup, socket architecture, API key security, and cross-browser networking issues",
  ];

  useGSAP(() => {
    const cards = gsap.utils.toArray(".infodiv");

    cards.forEach((card) => {
      const headline = card.querySelector(".headline");
      const text = card.querySelector(".paragraph");

      const iphone = card.querySelector(".iphone");
      const split = new SplitText(headline, { type: "chars" });
      const splittext = new SplitText(text, { type: "lines" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card, // ← this specific card, not the class
          start: "top 80%",
          end: () => (window.innerWidth < 768 ? "top 30%" : "top top"),
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.from(card, { opacity: 1, duration: 1 })
        .from(
          split.chars,
          { y: 10, opacity: 0, duration: 2, stagger: 0.3 },
          "<",
        )
        .from(iphone, { y: 100, opacity: 0, duration: 3 }, "<")
        .from(
          splittext.lines,
          { y: 10, opacity: 0, duration: 1, stagger: 0.3 },
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
    <section className="maindiv h-fit py-20 px-10 flex flex-col md:gap-[30vh] gap-52 items-center relative ">
      <h1
        id="Headtext"
        className="  font-thin  text-[7vw] md:translate-y-[30vh] translate-y-[15vh] text-white tracking-widest "
      >
        Details
      </h1>
      {obj.map((e) => {
        return (
          <div
            className={`infodiv sticky top-[20vh] md:top-[10vh] mt-10 md:h-[80vh] sm:h-[50vh] h-[60vh] md:w-[80vw] w-[90vw] rounded-sm bg-white border-2 border-[#87ceeb] lg:px-10 md:px-6 sm:px-4 py-1 px-2 overflow-hidden`}
          >
            <h1 className="headline opacity-100 font-[Schabo] absolute  sm:bottom-0 lg:bottom-0  md:bottom-0 text-black w-full  md:w-full  text-start sm:w-2/3 md:text-6xl lg:text-8xl xl:text-[120px] text-[10vw] ">
              {e.title}
            </h1>
            <Iphone
              src={e.mobileImg}
              className={
                "iphone absolute md:right-20 right-1/50  bottom-0 sm:h-90  md:h-100 lg:h-120 xl:h-150 h-90"
              }
            />
            <div className=" flex  flex-row w-full h-full rounded-2xl  ">
              <div className=" md:flex-3 flex-[4] rounded-2xl flex items-end sm:items-start md:items-start lg:items-start xl:items-center py-2">
                <p className="w-3/4 paragraph popins font-bold text-gray-900 text-[10px] sm:text-[12px] md:text-[18px] lg:text-[24px]   ">
                  <h1 className="text-[12px] sm:text-[14px] md:text-[20px] lg:text-[22px] xl:text-[26px]">
                    {e?.tag}
                  </h1>
                  <ul>
                    {e?.feat?.map((e) => {
                      return (
                        <li className="mt-1 font-light   sm:text-[10px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[8px]">
                          <span className="font-medium text-black/90">
                            • {e?.split("—")[0]}
                          </span>
                          :
                          <span className="text-black/70">
                            {e?.split("—")[1]}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </p>
              </div>
              <div
                className={`${e.bgcolor} w-2/5 md:flex-1 flex-2 text-white px-2 py-4 rounded`}
              >
                <h1 className="font-bold md:mb-3 mb-1 lg:text-3xl text-2xl font-[akira] tracking-wider w-full text-center">
                  Tech stack
                </h1>
                <ul className="flex md:flex-row flex-row w-full md:gap-4 gap-1 flex-wrap justify-center items-end ">
                  {e.tech.map((e) => {
                    return (
                      <li className=" w-fit aspect-square lg:text-2xl text-xl ">
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectDetails;
