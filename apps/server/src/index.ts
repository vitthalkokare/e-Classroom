import express from "express";
import http from "http";
import { ApolloServer, BaseContext } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import { typeDefs } from "./api/graphql/typeDefs";
import { PrismaClient } from "@prisma/client";
import { Context } from "@apollo/client";
import { resolvers } from "./api/graphql/Resolver";


async function myServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;
  const httpServer = http.createServer(app);

  const prisma = new PrismaClient();

  
  app.use(express.json());

  const gqlServer = new ApolloServer({
   typeDefs,
   resolvers,
   
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await gqlServer.start();

  app.use(
    "/api/graphql",
    cors(),
    expressMiddleware(gqlServer, {
      context: async ({ req ,res}) => ({}),
    })
  );

 

  app.listen(PORT, () => console.log("listening on port", PORT));
}
  
myServer();
