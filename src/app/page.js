"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import heroImage from "src/assets/finalHero2NoBg.png";
import heroAnimation from "../assets/animation_lmqhq7il.json";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import LoadingPage from "./components/LoadingPage/LoadingPage";
import Navbar from "./components/Navbar/Navbar";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import SplitType from "split-type";

export default function Home() {
  const isClient = typeof window !== "undefined";
  const [isLoading, setIsLoading] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const heroImgRef = useRef(null);
  const taglineRef = useRef(null);
  const heroNavRef = useRef(null);
  const currentStatusRef = useRef(null);
  const contactMeRef = useRef(null);
  const viewResumeRef = useRef(null);
  const titleName = useRef(null);

  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isClient) {
      gsap.fromTo(
        titleName.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.inOut" }
      );

      gsap.fromTo(
        taglineRef.current,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      gsap.fromTo(
        heroImgRef.current,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power2.out", delay: 1 }
      );

      gsap.fromTo(
        heroNavRef.current,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.inOut", delay: 1.5 }
      );

      gsap.fromTo(
        currentStatusRef.current,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.inOut", delay: 1.5 }
      );

      gsap.fromTo(
        contactMeRef.current,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.inOut", delay: 2.5 }
      );

      gsap.fromTo(
        viewResumeRef.current,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.inOut", delay: 2 }
      );
    }
  }, [isLoading]);

  useEffect(() => {
    if (isClient) {
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
          setIsNavbarVisible(true); // Show the navbar after the first section
        } else {
          setIsNavbarVisible(false); // Hide the navbar when on the first section
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  if (isClient) {
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {
      console.log();
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    if (isClient) {
      const splitTypes = document.querySelectorAll(".revealType");
      splitTypes.forEach((char, i) => {
        const text = new SplitType(char, {
          types: "words",
        });
        gsap.from(text.words, {
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.2,
        });
      });
    }
  }, [isLoading]);

  useEffect(() => {
    if (isClient) {
      const container = document.querySelector(".aboutMeCardsContainer"); //container
      const cards = gsap.utils.toArray(".card"); //sections
      console.log(cards);

      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".aboutMeCardsContainer",
          start: "top 55%",
          scrub: 1,
          end: "+=" + 100 * (cards.length - 1),
          // markers: true,
          // pin: true,
        },
      });
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }
  }, [isLoading]);

  const landingPageCardsLayout = (
    <div className="cardsLayout flex flexbox justify-center flex-1 gap-8 w-full relative overflow-hidden">
      <div className="leftSection flex flex-col gap-8 w-[60%]">
        <div
          ref={taglineRef}
          className=" bg-[rgba(124,185,232,0.15)] rounded-3xl applyBoxShadow max-w-[950px] min-h-[100px] max-h-[120px] p-10 flex items-center justify-center"
        >
          <p className=" text-4xl text-[#7cb9e8] opacity-100">
            Discovering the remarkable stories data has to tell.
          </p>
        </div>
        <div className=" leftBottomSection flex gap-8">
          <div className=" flex flex-col gap-8 w-[50%] ">
            <div
              ref={heroNavRef}
              className=" bg-[rgba(124,185,232,0.15)] rounded-3xl applyBoxShadow h-[250px]  max-h-[300px] max-w-[600px] px-10 text-2xl flex items-center justify-center border"
            >
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
            <div
              ref={viewResumeRef}
              className=" bg-[rgba(124,185,232,0.85)] flex items-center justify-center min-h-[75px] rounded-3xl applyBoxShadow"
            >
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-2xl"
              >
                View my resume.
              </a>
            </div>
          </div>
          <div
            ref={heroImgRef}
            className="heroImageContainerShadow bg-[rgba(25,40,40,1)] rounded-3xl applyBoxShadow w-[50%] h-[350px] overflow-hidden"
          >
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
        <div
          ref={currentStatusRef}
          className="heroSkills bg-[rgba(124,185,232,0.85)] applyBoxShadow rounded-3xl min-h-[300px] min-w-[300] max-h-[400px] max-w-[400px] flex flex-col justify-around px-10 text-2xl"
        >
          <p>
            Currently pursuing my Masters in Data Science from UNSW, Sydney.
          </p>
          <p>Also working part-time as Senior Resident at UNSW.</p>
        </div>
        <div
          ref={contactMeRef}
          className=" heroSkills bg-[rgba(124,185,232,0.15)] rounded-3xl applyBoxShadow min-h-[180px] max-h-[200px] max-w-[400px] flex flex-col items-center justify-center text-2xl gap-2"
        >
          <p>Contact me.</p>
          <div className=" flex gap-2 text-5xl">
            <FaLinkedin className=" cursor-pointer h-[50px] w-[50px]" />
            <MdEmail className=" cursor-pointer h-[50px] w-[50px]" />
            <FaTwitterSquare className=" cursor-pointer h-[50px] w-[50px]" />
            <FaGithubSquare className=" cursor-pointer h-[50px] w-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );

  const aboutSection = (
    <div className=" flex flex-col ">
      {/* <div className="fakeNav h-[10vh]"></div> */}
      <div className="aboutMe pt-[10vh]">
        <div className="topHalf flex flex-col gap-8">
          <p className=" text-7xl text-[#7cb9e8]">About me.</p>
          <div className="flex flex-col gap-4">
            <p className="revealType inline-block text-xl text-white break-words">
              I am a passionate data scientist currently pursuing my Masters in
              Data Science at UNSW, Sydney, driven by a desire to uncover
              meaningful insights and create impact through data.
            </p>
            <p className="revealType text-xl text-white">
              Throughout my academic journey, I have delved into various areas
              such as Python, R, Deep Learning, Artificial Intelligence, Machine
              Learning, Business Analytics, and Data Visualization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const aboutCardsSection = (
    <div className="wrapper h-[60vh] w-[300vw] flex items-center -mt-8 ">
      <div
        ref={containerRef}
        className="aboutMeCardsContainer overflow-x-hidden flex"
      >
        <div className="card h-[300px] w-[75vw] rounded-3xl flex items-center justify-center">
          <div className=" h-full w-[70%] bg-[rgba(124,185,232,0.15)] rounded-3xl flex flex-col p-12 gap-6 ">
            <p className="textAnim text-4xl text-[#7cb9e8]">
              Manipal University, Jaipur.
            </p>
            <div>
              <ul className=" text-xl">
                <li>- Completed my B.Tech in Data Science and Engineering.</li>
                <li>
                  - Awarded for outstanding academic performance with a place on
                  the Dean’s List in 2023.
                </li>
                <li>
                  - Received “The Best Idea award” in Mini Hacks 2.0 organised
                  by the ACM student chapter in the year 2021.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" card h-[300px] w-[75vw] rounded-3xl flex items-center justify-center">
          <div className=" h-full w-[70%] bg-[rgba(124,185,232,0.15)] rounded-3xl flex flex-col p-12 gap-6 ">
            <p className="textAnim text-4xl text-[#7cb9e8]">
              Data Analytics Trainee, PWC.
            </p>
            <div>
              <ul className=" text-xl">
                <li>
                  - Leveraged a platform-based program comprising of 4 micro
                  certifications: IT Fundamentals, RDBMS, Programming
                  Fundamentals (via Python) and Data Engineering.
                </li>
                <li>
                  - Recognized as one of the top 20 students among a competitive
                  pool of 14 universities nationwide.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" card h-[300px] w-[75vw] rounded-3xl flex items-center justify-center">
          <div className=" h-full w-[70%] bg-[rgba(124,185,232,0.15)] rounded-3xl flex flex-col p-12 gap-6 ">
            <p className="textAnim text-4xl text-[#7cb9e8]">
              Data Science Mentee, Kaggle.
            </p>
            <div>
              <ul className=" text-xl">
                <li>
                  - Featured on Kaggle’s YouTube and LinkedIn for the project
                  “Application of different architectures on an image dataset”.
                </li>
                <li>
                  - Won an educational grant in KaggleX BIPOC Mentorship Program
                  cohort 2. Achieved high competency with the Google Cloud
                  platform through hands-on experience utilising resources
                  equivalent to $1000.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" card h-[300px] w-[75vw] rounded-3xl flex items-center justify-center">
          <div className=" h-full w-[70%] bg-[rgba(124,185,232,0.15)] rounded-3xl flex flex-col p-12 gap-6 ">
            <p className="textAnim text-4xl text-[#7cb9e8]">
              University of New South Wales, Sydney.
            </p>
            <div>
              <ul className=" text-xl">
                <li>
                  - Pursuing my Master’s degree in Data Science and Decisions.
                </li>
                <li>
                  - Recognized among top students at UNSW by the esteemed
                  International Student Award in 2024, highlighting dedication
                  toward both scholarly pursuits and active involvement within
                  university programs supporting global engagement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
        <div
          ref={titleName}
          className=" flex justify-between w-full h-[20vh] mt-12"
        >
          <p className=" text-9xl text-white text-center">Aayushi Jha</p>
          {/* <Lottie animationData={heroAnimation} className=" h-[120px]" /> */}
        </div>
        <div className="h-[80vh] mt-4">{landingPageCardsLayout}</div>
      </div>
      {aboutSection}
      <p className=" text-5xl mt-4 text-[#7cb9e8]">Digging a little deeper.</p>
      {aboutCardsSection}
      {skillsSection}
    </div>
  );

  return (
    <main className="flex flex-col relative px-36 overflow-x-hidden">
      <div className="hero-background w-full h-full fixed top-0 left-0 -z-10"></div>
      {isLoading ? <LoadingPage /> : content}
      {/* {isNavbarVisible && <Navbar />} */}
    </main>
  );
}
