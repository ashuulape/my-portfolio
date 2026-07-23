import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React from "react";
import { Iphone } from "./ui/iphone";

gsap.registerPlugin(ScrollTrigger, SplitText);
const ProjectDetails = () => {
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
  const arr = ["10vh", "15vh", "20vh", "25vh"];

  return (
    <section className="maindiv h-fit py-20 px-10 flex flex-col md:gap-[30vh] gap-52 items-center relative ">
      {arr.map(() => {
        return (
          <div
            className={`infodiv mt-10 md:h-[80vh] h-[50vh] w-[80vw]  rounded-2xl bg-white border-2 border-[#87ceeb] md:px-10 py-1 px-2 overflow-hidden`}
            style={{ position: "sticky", top: "10vh" }}
          >
            <h1 className="headline opacity-100 font-[Schabo] absolute   md:bottom-0 text-black w-full  text-start md:text-[8vw] text-[14vw] ">
              UBER ClONE
            </h1>
            <Iphone
              className={
                "iphone absolute md:right-20 right-0 bottom-0 md:h-160 h-60"
              }
            />
            <div className=" flex  flex-row w-full h-full rounded-2xl  ">
              <div className=" md:flex-3 flex-[4] rounded-2xl flex items-end md:items-start lg:items-center py-10">
                <p className="w-[35vw] paragraph popins font-bold text-gray-900 text-[2.5vw] md:text-2xl ">
                  A full-stack ride-hailing platform built with MongoDB,
                  Express, React, and Node.js, featuring real-time ride matching
                  and live location tracking.
                  <ul>
                    {features.map((e) => {
                      return (
                        <li className="mt-1 font-light text-[2vw] md:text-lg">
                          * {e}
                        </li>
                      );
                    })}
                  </ul>
                </p>
              </div>
              <div className="bg-blue-300 md:flex-1 flex-[2] rounded-2xl"></div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectDetails;
