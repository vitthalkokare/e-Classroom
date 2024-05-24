"use client";
import React, { useCallback, useEffect, useState } from "react";
import Countdown from "../home/Countdown";
import { useUserContext } from "@/app/contexts/UserContext";
import { RoomProps, useSocket } from "@/app/contexts/socketContext";
import { toast } from "react-hot-toast";
import { commonUi } from "@repo/ui/index";
import { useRouter } from "next/navigation";
import { useCommonContext } from "@/app/contexts/common";

const SocketioRoom = () => {
  const [femail, setfemal] = useState("");
  const [fdata, setfdata] = useState<any[]>([]);
  const [RoomId, setRoomID] = useState<string>();
  const [isId, setIsId] = useState(false);
  const [RoomStatus, setRoomStatus] = useState<string>("");
  const [isConnect, setIsConnect] = useState(false);
  const router = useRouter();
  const { filteredArray, startIN } = Countdown();

  const { classData } = useUserContext();

  const {LiveDriver} = useCommonContext();
  const {socket,JoinStatus} = useSocket();
  const date = new Date();
  let roomName: string;
  const Room = new Map();

  const handleJoinRoom = useCallback(() => {
    const subid = filteredArray[0]?.id;
    socket.emit("Join:Room", { subid });
  }, [filteredArray]);

  const getConnectStatus = useCallback((data: RoomProps) => {
    if (data.status === "success") {
      toast.success(data.message);
      setIsConnect(true);
    } else if (data.status === "failed") {
      toast.error(data.message);
      return window.location.reload();
    }
  }, []);

  useEffect(() => {
    socket.on("connect:Status", getConnectStatus);

    return () => {
      socket.off("connect:Status", getConnectStatus);
    };
  }, [getConnectStatus, socket]);

  const getRoomId = useCallback(() => {
    console.log("get" + "git", "fuck");
    return socket.emit("get:RoomId");
  },[socket]);

  

  useEffect(() => {
    socket.on("RoomId:Status", (data: RoomProps) => {
      if (data.status === "Joined") {
        toast.success(data.message);
        return router.push("Classroom/user/live");
      } else if (data.status === "failed") {

        toast.error(data.message);
        return router.refresh();
        
      } else if (data.status === "success") {
        setRoomID(data.RoomId);
        setIsId(true);
      }
    });

    return () => {
      socket.off("RoomId:Status");
    };
  }, [socket]);

  const joinClassroom = useCallback(() => {
    socket.emit("Join:Classroom", {
      RoomId: RoomId,
      facultyemil: filteredArray[0]?.facultyEmail,
    });
  }, [RoomId]);


  useEffect(()=>{
    

    if(JoinStatus?.status === 'success'){
      toast.success(JoinStatus.message);
       
      return router.push("Classroom/user/live");

    }
    else if(JoinStatus?.status === "failed"){
      toast.error(JoinStatus.message);
      return; 
    }


  },[JoinStatus,socket])

  

  return (
    <main className="  h-fit w-full  justify-center items-center rounded-xl bg-purple-500 sticky top-0 box-border  p-2">
      {filteredArray?.length > 0 ? (
        <>
          <div className="box-border min-w-[300px] relative p-4 mx-auto w-[80%] bg-white rounded-lg flex flex-col justify-around items-center">
            <span className="absolute text-transparent right-0 top-0 box-border px-2 bg-red-500 rounded-full transition-all duration-200 ">
              .
            </span>
            <span className="w-full box-border flex flex-col p-2 justify-around">
              <span className="flex  w-fit gap-2 font-semibold text-lg justify-between box-border p-2  absolute left-0 top-0 ">
                <span>{date.toDateString()}</span>
                <span>{filteredArray[0]?.lectureTime}</span>
              </span>
              <span className="flex box-border p-3 w-full justify-around">
                <span className="flex gap-2 text-2xl flex-col font-semibold">
                  {" "}
                  <h1>{filteredArray[0]?.state}</h1>
                  <h2>{filteredArray[0]?.boardName}</h2>
                </span>

                <span className="flex flex-col">
                  <span className="text-3xl font-bold">
                    {filteredArray[0]?.standard}
                  </span>
                  <span className="text-2xl">{filteredArray[0]?.title}</span>
                </span>
              </span>
            </span>
            <span className="w-full  flex justify-around box-border">
              <span>{filteredArray[0]?.fname}</span>
              <span className="">{filteredArray[0]?.facultyEmail}</span>
            </span>

          
          </div>

          {LiveDriver === 600 && 
          <>
           {!isConnect && (
              <button
                onClick={() => {
                  handleJoinRoom();
                }}
                className="box-border relative left-[48%]  flex items-center justify-center my-2 p-2 rounded-lg bg-green-300 font-bold hover:scale-110 hover:shadow-xl"
              >
                Connect
              </button>
            )}
          {isConnect && (
            <div className="w-[80%] rounded-lg h-[50px] items-center  flex justify-evenly  mx-auto box-border  p-1">
              <input
                className="w-full h-full"
                type="text"
                readOnly
                value={RoomId}
                placeholder="Get Room Id"
              />
              {isId ? (
                <commonUi.Button
                  label="JoinRoom"
                  btnCss="whitespace-nowrap h-full bg-green-500"
                  onclick={() => {
                    joinClassroom();
                  }}
                ></commonUi.Button>
              ) : (
                <commonUi.Button
                  label="Get RoomID"
                  btnCss="whitespace-nowrap h-full"
                  onclick={() => {
                    getRoomId();
                  }}
                ></commonUi.Button>
              )}
            </div>
          )}
          
          </>}
 
        </>
      ) : (
        <section className="box-border relative p-3 mx-auto w-[80%] bg-white rounded-lg flex overflow-x-scroll scr  items-center">
          {startIN?.length > 0 ? (
            <>
              {" "}
              {startIN?.map((item, index) => (
                <div
                  key={index}
                  className="box-border bg-white relative flex-col sm:w-full min-w-[300px]   shadow-lg p-3 w-[50%] shrink-0 flex justify-around items-center"
                >
                  <span className="flex justify-evenly w-full ">
                    <span>{date.toLocaleDateString()}</span>
                    <span>{item.lectureTime}</span>
                  </span>

                  <span className="flex justify-around w-full">
                    <span className="flex box-border p-2 flex-col">
                      <span>{item.state}</span>
                      <span>{item.boardName}</span>
                    </span>
                    <span className="flex box-border flex-col">
                      <span>{item.standard}</span>
                      <span>{item.title}</span>
                    </span>
                  </span>

                  <span className="w-full  flex justify-around box-border">
                    <span>{item.fname}</span>
                    <span className="">{item.facultyEmail}</span>
                  </span>
                </div>
              ))}
            </>
          ) : (
            <>Completed Today</>
          )}
        </section>
      )}
    </main>
  );
};

export default SocketioRoom;
