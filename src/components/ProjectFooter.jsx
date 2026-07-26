import React from "react";
import CardSwap, { Card } from "./CardSwap";
import MDB from "../assets/projectImg/MDB.png";
import Pokecard from "../assets/projectImg/PokeCard.png";
import Pin from "../assets/projectImg/Pin.png";

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
      width = 1000;
      height = 800;
      break;
  }
  console.log(window.outerWidth);
  const extra = [
    {
      title: "MDB",
      discription:
        "Search any movie, get every detail — cast, ratings, trailers, and more",
      image: MDB,
    },
    {
      title: "PokeCard",
      discription: "A simple Pokémon card game to play with a friend",
      image: Pokecard,
    },
    {
      title: "Pinsearch",
      discription:
        "A Pinterest-style image search app, built with Redux to sharpen state management skills.",
      image: Pin,
    },
  ];

  return (
    <section className="md:h-[90dvh] h-[60dvh] relative  md:text-lg text-xs ">
      <div className="md:px-8 px-2 text-white font-extralight font-[Galano] md:w-1/2 text-center">
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

      <CardSwap
        cardDistance={70}
        verticalDistance={130}
        delay={4000}
        pauseOnHover={true}
        width={width}
        height={height}
      >
        {extra.map((e) => {
          return (
            <Card
              image={e.image}
              className={"px-4 py-2 flex flex-col justify-between h-full"}
            >
              <div>
                <h3 className="text-white text-2xl font-bold w-full">
                  {e.title}
                </h3>
                <p className="text-white text-xs font-extralight  w-full">
                  {e.discription}
                </p>
              </div>
              <div>
                <p className="text-white">helll</p>
              </div>
            </Card>
          );
        })}
      </CardSwap>
    </section>
  );
};

export default ProjectFooter;
