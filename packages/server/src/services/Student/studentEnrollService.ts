import { Prisma } from "@prisma/client";
import { prisma } from "../../context";

import StudentService from "./StudentServices";
import { object } from "zod";

class studentEnrollService {
  static async findSubjectById(uid: string) {
    if (!uid) throw new Error("Something went wrong");

    return await prisma.subject.findMany({
      where: {
        studentId: uid,
      },
    });
  }

  static async EnrollSubject(EnrollInput: any[], uid: string) {
    const student = await StudentService.findStudentById(uid);
    if (!student) throw new Error("Student not Registered");

    const sub = await this.findSubjectById(student.id);
    try {
      for (const [key, value] of Object.entries(EnrollInput)) {
        if (Array.isArray(value)) {
          const item = sub.map((i) => i.title);

          const newarr = value.filter((v) => !item.includes(v.title));

           newarr.map(async (obj)=>{
              if (!obj.price) throw new Error("something went wrong");
              return await prisma.subject.createMany({
                data: [
                  {
                    title: obj.title,
                    price: obj.price,
                    about: obj.about,
                    studentId: student.id,
                    isEnroll: "Pending",
                  },
                ],
  
                skipDuplicates: true,
              });


          })

        }
      }
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          console.error("Unique constraint violation:", err);
          return "A subject with the same title already exists";
        }
      }
      console.error(err);
      return "An error occurred while enrolling in subjects";
    }
  }
}

export default studentEnrollService;
