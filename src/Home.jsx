import React, { useEffect, useRef, useState } from "react";
import { Slide } from "./Slide";

import Lanyard from "./components/Lanyard";
import DotField from "./components/DotField";
import ColorBends from "./components/ColorBends";
import RotatingText from "./components/RotatingText";
import StaggeredMenu from "./components/StaggeredMenu";
import logo from "./assets/mask.png";
import { LogoSlide } from "./components/LogoSlide";

import SpecularButton from "./components/SpecularButton";
import { useNavigate } from "react-router-dom";
import Intro from "./components/Intro";

const Home = () => {
  const [text, settext] = useState(true);
  const slideRef = useRef(null);

  const handleClick = (link, label) => {
    if (label !== "Home") {
      slideRef.current.transition(link);
    }
  };

  useEffect(() => {
    const time = setTimeout(() => settext(false), 2400);

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
      clearTimeout(time);
      document.removeEventListener("click", requestFS);
    };
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <Slide ref={slideRef} color={"bg-[#771bc6]"} />
      {text && <Intro text={"HOME"} color={"text-[#771bc6]"} />}

      <div className="fixed full-height w-full pointer-events-none z-0  ">
        <div className="absolute full-height w-full ">
          <ColorBends colors={["#b96fff"]} />
        </div>
        <DotField
          dotRadius={1.5}
          dotSpacing={20}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly={true}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
        />
      </div>

      <div className="full-height w-screen absolute pointer-events-none">
        <StaggeredMenu
          position="left"
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["#B497CF", "#5227FF"]}
          logoUrl={logo}
          accentColor="#5227FF"
          onMenuOpen={() => console.log("Menu opened")}
          onMenuClose={() => console.log("Menu closed")}
          className={"absolute"}
          transitionfun={handleClick}
        />
      </div>

      <div className="full-height  w-full flex flex-col justify-end text-white overflow-clip">
        <div className="full-height absolute w-full flex items-center pt-12 text-white pointer-events-none z-10">
          <Lanyard position={[5, 0, 20]} gravity={[0, -40, 0]} />
          <div className="h-[70%] sm:h-1/2 w-[90%] sm:w-[80%] md:w-1/2 flex flex-col items-start md:justify-center justify-items-start pl-[5vw] pb-[10vh] md:pb-0 z-2">
            <h1 className="flex flex-wrap items-center gap-1 text-lg md:text-3xl font-pixel-grid font-semibold mb-4">
              Be,
              <RotatingText
                texts={["Creative", "Passionate", "Cool!"]}
                mainClassName=" w-fit   text-[#a650f0] overflow-hidden py-0.5 sm:py-1 md:py-0.5 justify-center rounded-lg"
              />
            </h1>

            <h2 className="text-2xl md:text-4xl mt-[-1rem] md:mt-0 font-semibold">
              Hi! I'm Ashutosh.
            </h2>
            <h3 className="text-sm md:text-[2vh] text-white/50 mt-1 md:mt-0">
              {" "}
              A creative Frontend Developer who knows some sort of Backend also
            </h3>
            <br />
            {window.outerWidth > 768 ? (
              <SpecularButton
                size={"sm"}
                radius={7}
                tint="#5c00f9"
                tintOpacity={0.12}
                blur={0}
                textColor="#D7CFFF"
                lineColor="#f2a9a9"
                baseColor="#8755F1"
                intensity={0.8}
                shineSize={10}
                shineFade={40}
                thickness={1}
                speed={0.9}
                followMouse
                proximity={190}
                autoAnimate={false}
                onClick={() => handleClick("about")}
                className="flex flex-col "
              >
                <h1 className="flex gap-2">
                  About me
                  <img
                    src="https://img.icons8.com/?size=100&id=39969&format=png&color=D7CFFF"
                    className="cover h-4 "
                    alt=""
                  />
                </h1>
              </SpecularButton>
            ) : (
              <button className="bg-[#771bc6]/30 text-[#D7CFFF] px-4 py-2 text-sm rounded-sm border-1 border-[#771bc6] flex gap-2 items-center">
                {" "}
                About me
                <img
                  src="https://img.icons8.com/?size=100&id=39969&format=png&color=D7CFFF"
                  className="cover h-4 "
                  alt=""
                />
              </button>
            )}
          </div>
        </div>
        {window.innerWidth < 768 && (
          <h2 className="w-full text-center text-xs text-white/30 relative">
            GSAP animations not optimized for mobile devices if possible try to
            visit the site from laptop/PC
          </h2>
        )}
        <LogoSlide />
      </div>
    </div>
  );
};

export default Home;
