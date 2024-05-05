import { Server } from "socket.io";
import authenticateSocket, { CustomSocket } from "./authsocketio";
import SubjectDataServices from "../module/Subjects/subjectDataServices";
import facultySerivces from "../module/Faculty/facultyServices";
import HandleLecture from "../module/LectureServices/HandleLecture";

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

  type roomProps = {socketid:string,email:string | undefined,roomId:string}
  let RoomMember:roomProps[]  = [];
  const socketidToMapEmail = new Map<string, string | undefined>();



 



  io.on("connection", (socket: CustomSocket) => {
    console.log("userjoined", +socket.id);

    if (socket.faculty || socket.student) {

        let eml = socket.faculty?.email || socket.student?.email;
        let nm = socket.faculty?.name || socket.student?.name;
        let snm = socket.faculty?.sirname || socket.student?.sirname;


       

      socket.on("join:Room", async (data) => {
        const { subid } = data;

        const subdata = await SubjectDataServices.findSubjectDataById(subid);
        if (!subdata) {
          console.log("not found");
          io.to(socket.id).emit("connect:Status", {
            status: "failed",
            message: "Could not find subject",
          });
          return;
        }

        io.to(socket.id).emit("connect:Status", {
          status: "success",
          message: "verify Successfully",
        });


        try {
            const RoomName = `${subdata.title + subdata.boardName + subdata.state + subdata.facultyEmail}`;
            const rooms = io.sockets.adapter.rooms;
            const room = rooms.get(RoomName);
            const clecture = await HandleLecture.findLectureByRoomName(RoomName);

            if(!clecture){
                if (room?.has(socket.id)) {
                    return;
                  } else {
                    socket.on("host:Classroom", async (data) => {
                      const { secretKey, email } = data;
                      const currentFaculty =
                        await facultySerivces.getFacultyByEmail(email);
                      if (!currentFaculty) {
                        io.to(socket.id).emit("join:Status", {
                          status: "failed",
                          message: "failed to verify secretKey..",
                        });
                        return;
                      }
                      if (secretKey === currentFaculty.secretKey) {
                        io.to(socket.id).emit("join:Status", {
                          status: "hosted",
                          message: "Room Hosted Successfully..",
                        });
        
                        if (room === undefined) {
                          
                          const da = {title:subdata.title,facultyId:socket.faculty?.id,roomName:RoomName}

                          const clec = await HandleLecture.createLecture(da);

                          if(clec){
                        socket.join(clec.roomName);

                          io.to(socket.id).emit("join:Status", {
                            status: "success",
                            roomId: RoomName,
                            message: "Room Joined successfully",
                          });

                          }

                        } else if (room.size === 1) {
                          socket.join(RoomName);
                          io.to(socket.id).emit("join:Status", {
                            status: "success",
                            roomId: RoomName,
                            message: "Room already joined",
                          });
                        }
                      }
                    });
                  }

            }


            socket.on("send:msg", (message) => {
                io.to(RoomName).emit("get:messages", {
                  message: message,
                  info: { name: `${nm + " " + snm}`, email: eml, socketid: RoomMember },
                });
              });
        
       

         


        } catch (err) {
          console.log(err);
        }
      });

      socket.off("join:room",()=>{})
    


    



      socket.on("join:Classroom",async(data)=>{
        const {RoomId} = await data;

        const clecture = await HandleLecture.findLectureByRoomName(RoomId);

        if(!clecture){
            io.to(socket.id).emit("Join:Status",{status:"failed",message:"Faculty not host Room Yet"});

            return;
        }else{
            socket.join(clecture.roomName);
            io.to(socket.id).emit("Join:Status",{status:"success",message:"Room joined successfully"});
            io.to(clecture.roomName).emit("room:Status",{status:"success",info:{name:`${nm + " " + snm},email:eml`},message:"new Student Joined"});
            return;
        }


      })



    
    }

    






    socket.on("disconnect", () => {
      console.log("user disconnected", {
        email: socket.faculty?.email || socket.student?.email,
      });
    });
  });
}

export default SocketServer;
