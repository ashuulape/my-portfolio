import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export const Slide = forwardRef(({ color = "bg-red-500" }, ref) => {
  const delay = [2, 2.2, 2.4, 2.6, 2.8];

  const { contextSafe } = useGSAP(() => {
    gsap.from(".maindiv1-item", {
      y: "100dvh",
      delay: 2,
      stagger: 0.2,
    });
    gsap.from(".maindiv2-item", {
      y: -1000,
      delay: 2,
      stagger: 0.2,
    });
  });
  const navigate = useNavigate();
  const transition = contextSafe(async (e) => {
    await Promise.all([
      gsap.to(".maindiv1-item", {
        y: "100vh",
        stagger: 0.2,
      }),
      gsap.to(".maindiv2-item", {
        y: "-100vh",
        stagger: 0.2,
      }),
    ]);
    navigate(`/${e}`);
  });

  useImperativeHandle(ref, () => ({
    transition,
  }));

  return (
    <div className="absolute full-height full-width z-999 pointer-events-none">
      <div className="flex relative full-height overflow-clip">
        <div
          id="maindiv1"
          className="absolute w-full z-20 flex translate-y-[-100%]"
        >
          {delay.map((_, i) => {
            return (
              <div
                key={i}
                className="maindiv1-item bg-white full-height w-[20vw]"
              />
            );
          })}
        </div>

        <div className="absolute w-full z-10 flex translate-y-[100%]">
          {delay.map((_, i) => {
            return (
              <div
                key={i}
                className={`maindiv2-item ${color} full-height w-[20vw]`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
});
