"use client";
import {  SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import subData from "./subData";

import Img from '../../../../public/pictures/Landingpage/teachericon.jpg'
import error from "next/error";


interface Subobj {
  Subject: {
    label: string;
    title: string;
    desc: string;
  }[];

  Teachers:{
    name: string;
    experience: string;
    vision: string;
    photo: string;
    social: string;
    
  }[];

  State:{
    Board: string;
  }[];
}

const STD: React.FC = () => {
  const [std, setStd] = useState("");
  const [op, setop] = useState([
    { label: "1Std", val: "1" },
    { label: "2ndd", val: "2" },
    { label: "3rd", val: "3" },
    { label: "4th", val: "4" },
    { label: "5th", val: "5" },
    { label: "6th", val: "6" },
    { label: "7th", val: "7" },
    { label: "8th", val: "8" },
    { label: "9th", val: "9" },
    { label: "10th", val: "10" },
  ]);

  const optionss = [
  {value:"maharashtra", label: "Maharashtra"},
  {value:"Delhi",label:"Delhi"},
  {value:"mumbai",label:"mumbai"},
  {value:"hydrabad",label:"hydrabad"}
]

const [sState,setsState] = useState('');
const [Board,setBoard] = useState('');
const [slideIndex, setSlideIndex] = useState(0);


  const [sub, setSub] = useState<Subobj>({
    Subject: [
      { label: "English Language  and Literature", title: "English", desc: "Description" },
      { label: "Mathematics", title: "English", desc: "Description" },
      { label: "Science", title: "English", desc: "Description" },
      { label: "Physics", title: "English", desc: "Description" },
      { label: "Computer Studies", title: "English", desc: "Description" },
      { label: "Art", title: "English", desc: "Description" },
      { label: "Music", title: "English", desc: "Description" },

    ],

    Teachers:[
        {name:'lod sharma',experience:'4yr',vision:'',photo:'',social:''},
        {name:'mkk sharma',experience:'4yr',vision:'',photo:'',social:''},
        {name:'dogg sharma',experience:'4yr',vision:'',photo:'',social:''},
        {name:'akash sharma',experience:'4yr',vision:'',photo:'',social:''},


    ],
    State:[]
  });


  const showSlides = () => {
    let g = sub.Teachers.length;
    setSlideIndex((prevIndex) => (prevIndex + 1) % g ); // Assuming 3 slides in the example
  };

  useEffect(() => {
    const interval = setInterval(() => {
     showSlides();
      
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    

  }, []);


  function changeHandler(event: React.ChangeEvent<HTMLSelectElement>): void {
    const dd = event.target.value;
    const cdata = subData(dd);
    setSub({Subject:cdata.a1,Teachers:cdata.c2 , State:[]})
  }

 function onSelected(event:any){
      let c = event.target.value
      setsState(c);
 }

  
 

 

  return (
    <>
 {error && error instanceof Error && (
        <div style={{ color: 'red', marginTop: '10px' }}>
          Error: {error.message}
        </div>
      )}

      <div className=" relative  md:h-fit    s-colo  flex flex-col justify-evenly m-auto  items-center box-border w-full  rounded-2xl sm:w-[95%]   md:flex-col sm:flex-col sm:justify-start">
        <div className=" sm:w-full   relative   rounded-2xl flex justify-center flex-col items-center ">
         <div className="flex flex-col relative  justify-center items-center">
         <div className="border-2  relative -left-96 top-20 sm:top-0 md:top-0 sm:relative md:relative sm:left-0 md:left-0  flex  box-border p-2 rounded-xl drop-shadow-xl">
            <select name="" id="" onChange={onSelected}  className="mx-2 box-border outline-none p-3 rounded-xl bg-white">
              <option value="" >Select State</option>

              {
              optionss.map((item,index)=>(
                <option key={index} value={item.value}>{item.label}</option>
              ))
            }
            </select>

            <select name=""  onChange={(e)=>{setBoard(e.target.value)}} onClick={(e)=>{try{if(!sState){console.log('fuck')}}catch{
              console.error('error');
            }}}    className="bg-white box-border rounded-xl outline-none p-3" id="">
              <option value="" className="" >Board</option>
              {
                optionss.map((item,index)=>(
                  <option key={index}>{item.label}</option>
                ))
              }

              
            </select>
            
          </div>
          <div className="bg-white w-[60%] shadow-2xl border-1 border mb-2  box-border px-2 py-1  flex items-center justify-center rounded-3xl sm:w-[200px] sm:p-3">

            <select
              onChange={changeHandler}
              disabled={!Board}
              className="w-[50%] bg-white rounded-3xl outline-none border-0 text-2xl "
            >
              
              {op.map((item, index) => (
                <option key={index} className="" value={item.val}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
         </div>
          <div className=" max-h-[400px] w-[360px]   scr overflow-y-scroll rounded-3xl box-border p-2 mx-2  sm:w-full">
            {sub.Subject.map((item, index) => (
              <div
                key={index}
                className="hover:scale-105 justify-between s-color transition-all duration-200 transform cursor-pointer  items-center box-border p-2  rounded-2xl m-1 flex"
              >
                <div className="">{item?.label}</div>
                <div className="">
                  {item?.label} <br />
                  {item?.desc}
                </div>
                <button className="h-btn box-border p-2">Enoroll</button>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty */}
        <section className="scr box-border  relative -left-80 md:left-0 sm:left-0  flex w-full p-2 sm:w-full md:w-full  rounded-2xl  overflow-hidden">
                {
                    sub.Teachers.map((item,index)=>(
                        
                        <div key={index} className={`mySlides fade ${slideIndex === index ? 'block' : 'hidden'} hover:scale-105 drop-shadow-xl sm:w-full md:w-full w-full mx-2 justify-center items-center overflow-hidden shrink-0   relative   sm:h-[180px]  bg-white   flex    box-border  rounded-3xl sm:flex-row `}>
         
                        <Image src={Img} alt="Picture of the author"  className="w-[140px] h-[140px] "  style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% " }} />
            
                            <div className="relative justify-between flex flex-col">
                            <span className="">
                                <h1>name:{item.name}</h1>
                                <h3>Education: {item.experience}</h3>
                               
                            </span>
                            <span className="">
                                <strong>Vision:</strong>
                                <h2>
                                    some thing went wrong do you really 
                                    agree with thisquestion
                                    {item.vision}
                                </h2>
                            </span>
                            </div>
                    </div>
                    ))
                }
        </section>
      </div>
    </>
  );
};

export default STD;
