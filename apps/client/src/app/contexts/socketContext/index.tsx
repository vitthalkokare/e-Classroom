import { ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import io, { Socket } from 'socket.io-client';

export interface RoomProps {
    email: string;
    subjectId: string;
    RoomId: string;
    status: string;
    message: string;
    connectionId: string;
    info: { username: string; email: string; connid: string };
    classInfo: { email: string; connid: string; username: string };
}

export interface JoinStatusProps {
    status: string;
    message: string;
}

export interface ClassStatus {
    JoinStatus: JoinStatusProps | undefined;
    JoinStudent: JoinStudentProps[] | undefined;
    socket: Socket;
    LocalStream: MediaStream | undefined;
    Stream: MediaStream[];
}

export interface ClassProps {
    status: string;
    message: string;
    classInfo: JoinStudentProps[];
}

export interface JoinStudentProps {
    connid: string;
    email: string;
    username: string;
}

const SocketContext = createContext<ClassStatus | undefined>(undefined);

export const SocketProvider = ({ children }: { children: ReactNode }) => {
    const [JoinStudent, setJoinStudent] = useState<JoinStudentProps[]>([]);
    const [JoinStatus, setJoinStatus] = useState<JoinStatusProps>();
    const [Stream, setStream] = useState<MediaStream[]>([]);
    const [LocalStream, setLocalStream] = useState<MediaStream>();

    const socket = useMemo(() => io('http://localhost:8000', { withCredentials: true }), []);

    const user_connectionId: { [key: string]: string } = {};
    const user_connection: { [key: string]: RTCPeerConnection } = {};
    const rtcMediaSenders: { [key: string]: RTCRtpSender } = {};
    const rtcAudioSenders: { [key: string]: RTCRtpSender } = {};

    const remoteStream: { [key: string]: MediaStream } = {};
    const audioStream: { [key: string]: MediaStream } = {};

    const getRoomStatus = useCallback((data: RoomProps) => {
        setJoinStudent(prevStudents => {
            const updatedStudents = prevStudents.filter(val => val.email !== data.classInfo.email);
            return [...updatedStudents, data.classInfo];
        });
        createConnection(data.classInfo.connid);
    }, []);

    useEffect(() => {
        socket.on("Class:Status", getRoomStatus);
        return () => {
            socket.off("Class:Status", getRoomStatus);
        };
    }, [socket, getRoomStatus]);

    const getJoinData = useCallback((data: ClassProps) => {
        if (data.status === 'success') {
            setJoinStudent(prevStudents => [...prevStudents, ...data.classInfo]);
            setJoinStatus({ status: data.status, message: data.message });
            processMedia();

            for(let i = 0; i < data.classInfo.length;i++){
              createConnection(data.classInfo[i]?.connid as string);
            }
            console.log(data.classInfo);
        }
    }, []);

    useEffect(() => {
        socket.on("Join:Status", getJoinData);
        return () => {
            socket.off("Join:Status", getJoinData);
        };
    }, [socket, getJoinData]);

    const sdpFunction = (rtcdata: any, connId: string) => {
        socket.emit("sdpProcess", {
            rtcdata,
            connectionId: connId
        });
    };

    const updateMediaSender = async (track: MediaStreamTrack, rtcSenders: { [key: string]: RTCRtpSender }) => {
        Object.keys(user_connection).forEach(connId => {
            const connection = user_connection[connId];
            if (connection && (connection.connectionState === "new" || connection.connectionState === "connecting" || connection.connectionState === "connected")) {
                if (rtcSenders[connId] && rtcSenders[connId]?.track) {
                    if (track instanceof MediaStreamTrack) {
                        rtcSenders[connId]?.replaceTrack(track).catch(error => console.error(error));
                    } else {
                        console.error(`Provided track is not a MediaStreamTrack: ${track}`);
                    }
                } else {
                    if (track instanceof MediaStreamTrack) {
                        rtcSenders[connId] = connection.addTrack(track);
                    } else {
                        console.error(`Provided track is not a MediaStreamTrack: ${track}`);
                    }
                }
            }
        });
    };

    const createConnection = useCallback(async (connId: string) => {
      console.log("connid", connId);
        const peer = new RTCPeerConnection({
            iceServers: [
                { urls: 'stun:stun.l.google.com:19302' },
                { urls: 'stun:stun1.l.google.com:19302' },
                { urls: 'stun:stun2.l.google.com:19302' },
                { urls: 'stun:stun3.l.google.com:19302' },
                { urls: 'stun:stun4.l.google.com:19302' }
            ]
        });

        peer.onicecandidate = async (event) => {
            if (event.candidate) {
                sdpFunction(JSON.stringify({ 'icecandidate': event.candidate }), connId);
            }
        };

        peer.onnegotiationneeded = async () => {
            await createOffer(connId);
        };

        peer.ontrack = (event) => {
          console.log("ontrack",connId);
            if (!remoteStream[connId]) remoteStream[connId] = new MediaStream();
            if (!audioStream[connId]) audioStream[connId] = new MediaStream();

            if (event.track) {
                if (event.track.kind === 'video') {

                    remoteStream[connId]?.getTracks().forEach(t => remoteStream[connId]?.removeTrack(t));
                    remoteStream[connId]?.addTrack(event.track);
                    setStream(prevStreams => [...prevStreams.filter(stream => stream.id !== remoteStream[connId]?.id), remoteStream[connId]].filter((stream): stream is MediaStream => stream !== undefined));
                } else if (event.track.kind === 'audio') {
                    audioStream[connId]?.getTracks().forEach(t => audioStream[connId]?.removeTrack(t));
                    audioStream[connId]?.addTrack(event.track);
                }
            }
        };

        user_connectionId[connId] = connId;
        user_connection[connId] = peer;

        

        return peer;
    }, []);

    const createOffer = async (connId: string) => {
        const connection = user_connection[connId];
        if (!connection) return;

        const offer = await connection.createOffer();
        await connection.setLocalDescription(offer);
        sdpFunction(JSON.stringify({ 'offer': connection.localDescription }), connId);
    };

    const sdpProcess = async (sdpdata: any, from_connid: string) => {
        const data = JSON.parse(sdpdata);
        const connection = user_connection[from_connid];

        if (data.answer) {
            await connection?.setRemoteDescription(new RTCSessionDescription(data.answer));
        } else if (data.offer) {
            if (!connection) {
                await createConnection(from_connid);
            }
            await connection?.setRemoteDescription(new RTCSessionDescription(data.offer));
            const answer = await connection?.createAnswer();
            await connection?.setLocalDescription(answer);
            sdpFunction(JSON.stringify({ 'answer': answer }), from_connid);
        } else if (data.icecandidate) {
            if (!connection) {
                await createConnection(from_connid);
            }
            try {
                await connection?.addIceCandidate(data.icecandidate);
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        socket.on("sdpProcess", async (data: any) => {
            await sdpProcess(data.rtcdata, data.from_connid);
        });

        return () => {
            socket.off("sdpProcess");
        };
    }, [socket]);

    const processMedia = async () => {
        try {
            const vStream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
            const aStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

            const audioTrack = aStream.getAudioTracks()[0];
            if (audioTrack) {
                audioTrack.enabled = true;
                updateMediaSender(audioTrack, rtcAudioSenders);
            } else {
                console.error('Audio track is undefined');
            }

            const videoTrack = vStream.getVideoTracks()[0];
            if (videoTrack) {
                updateMediaSender(videoTrack, rtcMediaSenders);
                const localStream = new MediaStream([videoTrack]);
                setLocalStream(localStream);
            } else {
                console.error('Video track is undefined');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <SocketContext.Provider value={{ socket, JoinStatus, JoinStudent, LocalStream, Stream }}>
            {children}
        </SocketContext.Provider>
    );
};



export const useSocket = () => {
    const context = useContext(SocketContext);
    if (!context) throw new Error("SocketContext must be used within a SocketProvider");
    return context;
};
