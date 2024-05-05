import { ReactNode, createContext, useContext, useMemo } from "react";
import io, { Socket } from 'socket.io-client';


export interface RoomProps{
    email:string;   
    subjectId:string
    RoomId:string
    status:string
    message:string
    info:{fullname:string,email:string}
}


const SocketContext = createContext<Socket | undefined>(undefined);




export const SocketProvider = ({children}:{children:ReactNode})=>{

const socket = useMemo(()=>io('localhost:8000',{withCredentials:true}),[]);
    return (
        <SocketContext.Provider value={socket}> 

            {children}

        </SocketContext.Provider>
    )
}

export const useSocket = ()=>{
    const socket = useContext(SocketContext);
    if(!socket) throw new Error("socketContext must be in socketProvider");
    return socket;
}


