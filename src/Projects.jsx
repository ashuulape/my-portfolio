import React, { useEffect, useRef, useState } from "react";
import { Slide } from "./Slide";
import { motion } from "framer-motion";
import SplitText from "./components/SplitText";
import StaggeredMenu from "./components/StaggeredMenu";
import portPc from "./assets/portPc.png";
import portMobile from "./assets/portMobile.png";
import HorizontalScroll from "./components/HorizontalScroll";
import ProjectDetails from "./components/ProjectDetails";
import ProjectFooter from "./components/ProjectFooter";
import LightPillar from "./components/LightPillar";
import DotField from "./components/DotField";
import UberPc from "./assets/projectImg/UberPC.png";
import UberMobile from "./assets/projectImg/UberMobile.png";
import GamePC from "./assets/projectImg/GamePC.png";
import GameMobile from "./assets/projectImg/GameMobile.png";
import BankPC from "./assets/projectImg/BankPc.png";
import BankMobile from "./assets/projectImg/BankMobile.png";
import {
  SiReact,
  SiJavascript,
  SiSocketdotio,
  SiTailwindcss,
  SiGooglemaps,
  SiJsonwebtokens,
  SiAxios,
  SiGsap,
  SiNodedotjs,
  SiExpress,
  SiCss,
  SiMongodb,
  SiLeaflet,
  SiHtml5,
  SiThreedotjs,
  SiTwinmotion,
} from "react-icons/si";
import Intro from "./components/Intro";

const Projects = () => {
  const scrollObj = [
    {
      bg: UberPc,
      title: "Uber Clone",
      tag: "A real-time Uber-style ride-hailing app with live GPS tracking and Socket.IO-powered ride matching",
      feat: [
        "Real-Time Ride Matching — Socket.IO connects passengers and captains instantly, matching riders with nearby captains within a 10 km radius using MongoDB geospatial queries ($geoWithin, $centerSphere)",
        "Live GPS Tracking — Continuous location updates every 10 seconds for both passengers and captains, rendered live on an interactive Leaflet map",
        "Dynamic Fare Estimation — Real-time fare calculation for Car, Auto, and Bike based on live distance and duration from the Geoapify Routing API",
        "End-to-End Ride Lifecycle — Full trip flow from request → OTP-secured ride start → live route tracking → completion, synced in real time via Socket.IO events",
        "Secure Authentication — JWT-based auth with HTTP-only cookies, bcrypt password hashing, and token blacklisting with MongoDB TTL auto-expiry",
        "Route Visualization — GeoJSON polyline routes drawn on dark-themed map tiles, with address autocomplete and reverse geocoding via Geoapify",
      ],
      mobileImg: UberMobile,
      bgcolor: "bg-[#343134]",
      link: "https://myuber69.onrender.com/",
      tech: [
        <SiReact color="#61DAFB" />,
        <SiJavascript color="#F7DF1E" />,
        <SiNodedotjs color="#339933" />,
        <SiExpress color="#000000" />,
        <SiMongodb color="#47A248" />,
        <SiTailwindcss color="#06B6D4" />,
        <SiLeaflet color="#199900" />,
        <SiSocketdotio color="#010101" />,
        <SiGooglemaps color="#4285F4" />,
        <SiJsonwebtokens color="#000000" />,
        <SiGsap color="#88CE02" />,
        <SiAxios color="#5A29E4" />,
      ],
    },
    {
      bg: BankPC,
      title: "Banking System",
      tag: "A secure banking backend with JWT auth and a double-entry ledger for atomic, auditable transactions.",
      feat: [
        "JWT Authentication with Token Blacklisting — Secure login via HTTP-only cookies with safe logout using a blacklist and MongoDB TTL auto-expiry, preventing token reuse",
        "Double-Entry Ledger System — Immutable DEBIT/CREDIT entries with balances derived via MongoDB aggregation pipelines, ensuring auditability",
        "Atomic Transactions with Idempotency — MongoDB sessions and idempotency keys guarantee safe, duplicate-free fund transfers",
        "Role-Based Access Control — Privileged systemUser flag restricts sensitive operations to authorized users",
        "Automated Email Notifications — Welcome and transaction emails via Nodemailer with Gmail OAuth2",
      ],
      mobileImg: BankMobile,
      bgcolor: "bg-[#D8CFBC]",
      link: "https://nextbank69.onrender.com/",
      tech: [
        <SiJavascript color="#F7DF1E" />,
        <SiNodedotjs color="#339933" />,
        <SiExpress color="#000000" />,
        <SiMongodb color="#47A248" />,
        <SiJsonwebtokens color="#000000" />,
        <SiReact color="#61DAFB" />,
        <SiTailwindcss color="#06B6D4" />,
      ],
    },
    {
      bg: portPc,
      title: "Portfolio",
      mobileImg: portMobile,
      bgcolor: "bg-[#7949A6]",
      tech: [
        <SiReact color="#61DAFB" />,
        <SiTailwindcss color="#06B6D4" />,
        <SiThreedotjs color="#000000" />,
        <SiGsap color="#88CE02" />,
      ],
    },
    {
      bg: GamePC,
      title: "GameFlix",
      tag: "A Netflix-style web app for discovering and exploring games, powered by the RAWG API.",
      feat: [
        "Netflix-Style Interface — Modern, responsive UI for browsing games instead of movies and shows",
        "Live Trending Games — Displays currently popular games fetched in real time from the RAWG API",
        "Search Functionality — Instantly search for any game by name",
        "Genre-Based Browsing — Explore games by category (Action, Adventure, RPG, Sports, and more)",
        "Detailed Game Pages — Full descriptions, ratings, platforms, and genre info for each game",
        "RAWG API Integration — Real-time game data sourced from RAWG.io's game database",
        "Fully Responsive Design — Optimized layout for desktop, tablet, and mobile",
      ],
      mobileImg: GameMobile,
      bgcolor: "bg-[#BC0912]",
      link: "https://gameflix69.netlify.app/",
      tech: [
        <SiJavascript color="#F7DF1E" />,
        <SiCss color="#1572B6" />,
        <SiHtml5 color="#E34F26" />,
      ],
    },
  ];

  const slideRef = useRef();

  const [load, setload] = useState(true);
  const handleClick = (link, label) => {
    console.log(label);
    if (label !== "Projects") {
      slideRef.current.transition(link);
    }
  };

  useEffect(() => {
    const time = setTimeout(() => setload(false), 2500);

    return () => clearTimeout(time);
  }, []);

  return (
    <div
      className={`${load ? "h-dvh" : "h-fit"} w-full text-10 bg-transparent relative overflow-clip pointer-events-none`}
    >
      <Slide color={"bg-[#87ceeb]"} ref={slideRef} />
      <Intro text={"PROJECTS"} color={"text-[#87ceeb]"} />

      <LightPillar
        topColor="#87ceeb"
        bottomColor="#ffcafc"
        intensity={0.9}
        rotationSpeed={0.1}
        glowAmount={0.002}
        pillarWidth={5}
        pillarHeight={0.4}
        noiseIntensity={0.5}
        pillarRotation={25}
        interactive={true}
        mixBlendMode="screen"
        quality="high"
        className="pointer-events-auto"
      />

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

      <StaggeredMenu transitionfun={handleClick} />
      <HorizontalScroll scrollObj={scrollObj} />
      <ProjectDetails obj={scrollObj} />
      <ProjectFooter />
    </div>
  );
};

export default Projects;
