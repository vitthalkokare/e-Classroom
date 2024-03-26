import useAuth from '@/app/util/useAuth'
import { AUTH_USER } from '@/graphql/user/queries';
import { useQuery } from '@apollo/client';
import { RootState, setCard } from '@repo/ui/index';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const userUtil = () => {

    const dispatch = useDispatch();


    const ToggleCard = useSelector((state:RootState)=>state.AuthCard.isUser)


        



  return {ToggleCard};
}

export default userUtil;
