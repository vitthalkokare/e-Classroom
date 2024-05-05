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

      const uid = await ctx.auth;
      console.log(uid);
      if(!uid) throw new Error("not authenticated");

      const student = await prisma.student.findUnique({where:{email:uid.email}});
      if(!student){
        throw new Error("student not Registered");
        
      }
      
      try{
        return student;
      }catch(error){
        console.log(error);
      }

    }
  }
};
