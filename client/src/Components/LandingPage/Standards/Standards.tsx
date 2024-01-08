"use client";
import React, { useEffect, useRef } from "react";

interface StandardsItem {
  title: string;
  content: string;
  icon: React.ReactNode;
}
interface StandardProps {
  Item: StandardsItem[];
}

const Standards: React.FC<StandardProps> = () => {
  const Standard: StandardsItem[] = [
    { title: "1St to 5Th Class", icon: "ol", content: "Best" },
    { title: "1St to 5Th Class", icon: "ol", content: "Best" },
    { title: "1St to 5Th Class", icon: "ol", content: "Best" },
    { title: "1St to 5Th Class", icon: "ol", content: "Best" },
  ];
  const ScrollItem1 = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const Scrollcontainer = ScrollItem1.current;

  //   if (Scrollcontainer) {
  //     let LeftScrollWidth = 0;

  //     const ScrollDive = () => {
  //       const Divs = Scrollcontainer.querySelectorAll(".scroll-div");

  //       const DivsWidth = Divs[0]?.clientWidth;

  //       if (DivsWidth) {
  //         LeftScrollWidth += DivsWidth;

  //         if (LeftScrollWidth >= Scrollcontainer.scrollWidth - Scrollcontainer.clientWidth) {
  //           LeftScrollWidth = 0;
  //         }

  //         Scrollcontainer.scrollTo({
  //           left: LeftScrollWidth,
  //           behavior: "smooth",
  //         });


  //       }


       
  //     };
                  
  //     const ScrollInterval = setInterval(ScrollDive, 2000);

  //     return  ()=>{
  //       clearInterval(ScrollInterval);
        
  //     }

  //   }
  // }, []);

  useEffect(() => {
    const Scrollcontainer = ScrollItem1.current;
  
    if (Scrollcontainer) {
      let LeftScrollWidth = 0;
      let scrollInterval: NodeJS.Timeout;
  
      const ScrollDive = () => {
        const Divs = Scrollcontainer.querySelectorAll('.scroll-div');
  
        const DivsWidth = (Divs[0] as HTMLElement)?.clientWidth;
  
        if (DivsWidth) {
          LeftScrollWidth += DivsWidth;
  
          if (LeftScrollWidth >= Scrollcontainer.scrollWidth - Scrollcontainer.clientWidth) {
            LeftScrollWidth = 0;
          }
  
          Scrollcontainer.scrollTo({
            left: LeftScrollWidth,
            behavior: 'smooth',
          });
        }
      };
  
      const startScroll = () => {
        scrollInterval = setInterval(ScrollDive, 2000);
      };
  
      startScroll(); // Start auto-scroll initially
  
      // Add event listeners to pause auto-scroll when hovering
      const Divs = Scrollcontainer.querySelectorAll('.scroll-div'); // Move the declaration inside the scope
      Divs.forEach((div: Element) => {
        // Explicitly define the type of 'div' parameter as Element
  
        div.addEventListener('mouseenter', () => {
          clearInterval(scrollInterval);
        });
  
        div.addEventListener('mouseleave', () => {
          startScroll(); // Resume auto-scroll when leaving
        });
      });
  
      return () => {
        // Remove event listeners
        Divs.forEach((div: Element) => {
          // Explicitly define the type of 'div' parameter as Element
  
          div.removeEventListener('mouseenter', () => {
            clearInterval(scrollInterval);
          });
  
          div.removeEventListener('mouseleave', () => {
            startScroll(); // Resume auto-scroll when leaving
          });
        });
  
        clearInterval(scrollInterval);
      };
    }
  }, []);
  
  
  
  
  



  return (
    <div className="flex flex-col items-center  gap-2 box-border">
      <strong>Classes</strong>
      <div ref={ScrollItem1} className="rounded-2xl flex w-[95vw] relative z-20 box-border  items-center sm:w-[400px] h-[140px] scr overflow-x-scroll ">
        {/* <span className='sm:w-[270px] w-[40vw] text-center box-border flex justify-center items-center rounded-[30px] fit mx-1 bg-pink-800 h-[100px] shrink-0'>1</span> */}
        {Standard.map((item, index) => (
          <span
            key={index}
            className="sm:w-[350px] scroll-div w-[40vw] text-center box-border flex justify-around items-center rounded-[10px] fit mx-1  border-[1px]  border-[#f2d2d2] h-[70px] shrink-0"
          >
            <span>{item.icon}</span>
            <div className="flex flex-col">
              <span>{item.title}</span>
              <span>{item.content}</span>
            </div>
          </span>
        ))}
      </div>

      <section className="">
        <strong>Classes</strong>
        <div className="rounded-2xl flex shadow-xl w-[80vw] box-border p-4 items-center justify-center sm:w-[350px] h-[250px] scr overflow-scroll">
          <div className="w-[290px] text-center box-border flex justify-center items-center rounded-[30px] fit mx-1 bg-purple-300 h-[220px] shrink-0">
            1
          </div>

          <div className="w-[290px] text-center box-border flex justify-center items-center rounded-[30px]  mx-1 bg-purple-300 h-[220px] shrink-0">
            1
          </div>
          <div className="w-[290px] text-center box-border flex justify-center items-center rounded-[30px]  mx-1 bg-purple-300 h-[220px] shrink-0">
            1
          </div>
          <div className="w-[290px] text-center box-border flex justify-center items-center rounded-[30px]  mx-1 bg-purple-300 h-[220px] shrink-0">
            1
          </div>
          <div className="w-[290px] text-center box-border flex justify-center items-center rounded-[30px]  mx-1 bg-purple-300 h-[220px] shrink-0">
            1
          </div>
          <div className="w-[290px] text-center box-border flex justify-center items-center rounded-[30px]  mx-1 bg-purple-300 h-[220px] shrink-0">
            1
          </div>
          <div className="w-[290px] text-center box-border flex justify-center items-center rounded-[30px]  mx-1 bg-purple-300 h-[220px] shrink-0">
            1
          </div>
          <div className="w-[290px] text-center box-border flex justify-center items-center rounded-[30px]  mx-1 bg-purple-300 h-[220px] shrink-0">
            1
          </div>
          <div className="w-[290px] text-center box-border flex justify-center items-center rounded-[30px]  mx-1 bg-purple-300 h-[220px] shrink-0">
            1
          </div>
          <div className="w-[290px] text-center box-border flex justify-center items-center rounded-[30px]  mx-1 bg-purple-300 h-[220px] shrink-0">
            1
          </div>
          <div className="w-[290px] text-center box-border flex justify-center items-center rounded-[30px]  mx-1 bg-purple-300 h-[220px] shrink-0">
            1
          </div>
        </div>
      </section>
    </div>
  );
};

export default Standards;
