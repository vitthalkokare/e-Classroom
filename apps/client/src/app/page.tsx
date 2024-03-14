"use client";
import React from "react";
import Home from "./Home";
import UserValidate from "./util/UserValidate";





const page = () => {
 
  return (
    <>
      <UserValidate/>
      <Home />
    </>
  );
};

export default page;
