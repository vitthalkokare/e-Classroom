import { NextResponse, NextRequest } from 'next/server';
import useAuth from './app/util/useAuth';
import { getSession } from '@auth0/nextjs-auth0';




export default async function middeware(req: NextRequest, res: NextResponse) {

    const isAuthenticated = req.cookies.get('token');
    const user = req.cookies.get('appSession') 
    const ppath = ['/Classroom','/Classroom/']
    const authpath = ['/login','/signup']

    
    
    //  if ((!user)  && ppath.some((path) => req.nextUrl.pathname.startsWith(path))) {
    //     return NextResponse.redirect(new URL('/login', req.url)); 
    // } else if ((user)  &&  authpath.some((path)=>req.nextUrl.pathname.startsWith(path))) {
    //     return NextResponse.redirect(new URL('/Classroom', req.url)); 
    // }
    const ss = NextResponse.next();
    ss.headers.set('authorization','ljslfkdj');


    return NextResponse.next();  
}
 
export const config = {
    matcher: '/Classroom:path*' // Define the matcher for all paths
};