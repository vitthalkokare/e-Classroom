import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { AUTH_USER } from '@/graphql/user/queries';
import { useUser } from '@auth0/nextjs-auth0/client';
import { RootState, setCard } from '@repo/ui/index';
import { useDispatch, useSelector } from 'react-redux';



export default function useAuth() {
  const [StudentInfo,setStudentInfo] = useState<any[] | null>(null);
    const [SubjectData,setSubjectData] = useState<any[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userRoute,setRoute] = useState<string>('user')

  const {user} = useUser()

  const { data, loading, error } = useQuery(AUTH_USER,{
    variables:{email:user?.email}
  });

  const isAuthCard = useSelector((state:RootState)=> state.AuthCard.isUser)
  const dispatch  = useDispatch();
  

  useEffect(() => {
    
    

    async function studetnDatahadnler(){


     try{
      if(data && data?.authUser !== null || user){
        setIsAuthenticated(true)
        const sdata =  await  data?.authUser?.studentData
        setStudentInfo(sdata)
        const name = sdata.name
        if(name){
          setRoute(name)
        }
        
        const subdata = await sdata?.subjects
        setSubjectData(subdata)



      }
      else{
        setIsAuthenticated(false)
        setStudentInfo(StudentInfo)
        setSubjectData(SubjectData)
      }


     }catch(err){
      console.log(err)
      

     }

  }

  studetnDatahadnler();

  }, [data,user,StudentInfo,SubjectData]);



  return {isAuthenticated,loading,error,user,data,StudentInfo,SubjectData,userRoute,isAuthCard}
}
