"use client";
import React from "react";
import Home from "./App";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

const page = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default page;
