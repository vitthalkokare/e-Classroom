"use client";
import React, { useEffect, useState } from "react";
import { commonUi } from "@repo/ui/index";
import { useMutation } from "@apollo/client";

import { toast } from "react-hot-toast";
import { LOGIN_FACULTY } from "@/graphql/Faculty/Mutation";
import FauthUtil from "@/app/(main)/Faculty/util/useFaculty";
import { LoginProps } from "../a/page";
import Link from "next/link";

const Facultylogin = () => {
  const [Hidepass,setPass] = useState('password')

  const [FacultyLoginData, setFacultyLoginData] = useState<LoginProps>({
    email: "",
    password: "",
    secretKey: "",
  });
  const { Faculty, router } = FauthUtil();

  useEffect(() => {
    if (Faculty === true) {
      router.push("/Faculty");
    }
  }, [Faculty]);

  const [LoginFaculty, { data, error }] = useMutation(LOGIN_FACULTY);

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;

    setFacultyLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function FLoginHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await LoginFaculty({ variables: { input: FacultyLoginData } });

      if (error) {
        const d = JSON.parse(error.message);
        for (let key of d) {
          return toast.error(key.message);
        }
      }
      toast.success("Login Successfully..!");

      return (window.location.href = "/Faculty");
    } catch (e: any) {
      setFacultyLoginData({ email: "", password: "", secretKey: "" });

      

      return toast.error(e.message);
    }
  }

  return (
    <>
      <commonUi.AuthCard
        title="Faculty Login"
        children={
          <form onSubmit={FLoginHandler}>
            <span className="flex gap-2 sm:flex-col">
              <commonUi.InputField
                label="email"
                id="email"
                type="email"
                name="email"
                required={true}
                autocomplete="off"
                onChange={changeHandler}
                value={FacultyLoginData.email}
              />
              <commonUi.InputField
                label="password"
                id="password"
                type={Hidepass}
                name="password"
                required={true}
                autocomplete="off"
                value={FacultyLoginData.password}
                onChange={changeHandler}
                btnNode={<commonUi.PassShowHide hideShow={setPass}/>}

              />
            </span>
            <span>
              <commonUi.InputField
                label="SecretKey"
                id="secretkey"
                type="text"
                name="secretKey"
                required={true}
                autocomplete="off"
                value={FacultyLoginData.secretKey}
                onChange={changeHandler}
              />
            </span>

            <span className="flex flex-col">
              <commonUi.Button type="submit" label="Login" />
              <button>
                <Link href={"/signup"}>Create a New Account..!</Link>
              </button>
            </span>
          </form>
        }
      />
    </>
  );
};

export default Facultylogin;
