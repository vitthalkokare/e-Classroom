import React, { Children, useState } from "react";
import Image from "next/image";

interface studentProps {
  name: string;
  sirname: string;
  state: string
  city: string;
  boardname: string;
  profileUrl: string;
  Class: string;
  children: React.ReactNode;
  btn:{btn: string,onclick:()=>void}[]
}

const ProfileCard = ({
  name,
  sirname,
  profileUrl,
  Class,
  children,
  btn,
  boardname,
  city,
  state
}: studentProps) => {
  const [Active,setActive] = useState(0)
  return (
    <div>
      <section className="flex box-border p-2 items-center">
        <span className="rounded-full overflow-hidden">
          <img src={profileUrl} alt={"img"} width={150} height={150} />
        </span>
        <span className="flex box-border p-3 flex-col">
          <h1 className="text-3xl font-bold">
            {name} {sirname}
          </h1>

         <span className="flex gap-4 items-center">
         <h1 className="text-2xl font-bold text-green-600">{Class}</h1>
          <h2 className="font-medium text-lg">{boardname}</h2>
         </span>

         <span className="flex text-md font-semibold gap-1">
          <h3>{city}</h3>
          <h3>{state}</h3>
        </span>

        </span>
        
      </section>
      
      <nav className="flex text-md font-bold box-border  rounded-xl my-1 bg-slate-400 ">
      {btn.map((item,inx)=>(
            <button className={`${inx === Active && `bg-white rounded-xl font-medium transition-all duration-200`} box-border py-1 px-2 `} onClick={()=>{
                    item.onclick()
          setActive(inx)

          
        }}>{item.btn}</button>
      ))}
      </nav>
      


      <section className="w-full flex overflow-y-scroll  p-4 rounded-xl box-border scr bg-purple-500 h-full">
        {children}
      </section>
    </div>
  );
};

export default ProfileCard;
