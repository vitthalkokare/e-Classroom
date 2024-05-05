import { CLASSES_DATA, STUDENT_DATA } from "@/graphql/students/queries";
import { useQuery } from "@apollo/client";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

export interface ClassesProps{
    lectureTime:string
    title:string
    standard:string
    boardName:string
    fname:string
    id:string
    state:string
    facultyEmail:string
  }
  
  export interface CountdownState {
    hours: number;
    minutes: number;
    seconds: number;
  }

  export interface StudentProps{
    name:string
    sirname:string
    gender:string
    phone:string    
    email:string
    state:string
    boardName:string
    standard:string
    city:string
    dob:string
    sid?:string
    

    
  }



type UserCtxProps = {
    classData:ClassesProps[]
    StudentInfo:StudentProps | null
    sloading:boolean
    refetch:()=>void

};



const userContext = createContext<UserCtxProps | undefined>(undefined);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [fetchingData, setFetchingData] = useState(false);
    const [classData, setClassData] = useState<ClassesProps[]>([]);
    const [StudentInfo,setStudentInfo] = useState<StudentProps | null>(null);

    const {data:studentdata,loading:sloading,refetch:srefech} = useQuery(STUDENT_DATA)
    const { data, loading, refetch } = useQuery(CLASSES_DATA);

    

    useEffect(()=>{

        const fetchDataHandler = async () => {           
            const sinfo = await studentdata?.studentData
            if(sinfo){
                setStudentInfo(sinfo);
            }
        };

        fetchDataHandler();

    },[studentdata])

    useEffect(()=>{
        setFetchingData(true);

        const fetchDataHandler = async () => {
            
            const cData = await data?.Classes
            setClassData(cData);
           
        };

        fetchDataHandler();


        
    },[data]);
    

    return (
        <userContext.Provider value={{ classData,StudentInfo,sloading ,refetch}}>
            {children}
        </userContext.Provider>
    );
};

export const useUserContext = ()=>{

    const usercontext = useContext(userContext);
    if(!usercontext) throw new Error("Context must be in userContext property");
    return usercontext;
}
