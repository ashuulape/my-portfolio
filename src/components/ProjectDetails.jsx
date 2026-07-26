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
      const splittext = new SplitText(text, { type: "words" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card, // ← this specific card, not the class
          start: "top bottom",
          end: () => (window.innerWidth < 768 ? "top 30%" : "top top"),
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.from(card, { opacity: 0, duration: 1 })
        .from(
          split.chars,
          { y: 10, opacity: 0, duration: 2, stagger: 0.3 },
          "<",
        )
        .from(iphone, { y: "40vh", opacity: 0, duration: 3 }, "<")
        .from(
          splittext.words,
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
      {obj.map((e) => {
        return (
          <div
            className={`infodiv sticky top-[20vh] md:top-[10vh] mt-10 md:h-[80vh] h-[50vh] md:w-[80vw] w-[90vw] rounded-sm bg-white border-2 border-[#87ceeb] md:px-10 py-1 px-2 overflow-hidden`}
          >
            <h1 className="headline opacity-100 font-[Schabo] absolute sm:bottom-0  md:bottom-0 text-black w-full  text-start md:text-[8vw] text-[14vw] ">
              {e.title}
            </h1>
            <Iphone
              src={e.mobileImg}
              className={
                "iphone absolute md:right-20 right-1/9 bottom-0 sm:h-80  md:h-120 lg:h-160 xl:h-200 h-70"
              }
            />
            <div className=" flex  flex-row w-full h-full rounded-2xl  ">
              <div className=" md:flex-3 flex-[4] rounded-2xl flex items-end sm:items-start md:items-start lg:items-center py-10">
                <p className="w-[35vw] paragraph popins font-bold text-gray-900 text-[10px] sm:text-[12px] md:text-2xl ">
                  A full-stack ride-hailing platform built with MongoDB,
                  Express, React, and Node.js, featuring real-time ride matching
                  and live location tracking.
                  <ul>
                    {features.map((e) => {
                      return (
                        <li className="mt-1 font-light  sm:text-[12px] md:text-lg text-[8px]">
                          * {e}
                        </li>
                      );
                    })}
                  </ul>
                </p>
              </div>
              <div className="bg-gray-600 w-2/5 md:flex-1 flex-[2] text-white px-2 py-4 rounded-2xl">
                <h1 className="font-bold md:mb-3 mb-1 md:text-3xl text-2xl font-[akira] tracking-wider w-full text-center">
                  Tech stack
                </h1>
                <ul className="flex md:flex-row flex-col w-full md:gap-4 gap-1 flex-wrap justify-center items-end ">
                  {e.tech.map((e) => {
                    return (
                      <li className=" w-fit aspect-square md:text-4xl text-xl ">
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
