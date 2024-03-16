'use Client'
import React, { useState } from "react";
import { FaChalkboardTeacher, FaRegUserCircle } from "react-icons/fa";
import { FaCircleNodes, FaEnvelope, FaSackDollar } from "react-icons/fa6";
import {setCard} from '@repo/ui/index'
import {useDispatch} from 'react-redux'
import useAuth from "@/app/util/useAuth";
import { useUser } from "@clerk/nextjs";




interface ref {
  Profile: React.RefObject<HTMLDivElement>;
  Home: React.RefObject<HTMLDivElement>;
  Services: React.RefObject<HTMLDivElement>;
  Price: React.RefObject<HTMLDivElement>;
  Contactus: React.RefObject<HTMLDivElement>;
}

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  reff: React.RefObject<HTMLDivElement>;
}
[];

const SideNavMenu: React.FC<ref> = ({
  Profile,
  Home,
  Services,
  Price,
  Contactus,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  

  const mm: MenuItem[] = [
    { label: "Profile", icon: <FaRegUserCircle />, reff: Profile },
    { label: "Home", icon: <FaChalkboardTeacher />, reff: Home },
    { label: "Services", icon: <FaCircleNodes />, reff: Services },
    { label: "Prices", icon: <FaSackDollar />, reff: Price },
    { label: "Contactus", icon: <FaEnvelope />, reff: Contactus },
  ];

  const handleButtonClick = (sectionRef: React.RefObject<HTMLDivElement>) => {
    setIsScrolled(true);
    if (sectionRef.current !== null) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const {isAuthenticated,loading,error} = useAuth();

  return (
    <>
      <div className=" box-border flex flex-col  overflow-hidden  justify-center  items-center text-2xl">
        {mm.map((item, index) => (
          <button
            key={index}
            onMouseDown={()=> {index === 0 && isAuthenticated ? window.location.href = '/Classroom' : dispatch(setCard(true)) }}
            onClick={() => handleButtonClick(item.reff)}
            className="flex box-border m-2 p-2"
          >
            {item.icon}
          </button>
        ))}
      </div>
    </>
  );
};

export default SideNavMenu;
