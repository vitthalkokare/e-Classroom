import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

export interface navProps {
  children: React.ReactNode;
  navItem: { title: string; icon: React.ReactNode; onclick: () => void }[];
}

const PageDashboard = ({ children, navItem }: navProps) => {
  const [Active, setActive] = useState(0);

  return (
    <div>
      <nav className="flex w-full rounded-xl shadow-xl box-border  gap-2  border-2">
        {navItem.map((item, index) => (
          <button
            key={index}
            className={`${index === Active && `bg-black text-white rounded-xl`} flex  box-border p-2  gap-2 `}
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
      <main>{children}</main>
    </div>
  );
};

export default PageDashboard;
