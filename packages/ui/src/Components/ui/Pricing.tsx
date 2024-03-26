import React from "react";

const Pricing = () => {
  return (
    <div className="w-[90%] drop-shadow-2xl shadow-2xl sm:w-[100%] md:w-[100%] flex flex-col  sm:flex-col mx-auto rounded-3xl justify-center   relative items-center    box-border ">
        <div className=" box-border text-white p-4 text-4xl">
            <h1 className="">We've got a plan
            That's perfect for you.</h1>
        </div>
      <div className="flex w-[80%]    scr md:w-full  sm:w-full overflow-x-scroll p-4   items-center relative   box-border ">
        <div className="flex   w-[50vw] sm:shrink-0  overflow-hidden bg-white flex-col justify-between sm:w-[80%] relative  drop-shadow-lg  rounded-r-none  box-border p-4 h-[400px] sm:h-[350px] rounded-2xl">
          <span>
            <h1 className="box-border bg-black text-yellow-400 p-2 absolute top-0 left-0 w-full">Monthly Billing</h1><br />
            <h1 className="w-full text-center bg-yellow-300 rounded-xl box-border p-1 ">Afordable</h1>
          </span>
          <div className="flex flex-col text-black justify-center items-center box-border p-2">
          <span className="mx-5 text-4xl"><strong>$10</strong></span>
            <strong className="text-1xl">
              per user
              <br />Per user
            </strong>
          </div>
          <div className="flex flex-col">
            <button className="bg-yellow-300  box-border p-2 rounded-xl">
              <strong>Enroll Subjecs</strong>
            </button>
            <button className="bg-green-400 box-border p-2 rounded-xl m-1">
              
              <strong>Get Started</strong>
            </button>
          </div>
        </div>


        {/* Popular plan */}
        <div className="flex   w-[50vw] sm:shrink-0  overflow-hidden bg-black flex-col justify-between sm:w-[80%] relative  drop-shadow-lg  box-border p-4 h-[450px] sm:h-[400px] rounded-2xl">
          <span>
            <h1 className="box-border bg-black text-yellow-400 p-2 absolute top-0 left-0 w-full">Yearly Billing</h1><br />
            <h1 className="w-full text-center bg-yellow-300 rounded-xl box-border p-1 ">Popular</h1>
          </span>
          <div className="flex flex-col text-white justify-center items-center box-border p-2">
          <span className="mx-5 text-4xl"><strong>$10</strong></span>
            <strong className="text-1xl">
              per user
              <br />Per user
            </strong>
          </div>
          <div className="flex flex-col">
            <button className="bg-yellow-300  box-border p-2 rounded-xl">
              <strong>Enroll Subjecs</strong>
            </button>
            <button className="bg-green-400 box-border p-2 rounded-xl m-1">
              
              <strong>Get Started</strong>
            </button>
          </div>
        </div>
        {/* Yearly plans */}
        <div className="flex   w-[50vw] sm:shrink-0  overflow-hidden bg-white flex-col justify-between sm:w-[80%] relative  drop-shadow-lg border-3 rounded-l-none  box-border p-4 h-[400px] sm:h-[350px] rounded-2xl">
          <span>
            <h1 className="box-border bg-black text-yellow-400 p-2 absolute top-0 left-0 w-full">Monthly Billing</h1><br />
            <h1 className="w-full text-center bg-yellow-300 rounded-xl box-border p-1 ">Afordable</h1>
          </span>
          <div className="flex flex-col text-black justify-center items-center box-border p-2">
          <span className="mx-5 text-4xl"><strong>$10</strong></span>
            <strong className="text-1xl">
              per user
              <br />Per user
            </strong>
          </div>
          <div className="flex flex-col">
            <button className="bg-yellow-300  box-border p-2 rounded-xl">
              <strong>Enroll Subjecs</strong>
            </button>
            <button className="bg-green-400 box-border p-2 rounded-xl m-1">
              
              <strong>Get Started</strong>
            </button>
          </div>
        </div>
        
       
      </div>
    </div>
  );
};

export default Pricing;
