import React from "react";
import InfiniteMenu from "./components/InfiniteMenu";

const Infinity = () => {
  const items = [
    {
      image:
        "https://res.cloudinary.com/dwuhsjldf/image/upload/f_auto,q_auto/v1785779835/home_sxobi7.png",
      link: "/",
      title: "Home",
      description: "This is pretty cool, right?",
    },
    {
      image:
        "https://res.cloudinary.com/dwuhsjldf/image/upload/f_auto,q_auto/v1785779804/about_wssrlo.png",
      link: "/about",
      title: "About Me",
      description: "This is pretty cool, right?",
    },
    {
      image:
        "https://res.cloudinary.com/dwuhsjldf/image/upload/f_auto,q_auto/v1785779836/contacts_cyq9lj.png",
      link: "/Contact",
      title: "Contact",
      description: "This is pretty cool, right?",
    },
    {
      image:
        "https://res.cloudinary.com/dwuhsjldf/image/upload/f_auto,q_auto/v1785779834/projects_bs5pa3.png",
      link: "/Projects",
      title: "Projects",
      description: "This is pretty cool, right?",
    },
    {
      image:
        "https://res.cloudinary.com/dwuhsjldf/image/upload/f_auto,q_auto/v1785779606/email_cxeudz.png",
      link: "mailto:ashuulape@gmail.com",
      title: "Email",
      description: "Want to Hire me?",
    },
  ];

  return (
    <section className="w-dvw h-[100vh]">
      <InfiniteMenu items={items} scale={2} />;
    </section>
  );
};

export default Infinity;
