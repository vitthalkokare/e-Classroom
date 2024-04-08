import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

export interface navProps {
  children: React.ReactNode;
  navItem: { title: string; icon: React.ReactNode; onclick: () => void }[];
}

const PageDashboard = ({ children, navItem }: navProps) => {
  const [Active, setActive] = useState(0);

  return (
    <div className=" box-border sm:flex-col flex gap-2 p-4">
      <nav className="flex sm:flex-row  flex-col h-fit z-10 sticky top-4 bg-white w-fit rounded-xl shadow-xl box-border  gap-2  border-2">
        {navItem.map((item, index) => (
          <button
            key={index}
            className={`${index === Active && `bg-black  text-white rounded-xl`} flex justify-center items-center box-border p-2  gap-2 `}
            onClick={() => {
                item.onclick()
              setActive(index);
            }}
          >
            <span>{item.title}</span>
            <span>{item.icon}</span>
          </button>
        ))}
      </nav>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default PageDashboard;
