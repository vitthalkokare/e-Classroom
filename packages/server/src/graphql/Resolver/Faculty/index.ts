import { prisma } from "../../../context"


export const FacultyMutationResolver = {

    createFaculty:async(_:any,{email,password}:{email:string,password:string})=>{

        try{
            const result = prisma.faculty.create({
                data:{
                    email,
                    password,
                    name:'manager',
                    sirname:'manager',
                    salt:'lkfjs',
                    vision:"klfj",
                    exp:'4rwj'

                }
            })



        }catch(err){
                return err
        }

    }
}