import express from "express";
import { createServer } from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cookieParser from "cookie-parser";
import UserService from "./services/User/UserService";
import mergeResolver from "./graphql/Resolver";
import mergeTypeDef from "./graphql/typeDefs/index";
import bodyParser from "body-parser";

async function myServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;
  const httpServer = createServer(app);

  dotenv.config();

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
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    }),
    express.json(),
    cookieParser(),

    expressMiddleware(gqlServer, {
      context: async ({ req, res }) => {
         const token =  req.headers.cookie
         const t = token?.trim().slice(6);


         const tok = req.headers["authorization"] || t

        const user = UserService.veryfyUserToken(tok as string);

        return { req, res, user };   
      },
    })
  );

  // await new Promise<void>((resolve) => httpServer.listen(PORT, resolve));
  httpServer.listen(PORT, () => {
    console.log(`listening on ${PORT}`); 
  });
}

myServer();
