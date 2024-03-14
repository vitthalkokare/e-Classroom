import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { AUTH_USER } from '@/graphql/user/queries';
import { useUser } from '@auth0/nextjs-auth0/client';
import { CREATE_AUTH_USER } from '@/graphql/user/mutation';
import { NextResponse, NextRequest } from 'next/server';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'



export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  const { data, loading, error } = useQuery(AUTH_USER);
  const {user} = useUser()

  const [createAuth0] = useMutation(CREATE_AUTH_USER,{
    variables:{email:user?.email,sid:user?.org_id,sub:user?.sub}
  })

  useEffect(() => {
    if (data && data.authUser !== null || user) {
      
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
 

  }, [data,user]);


  return {isAuthenticated,loading,error,user,data}
}
