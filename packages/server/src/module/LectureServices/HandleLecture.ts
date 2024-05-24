import { prisma } from "../../context";
import SubjectDataServices from "../Subjects/subjectDataServices";



class HandleLecture{

    static async findLectureByRoomName(roomName:string){
        if(roomName == null){
            throw new Error("Invalid room name");
        }
        try{
            const lecture = await prisma.lectures.findUnique({where:{roomName:roomName}});
            if(!lecture){
                return;
            }
            return lecture;
        }catch(error){console.log(error)}
    }


    static async createLecture(data:any){

        const {title,roomName,facultyId,} = data;

        const prelecture = await prisma.lectures.findUnique({where:{roomName:roomName}});

        if(prelecture){
            return prelecture;
        }
        else{

            try{
                const currentLecture = await prisma.lectures.create({
                    data:{
                        title: title,
                        facultyId: facultyId,
                        roomName:roomName,
                        
                        
                       
    
                    }
                });
    
                return currentLecture;
    
    
    
            }catch(err){console.log(err);}
        

        }

        
      


    }

}





export default HandleLecture;