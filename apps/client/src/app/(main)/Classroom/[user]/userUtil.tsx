import useAuth from '@/app/util/useAuth'
import { RootState, setCard } from '@repo/ui/index';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const userUtil = () => {
    const {data,user,loading,error} = useAuth();
    const [StudentData,setStudentData] = useState<any | null>();
    const [SubjectData,setSubjectData] = useState<any | null>();
    const dispatch = useDispatch();
    const userPCard = useSelector((state:RootState)=>state.AuthCard.isUser)


    useEffect(()=>{
        if(data && data?.authUser?.studentData){
            setStudentData(data.authUser.studentData);
        }
        if(data && data?.authUser?.studentData?.Subjects){
            setSubjectData(data.authUser.studentData?.Subjects);
        }
        if(!StudentData || !SubjectData){
            dispatch(setCard(true));
        }
    },[data,user])
  return {StudentData,SubjectData,userPCard,loading}
}

export default userUtil
