"use client";
import React, { useState } from "react";
import { useMutation} from "@apollo/client";
import InputField from "@/Components/ui/InputField";
import { SIGN_In } from "@/graphql/user/mutation";
import toast from "react-hot-toast";


const LoginPage = () => {
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  

  const [userSignToken, { data, loading, error }] = useMutation(SIGN_In);
  


  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const LoginHandler = async (e: any) => {
    e.preventDefault();
    if (!LoginData.email || !LoginData.password) {
        return toast.error("Please enter all required fields");
    }
    try {
        await userSignToken({
            variables: { email: LoginData.email, password: LoginData.password },
        });
        setLoginData({ email: "", password: "" });
        window.location.reload(); // Reload upon successful login
    } catch (error) {
      console.log(error);
        return error;
    }
};


  return (
    <div className="flex justify-evenly items-center box-border p-4 bg-white w-1/2 m-auto rounded-xl">
      <div>
        <form action="/Classroom" onSubmit={LoginHandler}>
          <InputField
            label="email"
            id="email"
            type="email"
            name="email"
            onChange={changeHandler}
            value={LoginData.email}
          />
          <InputField
            label="password"
            id="password"
            type="password"
            name="password"
            value={LoginData.password}
            onChange={changeHandler}
          />

          <button type="submit">Login</button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default LoginPage;
