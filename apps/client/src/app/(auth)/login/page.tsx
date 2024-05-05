"use client";
import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { USER_SIGN_In } from "@/graphql/user/mutation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setCard } from "@repo/ui/index";
import useAuth from "@/app/util/useAuth";
import { useRouter } from "next/navigation";
import { commonUi } from "@repo/ui/index";
import SignupPage from "../signup/page";
import { FaArrowLeftLong } from "react-icons/fa6";

const LoginPage = (props:any) => {
  const [Hidepass,setPass] = useState('password')

  const [Signup, setSignup] = useState(false);

  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated == true) {
      router.push("/Classroom");
    }
  }, [isAuthenticated]);

  const [userSignToken, { data, loading: uloading, error }] =
    useMutation(USER_SIGN_In);

  const dispatch = useDispatch();

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const LoginHandler = async (e: any) => {
    e.preventDefault();
    try {
      await userSignToken({
        variables: { email: LoginData.email, password: LoginData.password },
      });
      toast.success("Login Successfully..!")     
      dispatch(setCard(false));
      return window.location.href="/Classroom"
      

    } catch (err: any) {
      setLoginData({ email: "", password: "" });

      return toast.error(err.message);
    }
  };

  function propbtn(){
    if(props.valemail === false){
      props.setVal(true);

    }
    else if(props.valemail === true){
      props.setVal(false);

     

    }
    else{
      router.push('/');
    }
    
    
   
  }

  return (
    <>
      <commonUi.AuthCard
        title="Login"
        children={
           
            <>
            
             <form onSubmit={LoginHandler}>
              <commonUi.InputField
                label="email"
                id="email"
                type="email"
                name="email"
                required={true}
                autocomplete="off"
                onChange={changeHandler}
                value={LoginData.email}
              />
              <commonUi.InputField
                label="password"
                id="password"
                type={Hidepass}
                name="password"
                required={true}
                autocomplete="off"
                value={LoginData.password}
                onChange={changeHandler}
                btnNode={<commonUi.PassShowHide hideShow={setPass}/>}

              />
              <commonUi.Button type="submit" label="Login" />

              

            </form>

            <button onClick={()=>{propbtn()}}  className='absolute left-0 top-0   box-border p-2 text-2xl  font-bold  '><FaArrowLeftLong />
</button>
            </>

            
        }
        refbtn={{lebel:"Create a new account..!",children:(<SignupPage  onClick={()=>{setSignup(()=> Signup === false ? true : false)}}/>),set:Signup,onclick:()=>{
          setSignup(true);
        }}}
      />
    </>
  );
};

export default LoginPage;
