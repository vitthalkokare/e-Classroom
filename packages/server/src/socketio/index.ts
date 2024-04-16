
import {Server,Socket} from 'socket.io'
import authenticateSocket, { CustomSocket } from './authsocketio';
import { Faculty } from '@prisma/client';





function socketIoServer(httpServer:any){
    const io = new Server(httpServer,{
        cors:{
          origin: ['http://localhost:3000','http://localhost:3001'], // Specify the origin you want to allow
          methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'], // Specify the methods you want to allow
          allowedHeaders: ['Content-Type', 'Authorization'], // Specify the headers you want to allow
          credentials: true, // Allow credentials
        }
      });


      io.use(authenticateSocket)
      
    
      

  const facultyRooms: Record<string, Set<string>> = {};

  
  


  io.on('connection',(socket:CustomSocket)=>{
    

  if (socket.faculty) {

    const facultyRoom = `xyz`;
    socket.on('JoinRoom',(RoomName)=>{

      console.log("student:" + socket.student);

      const rooms = io.sockets.adapter.rooms;
      console.log(rooms);
      const room = rooms.get(RoomName);
      console.log(room);
      

      if(room === undefined) {
          socket.join(RoomName);
          socket.emit("Create");

          console.log("room created successfully");

      }
      else if(room.size === 1){     
        socket.join(RoomName);

        console.log("room already exists");
      }

      
      
    });

    

    

    // Handle faculty client leave room event
    socket.on('leaveRoom', () => {
      // Leave the faculty room
      socket.leave(facultyRoom) 
      console.log("rooms left");
      

    });

    // Handle disconnect for faculty member
   
  } 

  socket.on("JoinRoom", function(args){

    if(socket.student){
        console.log(args);
        const rooms = io.sockets.adapter.rooms;
       
        const room = rooms.get("JoinRoom");
  
        if(room) {
          
            socket.join(args);
            

        }
        
        
  
    }
  
  });

  socket.on("Ready", function(){

    socket.on('broadcastMessage', (message) => {
      if (socket.faculty || socket.student) {
          socket.broadcast.to("JoinRoom").emit("Ready");
      }
    });

  })

  socket.on("candidate",function(){
    socket.broadcast.to("JoinRoom").emit("candidate");
  })
  socket.on("offer",function(){
    socket.broadcast.to("JoinRoom").emit("offer");
  })
  socket.on("answer",function(){
    socket.broadcast.to("JoinRoom").emit("asnwer");
  })

 
 

  


  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});





}



async function SocketServer(httpServer:any){
  const io = new Server(httpServer,{
    cors:{
      origin: ['http://localhost:3000','http://localhost:3001'], // Specify the origin you want to allow
      methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'], // Specify the methods you want to allow
      allowedHeaders: ['Content-Type', 'Authorization'], // Specify the headers you want to allow
      credentials: true, // Allow credentials
    }
  });


  io.on('connection', (socket) => {
    console.log('userjoined', + socket.id);
    socket.on('join', (roomName) => {
      socket.join(roomName);
      socket.to(roomName).emit('message', `${socket.id} has joined the room ${roomName}`);

      socket.on('message', (message) => {
        io.to("he").emit('message', `${socket.id}: ${message}`);
        console.log(message);
      });

      socket.on('disconnect', () => {
        socket.to(roomName).emit('message', `${socket.id} has left the room ${roomName}`);
      });
    });
  });


}

export default SocketServer; 