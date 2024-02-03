import { Schema, model } from "mongoose";

const newUSer = new Schema({
    Name:{
        type: "string",
        required: true,

    },
    Sirname:{
        type: "string",

    },
    Email:{
        type: "string",
        required: true,
        unique: true,
    },
    Password:{
        type: "string",
        require:true

    },
    Salt:{
        type: "string",

    },
    
    

},{timestamps:true});

const User = model("userdb",newUSer);

export default  User;