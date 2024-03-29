import { SubjectData } from "@prisma/client";
import { prisma } from "../../../context";
import UserService from "../../../services/User/UserService";
import JWT from "jsonwebtoken";

const userQueryResolver = {
  Query: {
    subjectData: async (_: any, args: any, ctx: any) => {
      try {
        const data = await prisma.subjectData.findMany();
        return data;
      } catch (err) {
        return err;
      }
    },

    currentUser: async (_: any, args: string, ctx: any) => {
      const uid = ctx.auth;

      if (!uid) throw new Error("User not authenticated");

      return true;
    },

    authUser: async (_: any, args: any, ctx: any) => {
      const auth0user = await ctx.auth;
      if (!auth0user.email) {
        const uuid = await UserService.findUserByEmail(args.email);
        if (!uuid) return;
        try {
          const auth0token = JWT.sign(
            { email: uuid.email, sid: uuid.sid },
            "superman"
          );
          if (ctx.req.cookies && ctx.req.cookies.token) {
            ctx.res.clearCookie("token");
          }
          ctx.res.cookie("token", auth0token);
        } catch (err) {
          return err;
        }
      }

      try {
        const uid = await ctx.auth;

        const userData = await UserService.findUserByEmail(uid.email);

        if (!userData) return null;

        return userData;
      } catch (error) {
        return error;
      }
    },
  },
};

export default userQueryResolver;
