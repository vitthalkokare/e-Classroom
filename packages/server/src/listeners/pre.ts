// import { Server } from "socket.io";
// import authenticateSocket, { CustomSocket } from "./authsocketio";
// import SubjectDataServices from "../module/Subjects/subjectDataServices";
// import facultySerivces from "../module/Faculty/facultyServices";

// async function SocketServer(httpServer: any) {
//   const io = new Server(httpServer, {
//     cors: {
//       origin: ["http://localhost:3000", "http://localhost:3001"], // Specify the origin you want to allow
//       methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"], // Specify the methods you want to allow
//       allowedHeaders: ["Content-Type", "Authorization"], // Specify the headers you want to allow
//       credentials: true, // Allow credentials
//     },
//   });

//   io.use(authenticateSocket);

//   type roomProps = {socketid:string,email:string | undefined,roomId:string}
//   let RoomMember:roomProps[]  = [];
//   const socketidToMapEmail = new Map<string, string | undefined>();

//   io.on("connection", (socket: CustomSocket) => {
//     console.log("userjoined", +socket.id);

//     if (socket.faculty || socket.student) {
     


//       socket.on("join:Room", async (data) => {
//         const { subid } = data;

//         const subdata = await SubjectDataServices.findSubjectDataById(subid);
//         if (!subdata) {
//           console.log("not found");
//           io.to(socket.id).emit("connect:Status", {
//             status: "failed",
//             message: "Could not find subject",
//           });
//           return;
//         }

//         io.to(socket.id).emit("connect:Status", {
//           status: "success",
//           message: "verify Successfully",
//         });

//         try {
//           const RoomName = `${subdata.title + subdata.boardName + subdata.state + subdata.facultyEmail}`;
//           const rooms = io.sockets.adapter.rooms;
//           const room = rooms.get(RoomName);


//           let eml = socket.faculty?.email || socket.student?.email;
//           let nm = socket.faculty?.name || socket.student?.name;
//           let snm = socket.faculty?.sirname || socket.student?.sirname;
          
//           socketidToMapEmail.set(socket.id,eml)

//           if (room?.has(socket.id)) {
//             return;
//           } else {
//             socket.on("host:Classroom", async (data) => {
//               const { secretKey, email } = data;
//               const currentFaculty =
//                 await facultySerivces.getFacultyByEmail(email);
//               if (!currentFaculty) {
//                 io.to(socket.id).emit("join:Status", {
//                   status: "failed",
//                   message: "failed to verify secretKey..",
//                 });
//                 return;
//               }
//               if (secretKey === currentFaculty.secretKey) {
//                 io.to(socket.id).emit("join:Status", {
//                   status: "hosted",
//                   message: "Room Hosted Successfully..",
//                 });

//                 if (room === undefined) {
//                   socket.join(RoomName);
//                   io.to(socket.id).emit("join:Status", {
//                     status: "success",
//                     roomId: RoomName,
//                     message: "Room Joined successfully",
//                   });
//                 } else if (room.size === 1) {
//                   socket.join(RoomName);
//                   io.to(socket.id).emit("join:Status", {
//                     status: "success",
//                     roomId: RoomName,
//                     message: "Room already joined",
//                   });
//                 }
//               }
//             });
//           }

//           socket.on("send:msg", (message) => {
//             console.log(rooms)
//             io.to(RoomName).emit("get:messages", {
//               message: message,
//               info: { name: `${nm + " " + snm}`, email: eml, socketid: RoomMember },
//             });
//           });




//           if (room === undefined) {
//             io.to(socket.id).emit("get:RoomId", {
//               status: "failed",
//               message: "Faculty not Host Room Yet..!",
//             });
//             return;
//           }

//           if (room.has(socket.id)) {
//             io.to(socket.id).emit("get:RoomId",{status:"Joined",message:"Room already joined"});

//             return;
//           } else {
//             io.to(socket.id).emit("get:RoomId", {
//               status: "success",
//               RoomId: RoomName,
//             });
//           }

//           socket.on("join:Classroom",async(data)=>{
//             const {RoomId} = await data;
//             if(RoomId === RoomName && socketidToMapEmail.get(socket.id) === eml){
//               console.log(socketidToMapEmail.get(socket.id)); 
//               socket.join(RoomId);
//               io.to(socket.id).emit("Join:Status",{status:"success",message:"Room joined successfully"});
//               io.to(RoomName).emit("room:Status",{status:"success",info:{name:`${nm + " " + snm},email:eml`},message:"new Student Joined"});
//               return;

//             }else{
//               io.to(socket.id).emit("Join:Status",{status:"failed",message:"Faculty not host Room Yet"});

//               return;
//             }


//           })
         







//         } catch (err) {
//           console.log(err);
//         }
//       });
//     }

//     socket.on("disconnect", () => {
//       console.log("user disconnected", {
//         email: socket.faculty?.email || socket.student?.email,
//       });
//     });
//   });
// }

// export default SocketServer;
