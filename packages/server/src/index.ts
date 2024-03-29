import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cookieParser from "cookie-parser";
import UserService from "./services/User/UserService";
import mergeResolver from "./graphql/Resolver";
import mergeTypeDef from "./graphql/typeDefs/index";
import bodyParser from "body-parser";
import { Clerk } from "@clerk/backend";
import { PrismaClient } from "@prisma/client";

async function myServer() {
  const clerk = Clerk({
    secretKey: "sk_test_RtH4Q4pHMaeJlnBimwyMFzwDC9ID9zPuO4d4SXd3C8",
  });

  const app = express();
  const PORT = Number(process.env.PORT) || 8000;
  const httpServer = http.createServer(app)
  const prisma = new PrismaClient();

  dotenv.config();

  app.use(cors({
    origin:['http://localhost:3000','http://192.168.43.139:3000'],
    credentials:true,
  }));

  app.use(express.json());
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: false }));

  const gqlServer = new ApolloServer({
    typeDefs: mergeTypeDef,
    resolvers: mergeResolver,

    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await gqlServer.start();

  app.use(
    "/api/graphql",

    expressMiddleware(gqlServer, {
      context: async ({ req, res }) => {
        const token = req.cookies.token;

        const user =  UserService.veryfyUserToken(token as string);

        return { req, res, user , prisma };
      },  
    })
  );

 await new Promise<void>((resolve) => httpServer.listen(PORT, resolve));
    console.log(`listening on ${PORT}`);
  
}

myServer();
