import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { RoomProps, useSocket } from "../../contexts/socketContext";
import { useFacultyContext } from "../../contexts/useFaculty";


interface messageProps {
  msg?: string
  info?:{username:string,email:string}
}


const Chats = () => {
  const [Chats, setChats] = useState(true);
  const [Messages, setMessages] = useState<messageProps[]>([]);
  const [Students, setStudents] = useState(false);
  const [Msg,setMsg] = useState<string>();
  const [currentStudent,setCurrentStudent] = useState(false)

  const {socket,JoinStudent} = useSocket();
  const {facultyData} = useFacultyContext();

  const facultyemail = useMemo(()=>facultyData?.email,[]);

  const chatscroll = useRef<HTMLDivElement | null>(null);




  const getMessages = useCallback((data:RoomProps)=>{
    console.log("data" + JSON.stringify(data));
    setMessages((pre)=>[...pre,{msg:data.message,info:{email:data.info.email,username:data.info.username}}])
  },[]);

  useEffect(()=>{
    socket.on("get:messages",getMessages);

    return ()=>{
        socket.off("get:messages");
    }
  },[getMessages, socket]);
  
  const handleChats = useCallback(() => {
    setChats((pre) => !pre);
  }, [Chats]);

  const handleSendMessage = ()=>{
    if(Msg !== undefined && Msg !== ''){
     socket.emit("send:msg",Msg);
     setMsg('');

    }
    console.log(JoinStudent?.length);

     return;
  }
  

  useEffect(()=>{
    const c = chatscroll.current;
    c?.scrollBy({
        top:200,
        behavior:"smooth"
    })

  },[handleSendMessage])


  return (
    <main className="sticky dark:bg-darkmodes1 dark:shadow-xl bg-slate-100  top-0 w-full min-h-[500px] z-50 box-border p-1">
    <nav className="flex bg-slate-700 rounded-xl h-fit justify-evenly w-full box-border p-1">
      <button
        onClick={() => {

          setChats(true);
        }}
        className={`${Chats ? 'bg-white font-bold  rounded-xl text-black' : ' text-white'} w-full text-xl font-semibold box-border p-1`}
      >
        Chats
      </button>
      <button
        onClick={() => {
          setChats(false);
        }}
        className={`w-full ${!Chats && 'bg-white font-bold rounded-xl text-black'} box-border font-semibold text-xl p-1`}
      >
        Students
      </button>
    </nav>

    <section>
      {Chats ? (
        <>
          <main className="w-full h-[500px] relative box-border p-2 flex flex-col justify-between">
            {Messages.length > 0 ? (
              <div  ref={chatscroll} className="h-[500px] relative  rounded-xl box-border p-2 m-1 flex-col gap-2  flex overflow-y-scroll  scr w-full ">
                  {Messages.map((item,index)=>(
                       <span key={index} className={`w-full  relative flex  box-border   ${item.info?.email === facultyemail ? ` justify-end` : `justify-normal`}`}>
                          
                          <span className={`bg-yellow-100 box-border rounded-xl p-2`}>{item.msg}</span>
                      </span>
                  ))}
              </div>
            ) : (
              <>No Mossages Yet</>
            )}

            <div className="w-full flex box-border p-1">
              <input type="text" required value={Msg} onChange={(e)=>{setMsg(e.target.value)}} className="w-full text-gray-500 text-lg font-semibold active:outline-lime-200 hover:scale-105 border-black border-[2px]" />
              <button onClick={()=>{handleSendMessage()}} className="box-border p-2  bg-slate-800 hover:scale-105 text-white font-bold">send</button>
            </div>
          </main>
        </>
      ) : (
        <section className="h-[500px] w-full flex flex-col box-border p-2">
          {JoinStudent && JoinStudent.length > 0 ? (<>
            {JoinStudent?.map((item,index)=>(
            <div key={index} className="w-full my-1 rounded-xl bg-slate-400 flex justify-around box-border p-2">
              <span>img</span>
              <span className="flex flex-col gap-2">
                <span>{item?.username}user</span>

              </span>
            </div>
          ))}
          </>):(<h1>No Students Join Yet</h1>)}
        </section>
      )}
    </section>
  </main>
  );
};

export default Chats;
