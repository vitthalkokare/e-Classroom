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
import bodyParser, { json } from "body-parser";
import { auth, requiresAuth } from "express-openid-connect";

async function myServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;
  const httpServer = createServer(app);

  dotenv.config();



  const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:3000',
    clientID: '1I8QtC5B6lXM0ZP732TQHzIIxQR1kaPi',
    issuerBaseURL: 'https://dev-6snnvh2bx675qods.us.auth0.com',
    secret: 'ELz9xygRxHCt31dBfn6DHUy8wGE2UlHVS-Tj4JfiLPcWW7Z3vmm2N_l_7D0PvnJr'
  };

  

 

app.use(auth(config));





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
      origin: 'http://localhost:3000',
      credentials:true,
    }),
    json(),
 
    expressMiddleware(gqlServer, {
      context: async ({ req, res }) => {
         const token =  req.headers.cookie
         const t = token?.trim().slice(6);

        
         const tok = req.headers["authorization"] || ""

        const user =  UserService.veryfyUserToken(t as string);
        

        return { req, res, user, t,token};   
      },
    })
  );

  // await new Promise<void>((resolve) => httpServer.listen(PORT, resolve));
  httpServer.listen(PORT, () => {
    console.log(`listening on ${PORT}`); 
  });
}


myServer();



