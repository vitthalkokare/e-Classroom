import express from 'express';
import DB from './connection';
import {expressMiddleware} from '@apollo/server/express4'
import GraphQlServer from './graphql';
import UserService from './services/user';


async function myServer(){
    const app = express();
const PORT = Number(process.env.PORT) || 8000;

app.use(express.json());

DB('mongodb://127.0.0.1:27017/');
app.use(express.json());



app.use('/graphql', expressMiddleware(await GraphQlServer()));

app.get('/', (req, res) => {
    res.send('goodbye');
})



app.listen(PORT,()=> console.log('listening on port' , PORT));

}

myServer();