import { Prisma, User } from "@prisma/client";

export interface IStudentServices{
    saveUser(user:Prisma.UserCreateInput):Promise<User>;

    // saveStudent(student:Prisma.StudentCreateInput):Promise<Student>
    // studentFindeById(id:Scalar['ID']): Promise <Student | null>
    // findAllStudent():Promise <Array<Student | null>>
    // updateStudent(student:Prisma.StudentUpdateInput,id:Scalar['ID']): Promise <Student>
    // deleteStudent(id:Scalar['ID']): Promise <Student>;


}