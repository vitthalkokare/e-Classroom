import useAuth from '@/app/util/useAuth'
import { useUser } from '@auth0/nextjs-auth0/client';
import { RootState, setCard } from '@repo/ui/index';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery } from '@apollo/client';
import { AUTH_USER } from '@/graphql/user/queries';

const userUtil = () => {
    const [Authuser,setAuthuser] = useState()
    const [StudentData,setStudentData] = useState<any | null>();
    const [SubjectData,setSubjectData] = useState<any[]>([]);
    const dispatch = useDispatch();
    const [userroute,setrout] = useState<string>('user')


    const userPCard = useSelector((state:RootState)=>state.AuthCard.isUser)

        const {isAuthenticated,data,user,loading,error} = useAuth()


    useEffect(()=>{
        if(data || user && data?.authUser?.studentData || data?.studentData?.subjects){
            setStudentData(data?.authUser?.studentData);            
            setSubjectData(data?.authUser?.studentData?.subjects);
            setrout(StudentData?.name || 'user')
        }

        if(!SubjectData){

        dispatch(setCard(true));

        }        
    },[data,user,isAuthenticated])

  return {StudentData,SubjectData,userPCard,loading,isAuthenticated,data,user,userroute};
}

export default userUtil;
