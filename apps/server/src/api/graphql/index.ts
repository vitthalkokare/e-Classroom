import {  ApolloServer, BaseContext } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { typeDefs } from "./typeDefs";
import http from 'http'
import express from "express";

interface MyContext {
  token?: String;
}


    
    async function gqlServer():Promise<ApolloServer<BaseContext>>{
        const httpss = http.createServer();
        const server = new ApolloServer({
            typeDefs:`
            type Query{
                hello: String
            }
            `,
            resolvers:{
                Query:{
                    hello:()=>"hello world"
                }
            },


    
        })
        await server.start();
        return server;
        
        
    }
    


export default gqlServer;




