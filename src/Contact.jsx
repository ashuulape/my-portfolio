import React, { useEffect, useRef } from "react";
import Intro from "./components/Intro";
import { Slide } from "./Slide";
import StaggeredMenu from "./components/StaggeredMenu";
import Plasma from "./components/Plasma";

const Contact = () => {
  const slideRef = useRef(null);
  const handleClick = (link, label) => {
    if (label !== "Contact") {
      slideRef.current.transition(link);
    }
  };

  useEffect(() => {
    const requestFS = () => {
      if (document.documentElement.requestFullscreen) {
        document.documentElement
          .requestFullscreen()
          .catch((err) => console.log(err));
      }
      document.removeEventListener("click", requestFS);
    };
    document.addEventListener("click", requestFS);

    return () => {
      document.removeEventListener("click", requestFS);
    };
  }, []);
  const contact = [
    {
      img: "https://img.icons8.com/?size=100&id=baRhMh2wmjbT&format=png&color=ff710f",
      h1: "Email",
      dis: "email me about anything you require",
      link: "ashuulape@gmail.com",
      click: "mailto:ashuulape@gmail.com",
    },
    {
      img: "https://img.icons8.com/?size=100&id=9659&format=png&color=ff710f",
      h1: "Phone",
      dis: "call me anytime i will pick",
      link: "+91 8150950309",
      click: "https://wa.me/918150950309",
    },
    {
      img: "https://img.icons8.com/?size=100&id=447&format=png&color=ff710f",
      h1: "Linkedin",
      dis: "i didn't use that much",
      link: "Ashutosh Ulape",
      click: "https://www.linkedin.com/in/ashutosh-ulape-6b43a4325",
    },
  ];
  return (
    <section className="w-full full-height relative">
      <div className="min-h-screen max-h-2/3 h-fit  w-full px-4 sm:px-6 md:px-10 py-8 fixed z-10 text-white flex items-center justify-center pointer-events-auto overflow-y-auto">
        <div className="bg-[#ff710f]/3 md:gap-10 gap-5 w-full sm:w-11/12 md:w-3/4 min-h-fit md:h-3/4 border-2 rounded-2xl border-[#ff710f] flex items-center justify-center flex-col py-8 md:py-0">
          <div className="h-fit w-full px-6 sm:px-10 md:p-12 text-center flex flex-col gap-2 justify-end mt-[5vw]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#ff710f]">
              Contact
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold leading-tight">
              i'd love to hear from you
            </h1>
            <h2 className="text-lg sm:text-xl md:text-3xl font-medium text-white/70">
              I'm always here to chat.
            </h2>
          </div>

          <div className="w-full sm:w-11/12 md:w-3/4 justify-center flex flex-wrap gap-6 md:gap-6 px-4 py-6 md:py-0 md:h-1/3 mb-[10vw]">
            {contact.map((e) => {
              return (
                <div
                  key={e.h1}
                  className="gap-3 sm:gap-5 flex-1 min-w-[140px] sm:min-w-[160px] flex flex-col items-center justify-center text-center cursor-pointer"
                  onClick={() =>
                    window.open(e.click, "_blank", "noopener,noreferrer")
                  }
                >
                  <div className="bg-[#ff710f]/20 rounded-full h-16 w-16 sm:h-20 sm:w-20 md:h-25 md:w-25 relative flex items-center justify-center">
                    <img
                      className="h-8 sm:h-10 md:h-15 absolute"
                      src={e.img}
                      alt={e.h1}
                    />
                  </div>

                  <h1 className="text-lg sm:text-2xl md:text-3xl font-semibold">
                    {e.h1}
                  </h1>
                  <h1 className="text-sm sm:text-base md:text-2xl text-white/70">
                    {e.dis}
                  </h1>
                  <h1 className="text-xs sm:text-sm md:text-lg font-bold break-all">
                    {e.link}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Slide color={"bg-[#ff710f]"} ref={slideRef} />
      <Intro text={"CONTACT"} color={"text-[#ff710f]"} />
      <StaggeredMenu
        position="left"
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={["#B497CF", "#5227FF"]}
        accentColor="#5227FF"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
        className={"absolute pointer-events-auto"}
        transitionfun={handleClick}
      />
      <Plasma
        color="#ff710f"
        speed={1.2}
        direction="pingpong"
        scale={0.9}
        opacity={1}
        mouseInteractive
        renderScale={1}
        maxDpr={1.5}
        targetFps={60}
        iterations={80}
      />
    </section>
  );
};

export default Contact;
