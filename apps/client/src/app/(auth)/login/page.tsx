"use client";
import React, { useState } from "react";
import { useMutation} from "@apollo/client";
import InputField from "@/Components/ui/InputField";
import { USER_SIGN_In } from "@/graphql/user/mutation";
import toast, { Toaster } from "react-hot-toast";
import { FaBackward } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCard } from "@repo/ui/index";
import SignupPage from "../signup/page";
import { ClipLoader } from "react-spinners";


const LoginPage = (props:any) => {
  const [Signup,setSignup] = useState(false);

  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  
  

  const [userSignToken, { data, loading, error }] = useMutation(USER_SIGN_In);

  
  
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
        if(error){
          toast.error(error.message);
          setLoginData({ email: "", password: "" });

        }
        dispatch(setCard(false));
        
        
        toast.success(data)
        console.log(data);
        window.location.href = '/Classroom';
    } catch (err:any) { 
      
      setLoginData({ email: "", password: "" });

        return toast.error(err.message)
    }
};


  return (

    <>
    {loading ? ( <ClipLoader color="#000000" loading={true} size={100} />
):(<>
      <div className="w-full h-full bg-white rounded-3xl flex flex-col  box-border p-4 items-center absolute left-0 top-0">
    			<Toaster />
      <div>
        <form  onSubmit={LoginHandler}>
          <InputField
            label="email"
            id="email"
            type="email"
            name="email"
            required={true}
            autocomplete="off"
            onChange={changeHandler}
            value={LoginData.email}
          />
          <InputField
            label="password"
            id="password"
            type="password"
            name="password"
            required={true}
            autocomplete="off"
            value={LoginData.password}
            onChange={changeHandler}
          />


          <button className="text-2xl bg-blue-500 box-border p-2 m-2 rounded-xl" type="submit">Login</button>
        </form>
      </div>
      <div></div>
      <button
        onClick={props.onClick}
        className="box-border absolute text-2xl px-2 py-1  left-0 top-0  rounded-full"
      >
        <FaBackward />
      </button>
      <button onClick={()=>{
        setSignup(true)
      }}>
        <h1>create new account</h1>
      </button>
      {Signup ? (<div className="bg-red-400 absolute box-border -inset-1 w-full h-full flex  rounded-xl justify-center items-center">
      <SignupPage onClick={()=>setSignup(false)}/>
      </div>):(<></>)}
      
    </div>
    
    
    </>)}
    </>
    
  );
};

export default LoginPage;
