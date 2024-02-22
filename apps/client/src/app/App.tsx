"use client";
import Intro from "@/Components/LandingPage/Indroduction/Intro";
import Std from "@/Components/LandingPage/Standards/std";


import React, { useEffect, useRef, useState } from "react";
import Pricing from "@/Components/LandingPage/Pricing";
import ContactUS from "@/pages/contactus";
import Footer from "@/Components/LandingPage/Footer";
import Servicses from "@/Components/LandingPage/services/Servicses";
import SideNavMenu from "@/Components/LandingPage/SideNavMenu";

const Home = () => {
  const [isNav, setisNav] = useState(0);


  const Profile = useRef<HTMLDivElement>(null);
  const Prices = useRef<HTMLDivElement>(null);

  const Home = useRef<HTMLDivElement>(null);
  const Services = useRef<HTMLDivElement>(null);
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

 


  return (
    <div className="sm:w-full w-[100%] relative   flex flex-col mx-auto">

     <div
        className={`sm:hidden  overflow-hidden  s-color  transition-all duration-300   z-10 h-[100%]  flex flex-col   justify-center box-borde  fixed right-0   `}
        style={{ borderRadius: "100% 0% 0% 100% / 42% 48% 47% 47%  ", width:`${isNav}%` }}
      >
        <SideNavMenu Profile={Profile} Home={Home} Services={Services} Price={Prices} Contactus={Contactus}/>
        
        
      </div> 

      <header
        ref={Home}
        className="box-border justify-around h-screen sm:h-auto md:h-auto md:w-[90%]   md:flex-col  flex sm:flex-col relative  w-[100%] bg-yellow-200  mx-auto  "
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

      <section ref={Prices}  className=" w-[90%] mx-auto relative">
        <Pricing />
      </section>

      <section ref={Contactus} className="w-[100%] mx-auto">
        <ContactUS />
      </section>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
