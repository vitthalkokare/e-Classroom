"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const newUSer = new mongoose_1.Schema({
    Name: {
        type: "string",
        required: true,
    },
    Sirname: {
        type: "string",
    },
    Email: {
        type: "string",
        required: true,
        unique: true,
    },
    Password: {
        type: "string",
        require: true
    },
    Salt: {
        type: "string",
    },
}, { timestamps: true });
const User = (0, mongoose_1.model)("userdb", newUSer);
exports.default = User;
