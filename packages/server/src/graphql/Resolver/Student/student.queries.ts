import { prisma } from "../../../context";

export const studetnQueryResolver = {
  Query: {
    EnrolledSubject: async (p: any, args: any, ctx: any) => {},

    Classes: async (p: any, args: any, ctx: any) => {
      const uid = await ctx.auth;
      if (!uid) throw new Error("not authenticated");

      const student = await prisma.student.findUnique({
        where: { userId: uid.id },
      });
      if(!student) throw new Error("student not Registered");
      if (student) {
        try {
          const subject = await prisma.subject.findMany({
            where: {
              studentId: student.id,
              isEnroll: "Success",
            },
          });
          const sub = subject.flatMap((i) => i.subjectDataId);

          const subd = prisma.subjectData.findMany({
            where: {
              id: {
                in: sub,
              },
            },
          });
          return subd;
        } catch (err) {
          return err;
        }
      }
    },

    studentData:async(P:any,args:any,ctx:any)=>{
      const authuser = await ctx.auth

      if(!authuser){
        throw new Error("not authenticated");
      }
      try{
        const student = await prisma.student.findUnique({where:{userId: authuser.id}});
        if(!student){
          throw new Error("Student not Registered");
        }
        return student;


      }catch(err){
        console.log(err);
      }


    }
  }
};
