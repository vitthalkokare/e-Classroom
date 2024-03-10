import { getSession } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0/client';
import { NextRequest, NextResponse } from 'next/server';

export const authorizeUser = async () => {
    const {user,isLoading,error} = useUser();
  try {
    const session = await getSession();
    if (!user) {
        
      return null;
    }
    console.log( user)
    return user;
  } catch (error) {
    console.error('Error authorizing user:', error);
    return null;
  }
}
