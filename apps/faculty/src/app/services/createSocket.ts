

import io from 'socket.io-client';

const createSocket = (socketUrl:string)=>{

    const socket  = io(socketUrl,{
        withCredentials: true,
        extraHeaders:{}
    });

    return socket;
}

export default createSocket;