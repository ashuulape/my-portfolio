import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React from "react";
import { Iphone } from "./ui/iphone";

gsap.registerPlugin(ScrollTrigger, SplitText);
const ProjectDetails = () => {
  useGSAP(() => {
    const cards = gsap.utils.toArray(".infodiv");

    cards.forEach((card) => {
      const headline = card.querySelector(".headline");
      const iphone = card.querySelector(".iphone");
      const split = new SplitText(headline, { type: "chars" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card, // ← this specific card, not the class
          start: "top bottom",
          end: () => (window.innerWidth < 768 ? "top 30%" : "top 30%"),
          scrub: 1,
          invalidateOnRefresh: true,
          markers: true,
        },
      });

      tl.from(card, { opacity: 0, duration: 1 })
        .from(
          split.chars,
          { y: 10, opacity: 0, duration: 1, stagger: 0.3 },
          "<",
        )
        .from(iphone, { y: "40vh", opacity: 0, duration: 3 }, "<");
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  });
  const arr = ["10vh", "15vh", "20vh", "25vh"];

  return (
    <section className="maindiv bg-black h-[400vh] py-20 px-10 flex flex-col md:gap-15 gap-52 items-center relative mt-[10vh]">
      {arr.map(() => {
        return (
          <div
            className={`infodiv mt-10 md:h-[80vh] h-[50vh] w-[80vw]  rounded-2xl bg-white border-2 border-[#87ceeb] md:px-10 py-1 overflow-hidden`}
            style={{ position: "sticky", top: "10vh" }}
          >
            <h1 className="headline opacity-100 font-[Akira] absolute  text-black w-full  text-center md:text-[8vw] text-[8vw] ">
              UBER ClONE
            </h1>
            <Iphone
              className={
                "iphone absolute md:right-20 right-0 bottom-0 md:h-160 h-60"
              }
            />
            <div className="bg-red-300 flex md:flex-col w-full h-full rounded-2xl">
              <div className="bg-amber-300 md:flex-3 flex-4"></div>
              <div className="bg-blue-300 md:flex-1 flex-2"></div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectDetails;
