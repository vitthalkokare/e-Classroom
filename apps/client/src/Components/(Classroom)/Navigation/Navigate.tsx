"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaHome, FaTasks } from "react-icons/fa";
import { MdOutlineVideoSettings } from "react-icons/md";

import { FaGear, FaUser } from "react-icons/fa6";
import { useMutation } from "@apollo/client";
import { USER_LOG_out } from "@/graphql/user/mutation";
import { UserButton } from "@clerk/nextjs";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}
[];

const Navigate: React.FC = () => {
  const [smallNav, setsmallNav] = useState("none");
  const [userLogout, { loading }] = useMutation(USER_LOG_out);

  const MenuItem: NavItem[] = [
    { label: "Home", path: "/Classroom", icon: <FaHome /> },
    { label: "Tasks", path: "/Classroom/user/tasks", icon: <FaTasks /> },
    {
      label: "Lecture",
      path: "/Classroom/user/lectures",
      icon: <MdOutlineVideoSettings />,
    },
    { label: "More", path: "/Classroom/user/more", icon: <FaHome /> },
    { label: "Setting", path: "/Classroom/user/setting", icon: <FaGear /> },
  ];

  return (
    <div className="flex box-border flex-col items-center justify-between  h-full ">
      <span></span>

      <nav className="flex flex-col md:p-2 box-border">
        <span className=" flex justify-center items-center flex-col text-5xl md:mb-2 mb-4">
          <Link href={"/Classroom/user/Profile"}>
            <FaUser />
          </Link>
        </span>
        {MenuItem.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="flex box-border  relative  items-center p-2"
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
