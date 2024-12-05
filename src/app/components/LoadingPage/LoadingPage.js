"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { FaHeart } from "react-icons/fa";

const LoadingPage = () => {
  const counterRef = useRef(null);
  const hbdTagline = useRef(null);
  const [count, setCount] = useState(0); // State for the counter
  const duration = 3000; // Total duration for the animation in milliseconds
  const steps = 30; // Number of updates during the animation
  const intervalDelay = duration / steps; // Calculate interval delay

  useEffect(() => {
    let elapsedSteps = 0;

    const interval = setInterval(() => {
      elapsedSteps++;
      if (elapsedSteps >= steps) {
        clearInterval(interval);
        setCount(100); // Ensure final value is 100
        return;
      }

      // Generate a random number between the current count and 100
      setCount((prev) => {
        const remainingSteps = steps - elapsedSteps;
        const maxIncrement = Math.ceil((100 - prev) / remainingSteps);
        const randomIncrement = Math.floor(Math.random() * maxIncrement + 1);
        return Math.min(prev + randomIncrement, 100);
      });
    }, intervalDelay);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  gsap.to(counterRef.current, {
    duration: 0.5,
    delay: 3.5,
    opacity: 0,
    ease: "power2.out",
  });

  gsap.to(hbdTagline.current, {
    duration: 0.5,
    delay: 3.5,
    opacity: 0,
    ease: "power2.out",
  });

  return (
    <div className="h-[100vh] w-full flex flex-col items-center justify-center gap-4">
      <div
        ref={counterRef}
        className=" font-bold text-7xl w-full flex items-center justify-center gap-4"
      >
        <p>Loading</p>
        <p>{count}%</p>
      </div>
      <div ref={hbdTagline} className=" text-4xl text-[#7cb9e8] flex items-center gap-4">
        <p className="text-white">Happy Birthday, Yushi</p>
        <FaHeart
          size={50}
          className="text-red-50 text-2xl h-[50px] w-[50px]"
        />
      </div>
    </div>
  );
};

export default LoadingPage;
