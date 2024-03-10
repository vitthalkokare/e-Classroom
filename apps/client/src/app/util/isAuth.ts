"use client";
import React, { Component } from "react"; // Import React

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useQuery } from "@apollo/client";
import { AUTH_USER } from "@/graphql/user/queries";

export default function isAuth(Component:any) {
  return function IsAuth(props: React.Component) {
    const auth = false;
    const {data,loading,error} = useQuery(AUTH_USER)


    useEffect(() => {
      if (!data) {
        return redirect("/api/login");
      }
    }, []);

     return redirect('/Classroom')
  };


}
