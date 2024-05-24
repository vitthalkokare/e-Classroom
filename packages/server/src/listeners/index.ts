import { Server } from "socket.io";
import authenticateSocket, { CustomSocket } from "./authsocketio";
import SubjectDataServices from "../module/Subjects/subjectDataServices";
import HandleLecture from "../module/LectureServices/HandleLecture";
import { prisma } from "../context";

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

  let date = new Date();
  const socketidToMapEmail = new Map<string, string | undefined>();
  const mapRoomnameToEmail = new Map<string | undefined, string | undefined>();

  const userConnection = [];

  io.on("connection", (socket: CustomSocket) => {
    console.log("userjoined", +socket.id);

    const eml = socket.faculty?.email || socket.student?.email;
    const nm = socket.faculty?.name || socket.student?.name;
    const snm = socket.faculty?.sirname || socket.student?.sirname;
    const rooms = io.sockets.adapter.rooms;

    socket.on("Join:Room", async (data) => {
      const { subid, email } = data;
      const subdata = await SubjectDataServices.findSubjectDataById(subid);
      if (!subdata) {
        io.to(socket.id).emit("connect:Status", {
          status: "failed",
          message: "failed to verify subject",
        });

        return;
      }




      const RoomName = `${subdata.state + subdata.boardName + subdata.title + subdata.facultyEmail}:${date.toDateString()}`;
      const clecture = await HandleLecture.findLectureByRoomName(RoomName);
      const room = rooms.get(clecture?.roomName as string);


      if (socket.faculty) {

        const isfaculty = await prisma.faculty.findUnique({where:{email:subdata.facultyEmail}});


        if(!isfaculty){
          return 
        };

        io.to(socket.id).emit("connect:Status", {
          status: "success",
          message: "subject verified",
        });

        const classInfo = clecture?.classroomInfo || [];
        const pre = classInfo.filter((e:any) => e.email !== isfaculty.email);
        pre.push({email:isfaculty.email,connid:socket.id,username:`${isfaculty.name + " " + isfaculty.sirname}`})




        if (clecture && room?.has(socket.id)) {
            socket.join(clecture.roomName);
            io.to(socket.id).emit("Join:Status", {
              status: "success",
              message: "Classroom Joined successfully",
            });
            return;
         
        }

        else{

         
          socket.on("host:Classroom", async (data)=>{
           
            const {secretKey,email} = data;
            console.log("data",JSON.stringify(data));

            if(secretKey === undefined || secretKey !== isfaculty.secretKey){
               io.to(socket.id).emit("Join:Status", {
                status: "failed",
                message: "invalid secretKey",
              });
              return;

            }

            
            
            else if(clecture && !room?.has(socket.id)){
              if(room === undefined){
                console.log("joined")
                socket.join(clecture.roomName);
                io.to(socket.id).emit("Join:Status", {
                  status: "success",
                  message: "Classroom Joined successfully",
                  classInfo:pre
                });
                return await prisma.lectures.update({
                  where:{roomName:clecture.roomName},
                  // @ts-ignore
                  data:{classroomInfo:pre}
                })

              }else if(room?.size === 1){
                socket.join(clecture.roomName);
                io.to(socket.id).emit("Join:Status", {
                  status: "success",
                  message: "Classroom Joined successfully",
                });
                return;
              }


            }
           else{
            if(!clecture){

              try{

                const newlecture = await prisma.lectures.create({
                  data:{title:subdata.title,roomName:RoomName,facultyId:socket.faculty?.id}
                });
  
                if(newlecture && room === undefined){
                  console.log("joined")
                  socket.join(newlecture.roomName);
                  io.to(socket.id).emit("Join:Status", {
                    status: "success",
                    message: "Classroom Joined successfully",
                    classInfo:pre
                  });
                  return await prisma.lectures.update({
                    where:{roomName:newlecture.roomName},
                    // @ts-ignore
                    data:{classroomInfo:pre}
                  })
  
                }else if(room?.size === 1){
                  socket.join(newlecture.roomName);
                  io.to(socket.id).emit("Join:Status", {
                    status: "success",
                    message: "Classroom Joined successfully",
                  });
                  return;
                }




              }catch(error){console.log(error)}


            }
           }

            




          })


        
        
        }



      }
       
        
     


      


      if (socket.student) {

        io.to(socket.id).emit("connect:Status", {
          status: "success",
          message: "subject verified",
        });

        try {
          
          

         

          socket.on("get:RoomId", () => {
            if (!clecture) {
              io.to(socket.id).emit("RoomId:Status", {
                status: "failed",
                message: "Faculty does not host room yet",
              });
              return;
            }

           else if (clecture && room?.has(socket.id)) {
               io.to(socket.id).emit("RoomId:Status", {
                status: "success",
                RoomId: clecture.roomName,
                message: "Room Already Joined",
              });
              return;
            } else {
              io.to(socket.id).emit("RoomId:Status", {
                status: "success",
                RoomId: clecture.roomName,
                message: "got Room Id",
              });
            }
          });

          socket.off("get:RoomId", () => {});

          if (clecture && room?.has(socket.id)) {
            console.log(socket.id)
            socket.join(clecture.roomName);
            io.to(socket.id).emit("Join:Status", {
              status: "success",
              message: "Classroom Join successfully..",
            });
            io.to(clecture.roomName).emit("Class:Status", {
              status: "success",
              message: `${nm + " " + snm} Join Classroom successfully`,
              classInfo: { email: eml,connid:socket.id, username: `${nm + " " + snm}` },
            });
            return;
          } else {


           if(!room?.has(socket.id)){
            socket.on("Join:Classroom", async (data) => {
              const { RoomId } = await data;
              const isenroll = await prisma.subject.findMany({
                where: {
                  subjectDataId: subdata.id,
                  isEnroll: "Success",
                },
              });

              const ss = isenroll.find(
                (val) => subdata.id === val.subjectDataId
              );

              if (ss) {
                const getclecture =
                await HandleLecture.findLectureByRoomName(RoomId);

                if (!getclecture) {
                  io.to(socket.id).emit("Join:Status", {
                    status: "fialed",
                    message: "Faculty Not Host Room Yet..",
                  });
                  return;
                }
                try {
                  const classInfo = getclecture?.classroomInfo || [];
                  const prestudent = classInfo.filter((e:any) => e.email !== eml);
                  prestudent.push({email:eml,connid:socket.id,username:`${nm + " " + snm}`})


                  
                    socket.join(getclecture.roomName);

                    io.to(socket.id).emit("Join:Status", {
                      status: "success",
                      message: "Classroom Join successfully..",
                      classInfo: getclecture.classroomInfo,
                    });

                    
                    io.to(getclecture.roomName).emit("Class:Status", {
                      status: "success",
                      message: `${nm + " " + snm} Join Classroom successfully`,
                      classInfo: {username:`${nm + " " + snm}`,email:eml,connid:socket.id},
                    });

                    return await prisma.lectures.update({
                      where: { roomName: getclecture.roomName },
                      data: {
                        // @ts-ignore
                        classroomInfo: prestudent
                      },
                    });
                  
                
                } catch (e) {
                  console.log(e);
                }
              } else {
                console.log("failed to join room");
              }
            });
           }
           

          }
        } catch (e) {
          console.log(e);
        }
      }

     
      
        socket.on("send:msg", (message) => {
          console.log(message);
          if (RoomName !== null) {
            io.to(RoomName).emit("get:messages", {
              message: message,
              info: { username: `${nm + " " + snm}`, email: eml },
            });
          }
        });
      
    });

    socket.on("sdpProcess", (data) => {
      console.log("hello from sdpProcess")
      console.log("data", data);
      io.to(socket.id).emit("sdpProcess", {
        rtcdata: data.rtcdata,
        from_conid: socket.id,
      });
    });

    socket.on("disconnect", async() => {
      console.log("user disconnected", {
        email: socket.faculty?.email || socket.student?.email,
      });
    });
  });
}

export default SocketServer;
