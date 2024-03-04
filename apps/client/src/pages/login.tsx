import { useState } from "react";
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
  const token = localStorage.getItem('token')

  const [setUserToken, { data, loading, error }] = useMutation(Mtoken,{
    refetchQueries:[{query:cUser,variables:{token:token}}]
  })
  

  async function getUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const dd = await setUserToken({
        variables: { email: Email, password: Pass },
      });
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
    </div>
  );
};

export default LoginUser;
