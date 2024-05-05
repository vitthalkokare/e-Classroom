import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cookieParser from "cookie-parser";
import mergeResolver from "./graphql/Resolver";
import mergeTypeDef from "./graphql/typeDefs/index";
import { PrismaClient } from "@prisma/client";
import SocketServer from "./listeners";
import Auth from "./module/Auth/auth";

async function myServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;
  const httpServer = http.createServer(app);

  const prisma = new PrismaClient();

  dotenv.config();

  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: false }));

  const gqlServer = new ApolloServer({
    typeDefs: mergeTypeDef,
    resolvers: mergeResolver,

    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await gqlServer.start();

  app.use(
    "/api/graphql",
    cors({
      origin: ["http://localhost:3000", "http://localhost:3001"], // Specify the origin you want to allow
      methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"], // Specify the methods you want to allow
      allowedHeaders: ["Content-Type", "Authorization"], // Specify the headers you want to allow
      credentials: true, // Allow credentials
    }),

    expressMiddleware(gqlServer, {
      context: async ({ req, res }) => {
        const token = req.cookies.token;
        const tok = req.headers.authorization;

        const auth = Auth.veryfyToken(token as string);

        return { req, res, token, auth, prisma };
      },
    })
  );

  SocketServer(httpServer);

  await new Promise<void>((resolve) => httpServer.listen(PORT, resolve));
  console.log(`listening on ${PORT}`);
}

myServer();
