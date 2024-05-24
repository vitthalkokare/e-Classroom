// import { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
// import io, { Socket } from 'socket.io-client';


// export interface RoomProps{
//     email:string;   
//     subjectId:string
//     RoomId:string
//     status:string
//     message:string
//     connectionId:string
//     info:{username:string,email:string,connid:string}
//     classInfo:{semail:string,connid:string,femail:string,socketid:string,username:string}

// }




// export interface joinStatusProps{
//   status:string
//   message:string
// }


// export interface classStatus{

//   JoinStatus:joinStatusProps | undefined;
//   JoinStudent:joinStudentProps[] | undefined;
//   socket:Socket
    
// }


// export interface classProps{
//     status:string
//     message:string
//     classInfo:joinStudentProps[]
  
// }


// export interface joinStudentProps{
//     semail:string,
//     connid:string,
//     femail?:string
//     socketid?:string
//     username:string
// }

// const SocketContext = createContext<classStatus | undefined>(undefined);


// export const SocketProvider = ({children}:{children:ReactNode})=>{
//     const [JoinStudent,setJoinStudent] = useState<joinStudentProps[]>([]);
//     const [JoinStatus,setJoinStatus] = useState<joinStatusProps>();

// const socket = useMemo(()=>io('localhost:8000',{withCredentials:true}),[]);

//     var audioTracks;
//   var mediaTracks:any;

//   var user_connectionId:any = [];
//   var user_connection:any = [];

//   var rtcMediaSenders: any[] = [];
//   var rtcAudioSenders: any[] = [];


//   var remoteStream:any = [];
//   var audioStream:any = [];


// const getRoomStatus = useCallback((data: RoomProps) => {

//   const ps = JoinStudent.filter((val)=>val.semail !== data.classInfo.semail);

//     setJoinStudent([...ps, data.classInfo]);

//   }, [JoinStudent]);

//   useEffect(() => {
//     socket.on("Class:Status", getRoomStatus);

//     return () => {
//       socket.off("Class:Status", getRoomStatus);
//     };
//   }, [socket, getRoomStatus]);


//   const getJoinData = useCallback((data:classProps)=>{
//     const {status,classInfo,message} = data;

    
// if (status === 'success') {
//       console.log("classinfo",classInfo)
//          setJoinStudent(prevStudents =>([...prevStudents,...classInfo]));
//            setJoinStatus({status:data.status,message:data.message});

//           for(let i = 0; i < classInfo?.length; i++){
             
//             createConnection(classInfo[i]?.connid);

//           }

//       }

//   },[JoinStudent]);


//   useEffect(() => {
//     socket.on("Join:Status",getJoinData);

//     return () => {
//       socket.off("Join:Status",getJoinData);
//     };
//   }, [socket,getJoinData]);

//   //   Sdp Function
  
//   const sdpFunction = useCallback((rtcdata:any,data:RoomProps)=>{
//     socket.emit("sdpProcess",{
//       rtcdata:rtcdata,
//       connectionId:data.connectionId

//     });

//   },[]);


// //  Update Media Sender


// async function updateMediaSender(track: any, rtcSenders: any) {
    
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


// // Create Connection

// async function createConnection(connId:any){
//   console.log("hkjh",connId);
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
//       let remotevdeo = document.getElementById(connId);
//       console.log(remotevdeo);
//       // @ts-ignore
//       remotevdeo.srcObject = null;
//       // @ts-ignore
//       remotevdeo.srcObject = remoteStream[connId]
//       // @ts-ignore
//       remotevdeo.load();

      
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



//   // Create offer
  
//   async function createOffer(connid:any){

//     var connection = user_connection[connid];
//     var offer = await connection.createOffer();

//     await connection.setLocalDescription(offer);

//     sdpFunction(JSON.stringify({
//       'offer': connection.localDescription
//     }),connid); 
//   }




//   // socket catching sdpProcess
//   useEffect(()=>{
//     socket.on("sdpProcess",async(data:any)=>{
//      await sdpProcess(data.rtcdata,data.form_connid);

//     });

//     return ()=>{
//       socket.off("sdpProcess");
//     }
//   },[socket])
  



//   // Process Media

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

//     } catch (err) {
//       console.log(err);
//     }
//   }



//   // Sdp Process Funtion

//   async function sdpProcess(sdpdata:any,from_connid:any){

//     sdpdata = JSON.parse(sdpdata);
//     if(sdpdata.answer){
//       await user_connection[from_connid].setRemoteDescripion(new RTCSessionDescription(sdpdata.answer));
//     }else if(sdpdata.offer){
//       if(!user_connection[from_connid]){
//         await createConnection(from_connid);
//       }


//       await user_connection[from_connid].setRemoteDescripion(new RTCSessionDescription(sdpdata.offer));
//       var answer = await user_connection[from_connid].createAnser();

//       await user_connection[from_connid].setLocalDescription(answer);

//       sdpFunction(JSON.stringify({'answer': answer}),from_connid);
//     }

//     else if(sdpdata.icecandidate){
//       if(!user_connection[from_connid]){
//         await createConnection(from_connid);
//       }


//       try{
//         await user_connection[from_connid].addIceCandidate(sdpdata.icecandidate);
//       }catch(error){console.log(error);}


//     }
//   }









//     return (
//         <SocketContext.Provider value={{socket,JoinStatus,JoinStudent}}> 

//             {children}

//         </SocketContext.Provider>
//     )
// }

// export const useSocket = ()=>{
//     const socket = useContext(SocketContext);
//     if(!socket) throw new Error("socketContext must be in socketProvider");
//     return socket;
// }


