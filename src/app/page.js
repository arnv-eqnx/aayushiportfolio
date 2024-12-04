"use client";
import Lottie from "lottie-react";

import LoadingPage from "./components/LoadingPage/LoadingPage";

import Image from "next/image";
import heroImage from "src/assets/finalHero2NoBg.png";
import Link from "next/link";
import heroAnimation from "../assets/animation_lmqhq7il.json";
import { useEffect, useState } from "react";

import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=> setIsLoading(false), 500);
    console.log(timer)
    return () => clearTimeout(timer)
  }, [])

  const cardLayout = (
    <div className="cardsLayout flex flexbox justify-center flex-1 gap-8 w-full relative">
      <div className="leftSection flex flex-col gap-8 w-[60%]">
        <div className=" bg-[rgba(124,185,232,0.15)] rounded-3xl applyBoxShadow max-w-[950px] min-h-[100px] max-h-[120px] p-10 flex items-center justify-center">
          <p className=" text-4xl text-[#7cb9e8] opacity-100">
            Discovering the remarkable stories data has to tell.
          </p>
        </div>
        <div className=" leftBottomSection flex gap-8">
          <div className=" flex flex-col gap-8 w-[50%] ">
            <div className=" bg-[rgba(124,185,232,0.15)] rounded-3xl applyBoxShadow h-[250px]  max-h-[300px] max-w-[600px] px-10 text-2xl flex items-center justify-center border">
              <ul className=" heroNav flex flex-col justify-between">
                <li>
                  <Link href="#">About Me.</Link>
                </li>
                <li>
                  <Link href="#">Skills.</Link>
                </li>
                <li>
                  <Link href="#">Featured.</Link>
                </li>
              </ul>
            </div>
            <div className=" bg-[rgba(124,185,232,0.85)] flex items-center justify-center min-h-[75px] rounded-3xl applyBoxShadow">
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener norefferer"
                className=" text-2xl"
              >
                View my resume.
              </a>
            </div>
          </div>
          <div className="heroImageContainerShadow bg-[rgba(25,40,40,1)] rounded-3xl applyBoxShadow w-[50%] h-[350px] overflow-hidden">
            <Image
              src={heroImage}
              height={350}
              width={350}
              style={{ objectFit: "contain" }}
              className="relative rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="rightSection flex flex-col gap-8 w-[40%]">
        <div className="heroSkills bg-[rgba(124,185,232,0.85)] applyBoxShadow rounded-3xl min-h-[300px] min-w-[300] max-h-[400px] max-w-[400px] flex flex-col justify-around px-10 text-2xl">
          <p>
            Currently pursuing my Masters in Data Science from UNSW, Sydney.
          </p>
          <p>Also working part-time at ABC Tutoring.</p>
        </div>
        <div className=" heroSkills bg-[rgba(124,185,232,0.15)] rounded-3xl applyBoxShadow min-h-[180px] max-h-[200px] max-w-[400px] flex flex-col items-center justify-center text-2xl gap-2">
          <p>Contact me.</p>
          <div className=" flex gap-2 text-5xl">
            <FaLinkedin />
            <MdEmail />
            <FaTwitterSquare />
            <FaGithubSquare />
          </div>
        </div>
      </div>
    </div>
  );

  const aboutSection = (
    <div className=" h-screen border">
      <p className=" text-white">hello from about</p>
    </div>
  );

  const skillsSection = (
    <div className=" h-screen border">
      <p className=" text-white">hello from skills</p>
    </div>
  );

  const content = (
    <div className=" flex flex-col relative">
      <div className="h-[100vh] w-full relative flex flex-col items-center px-32">
        <div className=" flex justify-between w-full h-[20vh] mt-12">
          <p className=" text-9xl text-white text-center">Aayushi Jha</p>
          <Lottie animationData={heroAnimation} className=" h-[120px]" />
        </div>
        <div className="h-[80vh] mt-4">{cardLayout}</div>
      </div>
      {aboutSection}
      {skillsSection}
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col relative px-36">
      <div className="hero-background w-full h-full fixed top-0 left-0 -z-10"></div>
      {isLoading? <LoadingPage /> : content}
    </main>
  );
}
