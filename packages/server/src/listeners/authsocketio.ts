import cookie from 'cookie';
import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { prisma } from '../context';
import { JwtPayload } from 'jsonwebtoken';
import { Faculty, Student } from '@prisma/client';
import Auth from '../module/Auth/auth';



  export interface CustomSocket extends Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any> {
    student?: Student;
    faculty?: Faculty // The '?' makes the 'user' property optional
   }

async function authenticateSocket(socket: CustomSocket, next: (err?: Error | undefined) => void) {
    try {
      const cookieHeader = socket.request.headers.cookie;
      const cookies = cookie.parse(cookieHeader || '');
      const token = cookies.token;
  
      if (!token) {
        next(new Error('Authentication token is missing'))
      }
  
      const auth = await Auth.veryfyToken(token) as JwtPayload;
  
      if (!auth) {
        next( new Error('Invalid authentication token'));
      }
  
      if (auth.roll === 'USER') {
        const student = await prisma.student.findUnique({ where: { userId: auth.id } });
        if (!student) {
        throw new Error('Student not registered');
        }

        socket.student = student;

      }
  
      if (auth.roll === 'FACULTY') {
        const faculty = await prisma.faculty.findUnique({ where: { id: auth.id } });
        if (!faculty) {
          throw new Error('Faculty not found');
        }

        socket.faculty = faculty;
        
      }
  
      next(); // Proceed to next middleware
    } catch (error:any) {
      console.error('Authentication error:', error.message);
      next(error); // Pass error to next middleware
    }
  }
  


export default authenticateSocket;
