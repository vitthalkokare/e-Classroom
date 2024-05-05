import { Server } from "socket.io";
import authenticateSocket, { CustomSocket } from "./authsocketio";
import SubjectDataServices from "../module/Subjects/subjectDataServices";
import facultySerivces from "../module/Faculty/facultyServices";
import HandleLecture from "../module/LectureServices/HandleLecture";
import { title } from "process";

async function SocketServer(httpServer: any) {
  const io = new Server(httpServer, {
    cors: {
      origin: ["http://localhost:3000", "http://localhost:3001"], // Specify the origin you want to allow
      methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"], // Specify the methods you want to allow
      allowedHeaders: ["Content-Type", "Authorization"], // Specify the headers you want to allow
      credentials: true, // Allow credentials
    },
  });

  io.use(authenticateSocket);

  io.on('connection', (socket:CustomSocket)=>{



    socket.on("Join:Status",async(data)=>{
      if(socket.faculty){
        const {subid} = data;
        const subdata = await SubjectDataServices.findSubjectDataById(subid);
        if(!subdata){
          throw new Error("Subject not Allotted");
        }
        try{
          io.to(socket.id).emit("connect:Status",{status:'success',message:"subject verified"});

          socket.on("host:Classroom",async(data)=>{
            const {email,sekretKey} = data
            const isfaculty = await facultySerivces.getFacultyByEmail(email);
            if(!isfaculty){
              throw new Error("invalid email")
            }

            if(isfaculty.sekretKey === sekretKey){
              const RoomName = `${subdata.title + subdata.boardName + subdata.state + subdata.facultyEmail}`;
              const rooms = io.sockets.adapter.rooms;
              const room = rooms.get(RoomName);

              const clecture = await HandleLecture.findLectureByRoomName(RoomName);
              const lectureData = {title:subdata.title,subid:subdata.id,facultyId:socket.faculty?.id,roomName:RoomName}
              if(!clecture){

                const newLecture = await HandleLecture.createLecture(lectureData);

                if(room === undefined && newLecture){
                  socket.join(newLecture.roomName);
                  socket.to(socket.id).emit("Join:Status",{status:"success",message:"Classroom Joined successfully"});
                  return;

                }else if(room?.size === 1 && newLecture){
                  socket.join(newLecture?.roomName);
                  socket.to(socket.id).emit("Join:Status",{status:"Joined",message:"Classroom already josted"});

                }

                
              }


            }

            


          });


        }catch(e){}

        



      }

    })






    socket.on("disconnect", () => {
        console.log("user disconnected", {
          email: socket.faculty?.email || socket.student?.email,
        });

    });


  })



}


export default SocketServer;
  // if (socket.faculty || socket.student) {
     
    //   let eml = socket.faculty?.email || socket.student?.email;
    //   let nm = socket.faculty?.name || socket.student?.name;
    //   let snm = socket.faculty?.sirname || socket.student?.sirname;

    //   socket.on("join:Room", async (data) => {
    //     const { subid } = data;

    //     const subdata = await SubjectDataServices.findSubjectDataById(subid);
    //     if (!subdata) {
    //       console.log("not found");
    //       io.to(socket.id).emit("connect:Status", {
    //         status: "failed",
    //         message: "Could not find subject",
    //       });
    //       return;
    //     }

    //     io.to(socket.id).emit("connect:Status", {
    //       status: "success",
    //       message: "verify Successfully",
    //     });


    //     try {
    //       const RoomName = `${subdata.title + subdata.boardName + subdata.state + subdata.facultyEmail}`;
    //       const rooms = io.sockets.adapter.rooms;
    //       const room = rooms.get(RoomName);


          
          
    //       socketidToMapEmail.set(socket.id,eml)

    //       if (room?.has(socket.id)) {
    //         return;
    //       } else {
    //         socket.on("host:Classroom", async (data) => {
    //           const { secretKey, email } = data;
    //           const currentFaculty =
    //             await facultySerivces.getFacultyByEmail(email);
    //           if (!currentFaculty) {
    //             io.to(socket.id).emit("join:Status", {
    //               status: "failed",
    //               message: "failed to verify secretKey..",
    //             });
    //             return;
    //           }
    //           if (secretKey === currentFaculty.secretKey) {
    //             io.to(socket.id).emit("join:Status", {
    //               status: "hosted",
    //               message: "Room Hosted Successfully..",
    //             });

    //             const clecture = await HandleLecture.findLectureByRoomName(RoomName);


    //             if (room === undefined && !clecture) {
    //               socket.join(RoomName);

    //               mapRoomnameToEmail.set(eml,RoomName)
    //               io.to(socket.id).emit("join:Status", {
    //                 status: "success",
    //                 roomId: RoomName,
    //                 message: "Room Joined successfully",
    //               });
    //               return await HandleLecture.createLecture({title:subdata.title,facultyId:socket.faculty?.id,roomName:RoomName});
    //             } else if (room?.size === 1) {
    //               socket.join(RoomName);
    //               io.to(socket.id).emit("join:Status", {
    //                 status: "success",
    //                 roomId: RoomName,
    //                 message: "Room already joined",
    //               });
    //             }
    //           }
    //         });
    //       }


    //       socket.on("send:msg", (message) => {
    //         console.log(rooms)
    //         io.to(RoomName).emit("get:messages", {
    //           message: message,
    //           info: { name: `${nm + " " + snm}`, email: eml, socketid: RoomMember },
    //         });
    //       });


          
    //      if(socket.student){
    //       if (room === undefined) {
    //         console.log("undefinded");
    //           io.to(socket.id).emit("get:RoomId", {
    //             status: "failed",
    //             message: "Faculty not Host Room Yet..!",
    //           });
    //         }
    //         else if (room.has(socket.id)) {
    //           io.to(socket.id).emit("get:RoomId",{status:"Joined",message:"Room already joined"});
    //           console.log("main");            
              
              
    //         }
    //         else{
    //           io.to(socket.id).emit("get:RoomId", {
    //             status: "success",
    //             RoomId: RoomName,
    //           });
    //           console.log("else if");
    //         }
  
            
             
            
    //      }

    //     } catch (err) {
    //       console.log(err);
    //     }
    //   });


    //   socket.on("join:Classroom",async(data)=>{
    //     const {RoomId,facultyemail} = await data;
    //     const romi = await HandleLecture.findLectureByRoomName(RoomId);
    //     if(!romi){
    //       io.to(socket.id).emit("Join:Status",{status:"failed",message:"Faculty not host Room Yet"});
    //       return;
    //     }
    //     try{

    //       socket.join(romi.roomName);
    //       console.log("Joined");
    //       io.to(socket.id).emit("Join:Status",{status:"success",message:"Room joined successfully"});
    //       io.to("RoomName").emit("room:Status",{status:"success",info:{name:`${nm + " " + snm},email:eml`},message:"new Student Joined"});
    //       return;

    //     }catch(e){console.log(e);}
  
  
    //   })
     

    //   socket.off("join:room",()=>{})
    // }