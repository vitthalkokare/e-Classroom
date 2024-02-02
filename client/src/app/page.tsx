"use client";
import React, { useEffect } from "react";
import Home from "./App";
import UserValidate from "./api/Register/UserValidate";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";

const page = () => {
  const {user} = useUser();

  useEffect(()=>{
   
  },[])
  return (
    <>
     
      <UserValidate/>
      <Home />
    </>
  );
};

export default page;
