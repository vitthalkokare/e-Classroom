"use client";
import React, { useEffect } from "react";
import Home from "./App";
import UserValidate from "./api/Register/UserValidate";
import { useUser } from "@auth0/nextjs-auth0/client"
import { useRouter } from "next/router";
import {GET} from './api/route'
import { useQuery } from "@apollo/client";
import { AUTH_USER } from "@/graphql/user/queries";
import AuthUser from "./util/AuthUser";

const page = () => {
 
  return (
    <>
      <UserValidate/>
      <Home />
    </>
  );
};

export default page;
