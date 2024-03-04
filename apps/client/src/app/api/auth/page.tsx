"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  gql,
  useMutation,
  useQuery,
  useSuspenseQuery,
  UseFragmentOptions,
  useFragment,
} from "@apollo/client";
import { NextApiRequest, NextApiResponse } from "next/types";
import { NextRequest, NextResponse } from "next/server";

const LoginUser = () => {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");

  const router = useRouter();

  const Mtoken = gql`
  mutation Mutation($email: String!, $password: String!) {
    authUserSignToken(email: $email, password: $password)
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

  const [setUserToken, { data, loading, error }] = useMutation(Mtoken,{
    refetchQueries:[{query:cUser,variables:{token:token}}]
  })
  async function getUser(event: React.FormEvent<HTMLFormElement>):Promise<any> {
    event.preventDefault();

    try {
      const dd = await setUserToken({
        variables: { email: Email, password: Pass },
      });
      
     
        {data &&  localStorage.setItem("token", JSON.stringify(data).trim().slice(17,-2));
        router.push('/Classroom')
        
        return data;
      }
    
    } catch (error) {
      console.log(error);
    }
    setEmail("");
    setPass("");
  }

  return (
    <div className=" w-full bg-slate-400 box-border p-5 flex items-center justify-center">
      <form action="" onSubmit={getUser}>
        <input
          type="email"
          placeholder="email"
          value={Email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={Pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <button
       
      >
        GetData
      </button>
    </div>
  );
};

export default LoginUser;
