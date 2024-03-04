import express from "express";
import http from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";

import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cookieParser from "cookie-parser";
import UserService from "./services/User/UserService";
import { resolvers } from "./graphql/Resolver";
import { typeDefs } from "./graphql/typeDefs";

async function myServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;
  const httpServer = http.createServer(app);

  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded());

  interface authInterface {
    token: String;
  }
  

  const gqlServer = new ApolloServer({
    typeDefs,
    resolvers,

    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await gqlServer.start();

  app.use(
    "/api/graphql",
    cors(),
    cookieParser(),

    expressMiddleware(gqlServer, {
      context: async ({ req, res }) => {
        
        const token = req.headers['authorization'];

        const ut = token?.split("Bearer ")[1];
        const ok = res.getHeaders();
        
        const user = UserService.veryfyUserToken(token as string);  

          return {res,req,user,token,ok,ut}

      },
    })
  );

  app.get("/", (req, res) => {
    res.send("");
  });

  // await new Promise<void>((resolve) => httpServer.listen(PORT, resolve));
  httpServer.listen(PORT,()=>{console.log(`listening on ${PORT}`)})
}

myServer();
