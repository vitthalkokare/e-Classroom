import { Server } from "socket.io";
import authenticateSocket, { CustomSocket } from "./authsocketio";
import SubjectDataServices from "../module/Subjects/subjectDataServices";
import facultySerivces from "../module/Faculty/facultyServices";
import HandleLecture from "../module/LectureServices/HandleLecture";
import { title } from "process";
import { prisma } from "../context";
import { error } from "console";

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
  const mapRoomnameToEmail = new Map<string | undefined, string | undefined>();
  io.on("connection", (socket: CustomSocket) => {
    console.log("userjoined", +socket.id);

    const eml = socket.faculty?.email || socket.student?.email;
    const nm = socket.faculty?.name || socket.student?.name;
    const snm = socket.faculty?.sirname || socket.student?.sirname;
    const rooms = io.sockets.adapter.rooms;



    socket.on("Join:Room",async(data)=>{
      const {subid,email} = data;
      const subdata = await SubjectDataServices.findSubjectDataById(subid);
      if(!subdata){
        io.to(socket.id).emit("connect:Status",{status:'failed',message:"failed to verify subject"});

        throw new Error("Subject not Allotted");

      }
      const RoomName = `${subdata.title + subdata.boardName + subdata.state + subdata.facultyEmail}`;
      const clecture = await HandleLecture.findLectureByRoomName(RoomName);
      const room = rooms.get(clecture?.roomName as string);
      


      
    io.to(socket.id).emit("connect:Status",{status:'success',message:"subject verified"});

      if(socket.faculty){
        
       
        
        


         
          
          if(subdata && subdata.facultyEmail === socket.faculty.email){
           

            socket.on("host:Classroom",async(data)=>{
              const {email,sekretKey} = await data
              console.log(data);
  
              if(sekretKey === undefined){
                console.log("sekjkl")
                throw new Error("secretKey not found");
              }
              console.log("after sekret key")
  
              const isfaculty = await facultySerivces.getFacultyByEmail(email);

              if(!isfaculty){
                console.log("fkljklfjskl")
                throw new Error("invalid email")
              }
  
             
              if(isfaculty.sekretKey !== sekretKey){
                
                  console.log("sljklfsjkljdklj key")
               throw new Error("sekretKey not found");
  
  
              }
              else{
                
               console.log("elseklfjs")
              }
  
  
  
  
  
            
  
              
  
  
            });
            














          }else{
            console.log("sucke")
           
           return  io.to(socket.id).emit("Join:Status",{status:"failed",message:"Failed to verify faculty allot subject"});


          }
         


       

        



      }


      if(socket.student){

        try{

          socket.on("get:RoomId",()=>{
            if(room?.has(socket.id)){
              io.to(socket.id).emit("RoomId:Status",{status:"Joined",message:"Room already Joined"});


            }
            else if(!clecture){
              io.to(socket.id).emit("RoomId:Status",{status:"failed",message:"Faculty does not host room yet"});
            }
            else{
              io.to(socket.id).emit("RoomId:Status",{status:"success",RoomId:clecture.roomName,message:"got Room Id"});


            }

            


          });

          socket.off("get:RoomId",()=>{});






          socket.on("Join:Classroom",async(data)=>{
            const {RoomId} = await data
            console.log(data);
            const isenroll = await prisma.subject.findMany({
              where:{
                subjectDataId:subdata.id,
                isEnroll:'Success'
                      
              
              }
            });

            const ss = isenroll.find(val=>subdata.id === val.subjectDataId);

            if(ss){
              const clecture = await HandleLecture.findLectureByRoomName(RoomId);
              if(!clecture){
                io.to(socket.id).emit("Join:Status",{status:'fialed', message:"Faculty Not Host Room Yet.."});
                return;
              }
              try{
                if(room !== undefined && room.has(socket.id)){
                  return;
                }
                socket.join(clecture.roomName);
                io.to(socket.id).emit("Join:Status",{status:'success', message:"Classroom Join successfully.."});
                io.to(clecture.roomName).emit("Class:Status",{status:'success', message:`${nm + " " + snm} Join Classroom successfully`,info:{email:eml,fullname:`${nm + " " + snm}`}});
                return await prisma.lectures.update({
                  where:{roomName:clecture.roomName},
                  data:{studentId:{push:socket.student?.id}}
                });

              }catch(e){console.log(e)}
  
            }else{
              console.log("failed to join room");
              
            }
          });



          
         

        }catch(e){console.log(e)}
       
        
      }


     
      if(room?.has(socket.id)){
        return;
      }else{
        socket.on("send:msg",(message)=>{
  
          if(clecture){
            io.to(clecture.roomName).emit("get:messages", {
              message: message,
              info:{name:`${nm + " " + snm}`,email:eml}
            });
          }
    
        });
      }




     

    });

   
   

    socket.on("disconnect", () => {
      console.log("user disconnected", {
        
        email: socket.faculty?.email || socket.student?.email,
      });



    });

    
  });
}

export default SocketServer;
