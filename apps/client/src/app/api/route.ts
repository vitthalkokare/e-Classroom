import { getSession } from "@auth0/nextjs-auth0";

export async function GET(){
    const session = await getSession();

    if(!session){
        return new Response(null,{status:401})
    }

    if (session.user) {
        return session.user;
    }
}