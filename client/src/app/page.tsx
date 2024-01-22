"use client";
import Intro from "@/Components/LandingPage/Indroduction/Intro";
import Std from "@/Components/LandingPage/Standards/std";
import { FaChalkboardTeacher, FaRegUserCircle } from "react-icons/fa";
import { FaCircleNodes, FaEnvelope, FaSackDollar } from "react-icons/fa6";

import React, { useEffect, useRef, useState } from "react";
import Pricing from "@/Components/LandingPage/Pricing";
import Fuck from "@/pages/contactus";
import Footer from "@/Components/LandingPage/Footer";
import Servicses from "@/Components/LandingPage/services/Servicses";

const page = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNav, setisNav] = useState(0);

  const Profile = useRef<HTMLDivElement>(null);
  const Home = useRef<HTMLDivElement>(null);
  const Services = useRef<HTMLDivElement>(null);
  const Goals = useRef<HTMLDivElement>(null);
  const Contactus = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos < 10) {
        setisNav(0);
      } else {
        setisNav(5);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = (sectionRef: React.RefObject<HTMLDivElement>) => {
    setIsScrolled(true);
    if (sectionRef.current !== null) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sm:w-[400px] w-[100%] relative   flex flex-col mx-auto">
      <div
        className={`sm:hidden  overflow-hidden  s-color  transition-all duration-300   z-10 h-[100%]  flex flex-col   justify-center box-borde  fixed right-0   `}
        style={{ borderRadius: "100% 0% 0% 100% / 42% 48% 47% 47%  ", width:`${isNav}%` }}
      >
        <div className=" box-border flex flex-col w-full overflow-hidden gap-5 justify-center  items-center text-2xl rounded-3xl">
          <button className="m-2" onClick={() => handleButtonClick(Profile)}>
            <FaRegUserCircle />
          </button>
          <button className="m-2" onClick={() => handleButtonClick(Home)}>
            <FaChalkboardTeacher />
          </button>
          <button className="m-2" onClick={() => handleButtonClick(Services)}>
            <FaCircleNodes />
          </button>
          <button className="m-2" onClick={() => handleButtonClick(Goals)}>
            <FaSackDollar />
          </button>
          <button className="m-2" onClick={() => handleButtonClick(Contactus)}>
            <FaEnvelope />
          </button>
        </div>
      </div>

      <header
        ref={Home}
        className="box-border justify-around   md:flex-col  flex sm:flex-col relative  w-[100%] bg-yellow-200  mx-auto  "
        style={{ borderRadius: "" }}
      >
        <Intro />
        <Std />
      </header>

      {/* Services Sections */}
      <section
        ref={Services}
        className="relative w-[90%] sm:w-full mx-auto box-border   p-2 flex-col flex  items-center"
      >
        {/* Classes Start */}

        <Servicses />
      </section>

      <section ref={Goals} className=" w-[90%] mx-auto relative">
        <Pricing />
      </section>

      <section ref={Contactus} className="w-[100%] mx-auto">
        <Fuck />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
