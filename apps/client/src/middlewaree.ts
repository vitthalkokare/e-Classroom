import { NextResponse, NextRequest } from 'next/server';
import useAuth from './app/util/useAuth';
import { getSession } from '@auth0/nextjs-auth0';




export default async function middeware(req: NextRequest) {
    // @ts-ignore
    const { user } = await getSession();

    const isAuthenticated = req.cookies.get('token');
    const userr = req.cookies.get('appSession') 
    const ppath = ['/Classroom','/Classroom/']
    const authpath = ['/api/login','/api/signup']
    
    try{
     if ((!isAuthenticated || !user)  && ppath.some((path) => req.nextUrl.pathname.startsWith(path))) {
        return NextResponse.redirect(new URL('/api/login', req.url)); 
    } else if ((isAuthenticated || user)  &&  authpath.some((path)=>req.nextUrl.pathname.startsWith(path))) {
        return NextResponse.redirect(new URL('/Classroom', req.url)); 
    }

    }catch(err){
        return err;
    }
    return NextResponse.next(); // Continue with the request if no redirection is needed
}

export const config = {
    matcher: '/Classroom:path*' // Define the matcher for all paths
};