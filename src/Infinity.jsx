import React from "react";
import InfiniteMenu from "./components/InfiniteMenu";
import methinking from "./assets/meThinking.png";

const Infinity = () => {
  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale",
      link: "/",
      title: "Home",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/400/400?",
      link: "/about",
      title: "About Me",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      link: "/Contact",
      title: "Contact",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "/Projects",
      title: "Projects",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "mailto:ashuulape@gmail.com",
      title: "Email",
      description: "Want to Hire me?",
    },
  ];

  return <InfiniteMenu items={items} scale={2} />;
};

export default Infinity;
