"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaHome, FaTasks } from "react-icons/fa";
import { MdOutlineVideoSettings } from "react-icons/md";

import { FaGear, FaUser } from "react-icons/fa6";
import { useMutation } from "@apollo/client";
import { USER_LOG_out } from "@/graphql/user/mutation";
import userUtil from "@/app/util/userUtil";
import useAuth from "@/app/util/useAuth";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}
[];

const Navigate: React.FC = () => {
  const [smallNav, setsmallNav] = useState("none");
  const [userLogout, { loading }] = useMutation(USER_LOG_out);
  const {userRoute} = useAuth();

  

  const MenuItem: NavItem[] = [
    { label: "Home", path: "/Classroom",   icon: <FaHome /> },
    { label: "Tasks",  path:`/Classroom/${userRoute}/tasks` , icon: <FaTasks /> },
    {
      label: "Lecture",
      icon: <MdOutlineVideoSettings />,
      path:`/Classroom/${userRoute}/lectures`
    },
    { label: "More",  path:`/Classroom/${userRoute}/more`,  icon: <FaHome /> },
    { label: "Setting",  path:`/Classroom/${userRoute}/setting` , icon: <FaGear /> },
  ];

  return (
    <div className="flex w-full box-border flex-col items-center justify-between  h-full ">

      <nav className="flex flex-col  box-border">
        <span className=" flex justify-center items-center flex-col min-h-[150px] h-fit bg-slate-400 text-5xl ">
          <Link href={`/Classroom/${userRoute}/Profile`} >
            <FaUser />
          </Link>
        </span>
        {MenuItem.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="flex box-border  relative w-fit  my-2  items-center p-2"
          >
            <span className="text-4xl  md:my-2 md:text-4xl md:p-2 box-border">
              {item.icon}
            </span>
            <span className="text-xl mx-4 box-border md:hidden ">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      <span className="box-border p-2 bg-blue-700 rounded-xl">
        <a
          onClick={() => {
            userLogout();
          }}
          href="/api/auth/logout"
        >
          {loading && <>...</>}Logout
        </a>
      </span>
    </div>
  );
};

export default Navigate;
