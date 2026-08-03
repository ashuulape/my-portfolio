import React from "react";
import InfiniteMenu from "./components/InfiniteMenu";
import home from "./assets/home.png";
import about from "./assets/about.png";
import projects from "./assets/projects.png";
import conatact from "./assets/contacts.png";
import email from "./assets/email.png";

const Infinity = () => {
  const items = [
    {
      image: home,
      link: "/",
      title: "Home",
      description: "This is pretty cool, right?",
    },
    {
      image: about,
      link: "/about",
      title: "About Me",
      description: "This is pretty cool, right?",
    },
    {
      image: conatact,
      link: "/Contact",
      title: "Contact",
      description: "This is pretty cool, right?",
    },
    {
      image: projects,
      link: "/Projects",
      title: "Projects",
      description: "This is pretty cool, right?",
    },
    {
      image: email,
      link: "mailto:ashuulape@gmail.com",
      title: "Email",
      description: "Want to Hire me?",
    },
  ];

  return <InfiniteMenu items={items} scale={2} />;
};

export default Infinity;
