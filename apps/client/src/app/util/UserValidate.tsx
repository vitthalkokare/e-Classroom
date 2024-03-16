import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setCard } from "@repo/ui/index";
import LoginPage from "../(auth)/login/page";

const UserValidate = () => {
  const [valEmail,setvalEmail]  = useState<Boolean>(false)
  const isuser = useSelector((state: RootState) => state.AuthCard.isUser);
  const dispatch = useDispatch();

  return (
    <>
      {isuser ? (
        <div className="w-[60%] sm:w-[90%] sm:left-[5%]  min-h-[400px] md:min-h[400px] sm:min-h-[400px] fixed  top-5  left-[20%] flex justify-center  rounded-xl sm:flex-col z-50 box-border   bg-white text-black">
          <div className="flex flex-col box-border p-4">
            <h1>Log in or sign up in second</h1>
            <p>Use Yuor Email or Phone to Continue with E-classroom</p>

            {/* Continue with Google */}
            <a
              href="/api/auth/login"
              className="box-border rounded-lg my-2 bg-blue-200 p-2 w-full flex justify-center items-center"
            >
              <button>Continue with Google</button>
            </a>

            {/* continue with Email or password */}

            <span className="box-border rounded-lg bg-blue-200 p-2 w-full flex justify-center items-center">
              <button onClick={() => {setvalEmail(true)}}>Continue with Email / Phone</button>
              
            </span>
            {valEmail && <LoginPage onClick={()=>{setvalEmail(false)}}/>}

          </div>

          <button onClick={()=>{dispatch(setCard(false))}} className="absolute right-0 top-0 box-border text-white bg-black p-2 rounded-full py-1 ">
            X
          </button>

        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default UserValidate;
