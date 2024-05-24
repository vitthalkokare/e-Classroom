

class PeerServices {
    public peer:any;
    constructor(){
        if(!this.peer){
            this.peer = new RTCPeerConnection({
                iceServers:[
                    {
                        urls:[
                            "stun:stun.l.google.com:19302",
                            "stun:global.stun.twilio.com:3478"
                        ]
                    }
                ]
            });
        }
    }


    public async createConnection(){

        if(this.peer){

            this.peer.oniceCandidate = function(event:any){


            }
        }
    }



}


export default PeerServices;