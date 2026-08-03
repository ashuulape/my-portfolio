import React from "react";

import CircularGallery from "./CircularGallery";
import AkiraFont from "../fonts/AkiraExpanded-SuperBold.woff2";

const ProjectFooter = () => {
  let width, height;

  switch (Math.floor(window.outerWidth / 200)) {
    case 0: // 0–199
    case 1: // 200–399
      width = 300;
      height = 200;
      break;
    case 2: // 400–599
      width = 600;
      height = 450;
      break;
    case 3: // 600–799
      width = 700;
      height = 500;
      break;
    case 4: // 800–999
      width = 800;
      height = 550;
      break;
    case 5: // 1000–1199
      width = 900;
      height = 600;
      break;
    default: // 1200+
      width = 900;
      height = 600;
      break;
  }
  console.log(window.outerWidth);
  const extra = [
    {
      text: "MDB",
      discription:
        "Search any movie, get every detail — cast, ratings, trailers, and more",
      image:
        "https://res.cloudinary.com/dwuhsjldf/image/upload/f_auto,q_auto/v1785777621/MDB_tuhoad.png",
      link: "https://mdb69.netlify.app/",
    },
    {
      text: "PokeCard",
      discription: "A simple Pokémon card game to play with a friend",
      image:
        "https://res.cloudinary.com/dwuhsjldf/image/upload/f_auto,q_auto/v1785777620/Pokecard_zwzewp.png",
      link: "https://pokecard69.netlify.app/",
    },
    {
      text: "Pinsearch",
      discription:
        "A Pinterest-style image search app, built with Redux to sharpen state management skills.",
      image:
        "https://res.cloudinary.com/dwuhsjldf/image/upload/f_auto,q_auto/v1785777621/Pin_qi44em.png",
      link: "https://github.com/ashuulape",
    },
  ];

  return (
    <section className="lg:h-[90dvh] h-[60dvh] relative  lg:text-lg text-xs mt-[10vh]  ">
      <div className="lg:px-8 px-2 h-fit text-white font-extralight font-[Galano] lg:w-full text-center flex flex-col justify-start items-center">
        <h1 className="font-black md:text-6xl text-3xl font-[Akira]">
          Other Projects
        </h1>
        <p>
          I've built quite a few projects along the way some just for fun,
          others while learning something new. I didn't think they were quite
          portfolio-worthy, so I left them out of the main lineup. But here are
          a few samples anyway, in case you're curious what I get up to when no
          one's grading the code
        </p>
      </div>
      <div className=" h-[80%] md:h-[90%] w-full mb-10 ">
        <CircularGallery
          items={extra}
          bend={1}
          textColor="#ffffff"
          borderRadius={0}
          scrollEase={0.03}
          // Optionally load a custom font for the labels.
          // Accepts a stylesheet URL (e.g. Google Fonts) or a direct font file.
          fontUrl={AkiraFont}
          font="bold 30px Akira"
          scrollSpeed={2}
        />
      </div>
      <h2 className="text-sm md:text-2xl text-white/30 absolute bottom-[5%] w-full text-center">
        Drag to view projects{" "}
      </h2>
    </section>
  );
};

export default ProjectFooter;
