import { useQuery } from '@apollo/client';
import { NextResponse, NextRequest } from 'next/server';
import { AUTH_USER } from './graphql/user/queries';

const auth = async():Promise<boolean>=>{
    
    const {data} = useQuery(AUTH_USER)

    
        if(await data && data.authUser.data){
            return Promise.resolve(true)
        }
        return Promise.resolve(false);
    

}

export default async function middeware(req: NextRequest) {
   

    const isAuthenticated = req.cookies.get('token'); // Check if user is authenticated
    const ppath = ['/Classroom','/Classroom/']
    const authpath = ['/api/login','/api/signup']
    const user = false;

    if (!isAuthenticated && ppath.some((path) => req.nextUrl.pathname.startsWith(path))) {
        return NextResponse.redirect(new URL('/api/login', req.url)); 
        // Redirect unauthorized user trying to access /dashboard
        
    } else if (isAuthenticated &&  authpath.some((path)=>req.nextUrl.pathname.startsWith(path))) {
        return NextResponse.redirect(new URL('/Classroom', req.url)); // Redirect authorized user trying to access /api/login
    }

    return NextResponse.next(); // Continue with the request if no redirection is needed
}

export const config = {
    matcher: '/:path*' // Define the matcher for all paths
};