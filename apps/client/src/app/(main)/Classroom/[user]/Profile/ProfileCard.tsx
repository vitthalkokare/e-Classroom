import React, { Children, useState } from "react";

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
    <div className="relative w-full h-full box-border  min-h-screen">
      
      <section className="flex flex-col box-border p-2  mb-2 sticky top-0 z-40 bg-slate-500 dark:bg-neutral-600 dark:text-darktext rounded-2xl shadow-lg ">
        <div className=" flex items-center">
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
        </div>
        <nav className=" mt-4 text-md font-bold box-border  rounded-xl my-1 inline-block ">
      {btn.map((item,inx)=>(
            <button key={inx} className={`${inx === Active && `bg-white dark:bg-darkmodes1 rounded-xl font-medium transition-all duration-200`} box-border py-1 px-2 `} onClick={()=>{
                    item.onclick()
          setActive(inx)

          
        }}>{item.btn}</button>
      ))}
      </nav>
        
      </section>
     
      


      <section className="w-full flex h-full min-h-[600px] overflow-y-scroll   p-2  box-border scr rounded-2xl  ">
        {children}
      </section>
    </div>
  );
};

export default ProfileCard;
