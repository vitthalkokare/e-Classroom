import express from "express";
import http from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { typeDefs } from "./api/graphql/typeDefs";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "./api/graphql/Resolver";
import { GraphQlServerContext } from "./context";


async function myServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;
  const httpServer = http.createServer(app);
 
  app.use(express.json());

  const gqlServer = new ApolloServer({
   typeDefs,
   resolvers,
   
  });
  await gqlServer.start();

  app.use(
    "/api/graphql",
    cors(),
    expressMiddleware(gqlServer, {
      context: async ({ req ,res}) => ({
      

     }),
    })
  );

  app.get('/',(req,res)=>{
    res.send('hello world')
  })
 

  app.listen(PORT, () => console.log("listening on port", PORT));
}
  
myServer();
