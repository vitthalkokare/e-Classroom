import React from "react";

interface Card1Props {
  limg: string;
  linfo: string;
  rimg: string;
  rinfo: string;
  btn: string;
  cources: string;
}

const Card1: React.FC<Card1Props> = ({
  limg,
  linfo,
  rimg,
  rinfo,
  btn,
  cources,
}) => {
  return (
    <div className="w-[85%] sm:w-full mx-auto mt-5 relative rounded-2xl flex sm:flex-col md:flex-col justify-around   box-border p-2 items-center bg-[#f2f2f2] " style={{boxShadow:'0 27px 20px -19px rgb(122 62 134 / 31%)'}}>
      <div className="flex sm:flex-row   relative box-border items-center p-4 justify-around  h-full md:w-full md:flex-row sm:w-full w-[40%]">
        <span className="w-[40%]  overflow-hidden  ">
          <img src={limg} alt="imgr" />
        </span>

        <div className="w-[50%]  box-border p-4">{linfo}</div>
      </div>

      <span className="absolute top-0 bg-green-500 box-border p-1 rounded-2xl rounded-t-none">
        {cources}
      </span>
      <span className="sm:w-[50%] h-[40px] sm:h-0 md:h-0 md:w-full border-[1px] border-sky-700"></span>
      <button className="absolute bottom-0 bg-orange-500 box-border p-1 rounded-xl">
        {btn}
      </button>

      <div className="flex sm:flex-row    relative box-border items-center p-4 justify-around  h-full md:w-full md:flex-row sm:w-full w-[40%]">
        <div className="w-[50%] box-border p-4">{rinfo}</div>
        <span className="w-[40%]   overflow-hidden ">
          <img src={rimg} alt="imgr" />
        </span>
      </div>
    </div>
  );
};

export default Card1;
