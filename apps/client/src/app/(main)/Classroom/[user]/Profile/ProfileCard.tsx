import React, { Children } from "react";
import Image from "next/image";

interface studentProps {
  name: string;
  sirname: string;
  profileUrl: string;
  standard: string;
  children: React.ReactNode;
  btn:{btn: string,onclick:()=>void}[]
}

const ProfileCard = ({
  name,
  sirname,
  profileUrl,
  standard,
  children,
  btn,
}: studentProps) => {
  return (
    <div>
      <section className="flex box-border p-2 items-center">
        <span className="rounded-full overflow-hidden">
          <img src={profileUrl} alt={"img"} width={150} height={150} />
        </span>
        <span className="flex flex-col">
          <h1 className="">
            {name} {sirname}
          </h1>

          <h1>{standard}</h1>
        </span>
      </section>
      <hr />
      <nav className="flex gap-4">
      {btn.map((item,inx)=>(
        <button key={inx} onClick={item.onclick}>{item.btn}</button>
      ))}
      </nav>
      
      <hr />


      <section className="w-full flex overflow-y-scroll justify-center items-center box-border scr bg-purple-500 h-full">
        {children}
      </section>
    </div>
  );
};

export default ProfileCard;
