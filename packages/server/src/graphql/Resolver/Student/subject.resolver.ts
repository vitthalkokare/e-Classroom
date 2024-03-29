import { prisma } from "../../../context";
import StudentService from "../../../services/Student/StudentServices";
import subjectEnrollServices from "../../../services/Student/subjectEnrollServices";
import studentEnrollService from "../../../services/Student/subjectEnrollServices";

export const SubjectMutation = {
  Mutation: {
    enrollSubject: async (_: any, { input }: { input: any[] }, ctx: any) => {
      const uid = await ctx.auth;

      if (!uid) throw new Error("Something went wrong");
      
      const stdid = await prisma.student.findUnique({where:{email:uid.email}})
      console.log("sudid:" + stdid)
      if(!stdid) throw new Error("Something went wrong");
      try {
        const sub = await studentEnrollService.findSubjectById(stdid.id);

        const subitem = sub.filter((s) => s.title);

        const newarr = input.filter((i) => !subitem.includes(i.title));

        newarr.map(async (item) => {
          await prisma.subject.createMany({
            data: [
              {
                title: item.title,
                price: item.price,
                about: item.about,
                studentId: stdid.id,
                isEnroll: "Pending",
              },
            ],

            skipDuplicates: true,
          });
        });
      } catch (err: any) {
        return err.message;
      }
      return "Make Payment to Enroll Subject";
    },

    RemoveSubject: async (parent: any, { id }: { id: string }, ctx: any) => {
      const uid = ctx.auth;
      if (!uid) throw new Error("not valid user");

      const student = await StudentService.findStudentById(uid.id);
      if (!student) throw new Error("Student not found");

      try {
        const ss = await studentEnrollService.findSubjectById(student.id);

        let uniqueSubjectIndex = -1;
        ss.some((sub, index) => {
          if (sub.id === id && sub.isEnroll === "Pending") {
            uniqueSubjectIndex = index;
            return true; // Stop iterating after finding the first unique subject
          }
          return false;
        });

        if (uniqueSubjectIndex !== -1) {
          // Delete the unique subject
          await prisma.subject.delete({
            where: { id: ss[uniqueSubjectIndex].id },
          });

          // Remove the subject from the array
          ss.splice(uniqueSubjectIndex, 1);
        }

        return ss; // Return the updated list of subjects
      } catch (err) {
        console.log(err);
        return err;
      }
    },
  },

  Query: {
    EnrolledSubject: async (_: any, args: any, ctx: any) => {
      const uid = await ctx.auth;
      if (!uid) throw new Error("User not Authorized");

      const sid = await StudentService.findStudentById(uid.id);
      if (!sid) throw new Error("Student not Found");

      try {
        const enrolledsubject = await subjectEnrollServices.findSubjectById(
          sid.id
        );
        if (!enrolledsubject) return null;

        return enrolledsubject;
      } catch (err: any) {
        return err.message;
      }
    },
  },
};
