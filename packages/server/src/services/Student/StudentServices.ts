import { Prisma, Student } from "@prisma/client";
import { prisma } from "../../context";
import {
  IstudentInputSchema,
  studentInputSchema,
} from "../../graphql/schemas/StudentSchemas";
import UserService from "../User/UserService";

class StudentService {
  static async findStudentById(uid: string) {
    if (!uid) throw new Error("not authorized");
    try {
      const student = await prisma.student.findUnique({
        where: {
          userId: uid,
        },
      });
      return student;
    } catch (err: any) {
      return err;
    }
  }
  static async findStudentByEmail(email: string) {
    if (!email) throw new Error("not a valid email");
    try {
      const student = await prisma.student.findUnique({
        where: {
          email,
        },
      });
      return student;
    } catch (err) {
      return err;
    }
  }

  static async RegisterStudent(studentInput: IstudentInputSchema, uid: any) {
    const {
      name,
      email,
      sirname,
      gender,
      standard,
      state,
      city,
      boardName,
      sid,
      phone,
      classlabel,
      dob,
    } = studentInput;

    const user = await UserService.findUserByEmail(uid.email);

    if (!user) {
      try {
        return await prisma.user.create({
          data: {
            email: email.toLowerCase(),
            sid,
            salt: "",
            role: "AUTH0",
          },
        });
      } catch (err) {
        return err;
      }
    }

    const student = await this.findStudentByEmail(uid.email);
    if (student) return student;

    if (!student) {
      try {
        const date = new Date(dob);
        const newdob = date.toISOString();
        const newstudent = await prisma.student.create({
          data: {
            email: uid.email.toLowerCase(),
            name,
            sirname,
            gender,
            standard,
            state,
            phone,
            city,
            dob: newdob,
            boardName: boardName.toUpperCase(),
            classlabel: standard,
            userId: uid.id,
          },
        });
        return newstudent;
      } catch (err: any) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
          if (err.code === "P2002") {
            return "A Student with the same Phone already exists";
          }
        }
        console.error(err);
        return "An error occurred while enrolling in subjects";
      }
    }
  }
}

export default StudentService;
