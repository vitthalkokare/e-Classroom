"use client";
import Intro from "@/Components/LandingPage/Intro";
import Std from "@/Components/LandingPage/Standards/EnrollItem";


import React, { useEffect, useRef, useState } from "react";
import Pricing from "@/Components/ui/Pricing";
import ContactUS from "@/pages/contactus";
import Footer from "@/Components/ui/Footer";
import Servicses from "@/Components/LandingPage/services/Servicses";
import SideNavMenu from "@/Components/LandingPage/SideNavMenu";
import { FaUser } from "react-icons/fa";
import EnrollHandler from "@/Components/(Classroom)/Subjects/EnrollHandler";
import Link from "next/link";
import useAuth from "./util/useAuth";

const Home = () => {
  const [isNav, setisNav] = useState(0);
  const [topNav, settopNav] = useState({height:50,width:0,opacity:0})


  const Profile = useRef<HTMLDivElement>(null);
  const Prices = useRef<HTMLDivElement>(null);

  const Home = useRef<HTMLDivElement>(null);
  const Services = useRef<HTMLDivElement>(null);
  const Contactus = useRef<HTMLDivElement>(null);
  
  const {userRoute} = useAuth()

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos < 40) {
        setisNav(0);
        settopNav(topNav);
      } else {
        setisNav(5);
        settopNav({height:50,width:100,opacity:50})
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 


  return (
    <div className=" w-[100%] sm:min-w-[600px]   relative   flex flex-col">

     <div
        className={`sm:hidden  overflow-hidden  s-color  transition-all duration-300   z-10 h-[100%]  flex flex-col   justify-center box-borde  fixed right-0   `}
        style={{ borderRadius: "100% 0% 0% 100% / 42% 48% 47% 47%  ", width:`${isNav}%` }}
      >
        <SideNavMenu Profile={Profile} Home={Home} Services={Services} Price={Prices} Contactus={Contactus}/>
       
        
        
      </div> 
      <div className={`sticky top-0 transition-all duration-300 w-full  overflow-hidden  bg-yellow-200 text-2xl hidden sm:flex  justify-between    items-center box-border p-2  z-50  h-[50px]`} style={{height:`${topNav.height}px`}}>
        <strong className={``} style={{opacity:`${topNav.opacity}`}} >E-Classroom</strong>
        <span className=" flex justify-center items-center flex-col min-h-[150px] h-fit  text-2xl ">
          <Link href={`/Classroom/${userRoute}/Profile`} >
            <FaUser />
          </Link>
        </span>

      </div>

      <header
        ref={Home}
        className="box-border justify-around h-screen sm:h-auto md:h-auto md:flex-col   flex sm:flex-col relative  w-[100%] bg-yellow-200   "
        style={{ borderRadius: "" }}
      >
        <EnrollHandler/>

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
