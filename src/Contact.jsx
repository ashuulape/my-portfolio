import React, { useRef } from "react";
import Intro from "./components/Intro";
import { Slide } from "./Slide";
import StaggeredMenu from "./components/StaggeredMenu";

const Contact = () => {
  const slideRef = useRef(null);
  const handleClick = (link, label) => {
    if (label !== "Contact") {
      slideRef.current.transition(link);
    }
  };
  return (
    <section className="w-full full-height">
      <Slide color={"bg-[#ff69b4]"} ref={slideRef} />
      <Intro text={"CONTACT"} />
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
        className={"absolute"}
        transitionfun={handleClick}
      />
    </section>
  );
};

export default Contact;
