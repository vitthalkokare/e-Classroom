// "use client";
// import React, { useCallback, useEffect, useRef, useState } from "react";
// import ReactPlayer from "react-player";
// import Chats from "./Chats";
// import { RoomProps, joinStudentProps, useSocket } from "@/app/contexts/socketContext";
// import { useUserContext } from "@/app/contexts/UserContext";
// import JoinedStudent from "./JoinedStudent";



// export interface classProps{
//   status?: string;
//  email: string;
// connid: string
  
// }



// const page = () => {
//   const [FacultyStream, setFacultyStream] = useState<any>(undefined);
//   const [IsLive, setIsLIve] = useState(false);
//   const [chatDrawer, setChatDrawer] = useState({ isDrawer: false, width: 0 });
//   const [JoinStudent,setJoinStudent] = useState<classProps[]>([]);

  
//   const {  } = useUserContext();
  

//   const {socket} = useSocket();

//   var localStream = useRef<ReactPlayer>(null);

//   var hostStream = localStream.current;
//   var locals = document.getElementById("localStream");
//   var audioTracks;
//   var mediaTracks:any;

//   var user_connectionId:any = [];
//   var user_connection:any = [];

//   var rtcMediaSenders: any[] = [];
//   var rtcAudioSenders: any[] = [];


//   var remoteStream:any = [];
//   var audioStream:any = [];


  
// const getRoomStatus = useCallback((data:classProps) => {

//   const ps = JoinStudent.filter((val)=>val.email !== data.email);

//   setJoinStudent([...ps, data]);

  
 

// }, [JoinStudent]);

// useEffect(() => {
//   socket.on("Class:Status", getRoomStatus);

//   return () => {
//     socket.off("Class:Status", getRoomStatus);
//   };
// }, [socket, getRoomStatus]);


// const getJoinData = useCallback((data:classProps)=>{
//   if (data.status === 'success') {
//       setJoinStudent(prevStudents => [...prevStudents,data]);
     
  
//         }
  
//     },[JoinStudent])

// useEffect(() => {
//   socket.on("Join:Status",getJoinData);

//   return () => {
//     socket.off("Join:Status",getJoinData);
//   };
// }, [socket,getJoinData]);


//   const handleJoinRoom = useCallback(async () => {
//     setIsLIve(true);
//     const vStream = await navigator.mediaDevices.getUserMedia({
//       audio: false,
//       video: true,
//     });

//     const aStream = await navigator.mediaDevices.getUserMedia({
//       audio: true,
//       video: false,
//     });

//     setFacultyStream(vStream);
//   }, []);

//   const sdpFunction = useCallback((rtcdata:any,data:RoomProps)=>{
//     socket.emit("sdpProcess",{
//       rtcdata:rtcdata,
//       connectionId:data.connectionId

//     });

//   },[]);





//   async function updateMediaSender(track: any, rtcSenders: any) {
    
//     for( let connid in user_connection) {

//       let connections = user_connection[connid];

//       if(connections && (connections.connectionState === "new" || connections.connectionState === "connecting" || connections.connectionState === "connected")) {
//         if(rtcSenders[connid] && rtcSenders[connid].track){
//           rtcSenders[connid].replaceTrack(track);
//         }else{
//           rtcSenders[connid] = user_connection[connid].addTrack(track);
//         }
//       }

//     }
//   }



  

//  async function createConnection(connId:any){
//     let peer  = new RTCPeerConnection({
//       iceServers:[
//           {
//               urls:[
//                   "stun:stun.l.google.com:19302",
//                   "stun:global.stun.twilio.com:3478"
//               ]
//           }
//       ]
//   });


//   peer.onicecandidate = function(event){

//     if(event.candidate){
//       sdpFunction(JSON.stringify({
//         'icecandidate': event.candidate
//       }),connId);
//     }
//   }



//   peer.onnegotiationneeded = async function(event){

//    await createOffer(connId);

//   }

//   peer.ontrack = function(event){
//     if(!remoteStream[connId]){
//       remoteStream[connId] = new MediaStream();

//     }

//     if(!audioStream[connId]){
//       audioStream[connId] = new MediaStream();
//     }


//     if(event.track.kind === 'video'){
//       remoteStream[connId].getTracks().forEach((t:any)=>{remoteStream[connId].removeTrack(t)})
        
//       remoteStream[connId].addTrack(event.track);
      
//     }
//     else if(event.track.kind === 'audio'){
//       audioStream[connId].getTracks().forEach((t:any)=>{audioStream[connId].removeTrack(t)})
//       audioStream[connId].addTrack(event.track);


//     }

//   }


//   user_connectionId[connId] = connId;
//   user_connection[connId] = connId;

//   updateMediaSender(mediaTracks,rtcMediaSenders);


//   return peer;

//   }


//   async function createOffer(connid:any){

//     var connection = user_connection[connid];
//     var offer = await connection.createOffer();

//     await connection.setLocalDescription(offer);

//     sdpFunction(JSON.stringify({
//       'offer': connection.localDescription
//     }),connid); 
//   }




//   useEffect(()=>{
//     socket.on("sdpProcess",async(data:any)=>{
//      await sdpProcess(data.message,data.form_connid);

//     });

//     return ()=>{
//       socket.off("sdpProcess");
//     }
//   },[socket])
  

//   async function processMedia() {
//     const ss = document.getElementById("localStream");

//     var vStream = null;
//     var aStream = null;
//     try {
//       vStream = await navigator.mediaDevices.getUserMedia({
//         audio: false,
//         video: true,
//       });

//       aStream = await navigator.mediaDevices.getUserMedia({
//         audio: true,
//         video: false,
//       });

//       audioTracks = aStream.getAudioTracks()[0];
//       // @ts-ignore
//       audioTracks.enable = true;
//       updateMediaSender(audioTracks, rtcAudioSenders);

//       mediaTracks = vStream.getVideoTracks()[0];
//       updateMediaSender(mediaTracks, rtcMediaSenders);

//       // @ts-ignore

//       ss.srcObject = new MediaStream([mediaTracks]);

//       setIsLIve(true);
//     } catch (err) {
//       console.log(err);
//     }
//   }


//   async function sdpProcess(message:any,from_connid:any){

//     message = JSON.parse(message);
//     if(message.answer){
//       await user_connection[from_connid].setRemoteDescripion(new RTCSessionDescription(message.answer));
//     }else if(message.offer){
//       if(!user_connection[from_connid]){
//         await createConnection(from_connid);
//       }


//       await user_connection[from_connid].setRemoteDescripion(new RTCSessionDescription(message.offer));
//       var answer = await user_connection[from_connid].createAnser();

//       await user_connection[from_connid].setLocalDescription(answer);

//       sdpFunction(JSON.stringify({'answer': answer}),from_connid);
//     }

//     else if(message.icecandidate){
//       if(!user_connection[from_connid]){
//         await createConnection(from_connid);
//       }


//       try{
//         await user_connection[from_connid].addIceCandidate(message.icecandidate);
//       }catch(error){console.log(error);}


//     }
//   }




  

//   const handleChats = useCallback(() => {
//     setChatDrawer((pre) =>
//       pre.isDrawer === false
//         ? { isDrawer: true, width: 400 }
//         : { isDrawer: false, width: 0 }
//     );
//     console.log(FacultyStream);
    
//   }, [chatDrawer]);

//   return (
//     <main className="flex w-full flex-col gap-2 justify-around bg-red-200 h-screen  relative overflow-hidden items-center  box-border p-2">
//       <button
//         onClick={() => {
//           handleChats();
//         }}
//         className="box-border z-50 fixed right-2 top-4  w-fit p-1 bg-black text-white rounded-xl font-bold"
//       >
//         Live
//       </button>
//       <div
//         className=" overflow-hidden box-border fixed flex z-40  right-2 top-2 rounded-xl transition-all duration-200 "
//         style={{ width: `${chatDrawer.width}px` }}
//       >
//         <Chats />
//       </div>

//       <main className="min-w-[80%] bg-gray-300 sticky top-10  w-full items-center justify-center  box-border flex   p-4">

//           <section className="w-full box-border p-2">
//           {FacultyStream && <ReactPlayer width="500px" height="300px" muted playing url={FacultyStream}/>} 
//         item
//           </section>


//           <section className=" w-[20%] min-w-[200px] box-border p-4 bg-red-300">
//            <JoinedStudent/>
//           </section>

//       </main>

//       {IsLive ? <></> : <></>}
//       <button
//         className="box-border p-2 rounded-xl bg-black text-white font-bold"
//         onClick={() => {
//           handleJoinRoom();
//         }}
//       >
//         Go live
//       </button>
//     </main>
//   );
// };

// export default page;
