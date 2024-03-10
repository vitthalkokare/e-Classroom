"use client";

import { useEffect, useState } from "react";
import {
  gql,
  useQuery,
} from "@apollo/client";

const LoginUser = () => {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");

  const [udata,setudata] = useState<any>()

  useEffect(()=>{

  },[udata])

  const Mtoken = gql`
    mutation Mutation($email: String, $password: String) {
      setUserToken(email: $email, password: $password)
    }
  `;

  const cUser = gql`
  query GetCurrentUser($token: String) {
    getCurrentUser(token: $token) {
      id
      email
      
    }
  }

  `
  const token = localStorage.getItem('token');

    const {loading,data,error} = useQuery(cUser,{
        variables:{token:token}
    })
    
    const bt =()=>{
        const item = JSON.stringify(data)
        console.log(item)


        setudata(item);
    

    }

  return (
    <div className=" w-full bg-slate-400 box-border p-5 flex items-center justify-center">
     <h1>goodmoring</h1>
     <button onClick={bt}>give data</button>
      


      
      
    </div>
  );
};

export default LoginUser;
