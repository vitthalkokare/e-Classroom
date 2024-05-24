'use client'
import React, { useCallback, useEffect, useState } from "react";
import Chats from "./Chats";
import { useSocket } from "@/app/contexts/socketContext";

const Page = () => {
  const [chatDrawer, setChatDrawer] = useState({ isDrawer: false, width: 0 });
  const { JoinStudent, LocalStream, Stream } = useSocket();

  useEffect(() => {
    const ss = document.getElementById("localStream") as HTMLVideoElement;
    if (ss && LocalStream) {
      ss.srcObject = LocalStream;
    }
  }, [LocalStream]);

  useEffect(() => {
    console.log("loaded",Stream)

    Stream.forEach((stream, index) => {
      const videoElement = document.getElementById(`remoteVideo-${index}`) as HTMLVideoElement;
      if (videoElement && stream) {
        videoElement.srcObject = stream;
        videoElement.load();

      }
    });
  }, [Stream]);

  const handleChats = useCallback(() => {
    setChatDrawer((prev) => ({
      ...prev,
      isDrawer: !prev.isDrawer,
      width: prev.isDrawer ? 0 : 400
    }));
  }, []);

  return (
    <main className="flex w-full flex-col gap-2 justify-around bg-red-200 h-screen relative overflow-hidden items-center box-border p-2">
      <button
        onClick={handleChats}
        className="box-border z-50 fixed right-2 top-4 w-fit p-1 bg-black text-white rounded-xl font-bold"
      >
        Live
      </button>
      <div
        className="overflow-hidden box-border fixed flex z-40 right-2 top-2 rounded-xl transition-all duration-200"
        style={{ width: `${chatDrawer.width}px` }}
      >
        <Chats />
      </div>

      <main className="min-w-[80%] bg-gray-300 sticky top-10 w-full items-center justify-center box-border flex p-4">

        <section className="w-full box-border p-2">
          <video id="localStream" autoPlay></video>
        </section>

        <div className="w-[20%] min-w-[200px] box-border p-4 bg-red-300">
          {JoinStudent && JoinStudent.map((item, index) => (
            <div key={index}>
              <video id={`remoteVideo-${index}`} autoPlay></video>
              <h1>{item.username}</h1>
            </div>
          ))}
        </div>

      </main>


    </main>
  );
};

export default Page;
