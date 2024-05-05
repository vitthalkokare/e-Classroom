import { prisma } from "../../../context";
import AdminSubjectServices from "../../../module/Admin/AdminSubjectServices";
import AdminService from "../../../module/Admin/Adminservice";
import {
  AddNewSubjetData,
  IAddNewSubjetData,
  IAdminRegisterinput,
  IOrginput,
} from "../../schemas/Admin";

export const adminMutationResolvers = {
  Mutation: {
    AddClass: async (_: any, { label }: { label: string }, ctx: any) => {
      const aid = await ctx.auth;
      const admin = await prisma.admin.findFirst({
        where: { email: aid.email },
      });
      if (!admin) throw new Error("not authorized");

      if (aid.roll !== "ADMIN") throw new Error("Not authorized..");
      try {
        await prisma.classroom.create({
          data: {
            label: label,
          },
        });
      } catch (e: any) {
        return e.message;
      }
      return { message: "New Class Added successfuly..!" };
    },

    AddSubjectData: async (
      _: any,
      { input }: { input: IAddNewSubjetData },
      ctx: any
    ) => {
      AddNewSubjetData.parse(input);
      const admin = await ctx.auth;

      if (admin.roll !== "ADMIN") throw new Error("Something went wrong");

      try {
        const newsub = await AdminSubjectServices.AddNewSubject(input);

        return "New Subject Added successful..!";
      } catch (err: any) {
        return err;
      }
    },

    RegisterAdmin: async (
      _: any,
      { input }: { input: IAdminRegisterinput },
      ctx: any
    ) => {
      try {
        await AdminService.AdminRegister(input);

        return { message: "Account Created Successfully.." };
      } catch (e) {
        return e;
      }
    },

    AdminLogin: async (_: any, { input }: { input: IOrginput }, ctx: any) => {
      try {
        const Token = await AdminService.veryfyAdmin(input);

        if (ctx.req.cookies && ctx.req.cookies.token) {
          ctx.res.clearCookie("token");
        }

        await ctx.res.cookie("token", Token);
        const aid = await ctx.auth.id;

        return { message: Token };
      } catch (err: any) {
        return err;
      }
    },

    // Verify Faculy
    verifyFaculty: async (
      _: any,
      { email, secretKey }: { email: string; secretKey: string },
      ctx: any
    ) => {
      const admin = await ctx.auth;

      if (admin.roll !== "ADMIN") throw new Error("Not authorized");

      try {
        if (email === "" || secretKey === "")
          throw new Error("email must be valid");

        const up = await prisma.faculty.update({
          where: { email: email },
          data: { secretKey: secretKey },
        });
        return { message: "Verified Faculty successful..!" };
      } catch (err) {
        return err;
      }
    },
  },
};
