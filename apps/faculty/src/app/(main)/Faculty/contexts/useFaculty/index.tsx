import { AUTH_FACULTY } from "@/graphql/Faculty/Queris";
import { useQuery } from "@apollo/client";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import {useDispatch} from 'react-redux'
import { useRouter } from 'next/navigation'
import { fcaultySlice } from '@repo/ui/index'



export interface ClassesProps {
    id?:string
    lectureTime: string;
    title: string;
    standard: string;
    boardName: string;
    fname: string;
    state:string
    facultyEmail: string;
}
export interface  facultyProps extends ClassesProps {

    email: string
}

type facultyCtxProps = {
    allotSubject:ClassesProps[]
    Faculty:boolean | null
    loading:boolean
    facultyData:facultyProps | null
    
};



const facultyContext = createContext<facultyCtxProps | undefined>(undefined);

export const FacultyProvider = ({ children }: { children: ReactNode }) => {
    const [fetchingData, setFetchingData] = useState(false);
    const [allotSubject, setAllotSubject] = useState<ClassesProps[]>([]);
    const [Faculty,setFaculty] = useState<boolean | null>(null);
    const [facultyData,setFacultyData] = useState<facultyProps | null>(null);

    const { data, loading,error, refetch } = useQuery(AUTH_FACULTY);
    const router = useRouter()
    const dispatch = useDispatch();

    useEffect(()=>{
        setFetchingData(true);

        const fetchDataHandler = async () => { 
            
            if(!loading && data.authFaculty !== null){
            setFaculty(true)
            setAllotSubject(data?.authFaculty?.subjectData);
            const {email,state,standard,fname,title,lectureTime,boardName,facultyEmail} = data?.authFaculty
            setFacultyData({email:email,state:state,standard:standard,fname:fname,lectureTime:lectureTime,boardName:boardName,title:title,facultyEmail:facultyEmail});
            dispatch(fcaultySlice.facultyData(data?.authFaculty?.subjectData));

            return data?.subjectData;
            }else{
                setFaculty(false)
                router.push('/login')
                refetch();
            }

            
            
        };

        fetchDataHandler();


        
    },[data,loading]);

    





    const classDataHandler = async () => {
       
    };

    

    return (
        <facultyContext.Provider value={{allotSubject,Faculty ,loading,facultyData}}>
            {children}
        </facultyContext.Provider>
    );
};

export const useFacultyContext = ()=>{

    const facultycontext = useContext(facultyContext);
    if(!facultycontext) throw new Error("Context must be in facultyProvider");
    return facultycontext; 
}
