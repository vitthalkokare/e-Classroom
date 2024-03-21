"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const context_1 = require("../../context");
const crypto_1 = require("crypto");
const UserSchemas_1 = require("../../graphql/schemas/UserSchemas");
class UserService {
    constructor() { }
    static async findUserByEmail(email) {
        if (!email)
            return null;
        try {
            const result = await context_1.prisma.user.findUnique({
                where: {
                    email: email
                },
            });
            return result;
        }
        catch (e) {
        }
    }
    static async FindUserById(id) {
        if (!id)
            return null;
        try {
            const result = await context_1.prisma.user.findUnique({
                where: {
                    id: id
                },
            });
            return result;
        }
        catch (e) {
        }
    }
    static async generateHash(password, salt) {
        const HashPassword = (0, crypto_1.createHmac)("sha256", salt)
            .update(password)
            .digest("hex");
        return HashPassword;
    }
    static async createUser(createUserPayload) {
        const userSchema = UserSchemas_1.creaeUserSchema.parse(createUserPayload);
        const { email, password } = userSchema;
        if (email === "" || password === "")
            throw new Error("all fields are required");
        const salt = (0, crypto_1.randomBytes)(34).toString("hex");
        const hashedPassword = await UserService.generateHash(password, salt);
        try {
            const result = await context_1.prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    salt,
                    role: "USER"
                },
            });
            return Promise.resolve(result);
        }
        catch (error) {
            return "Error creating user";
        }
    }
    static async SignUserToken(loginUserPayload) {
        const { email, password } = loginUserPayload;
        const user = await UserService.findUserByEmail(email);
        if (!user)
            throw new Error("user not found,Create new Account.!");
        if (email === "" || password === "")
            throw new Error("all fields are required");
        const userSalt = user.salt;
        const veryfyPassword = await UserService.generateHash(password, userSalt);
        if (veryfyPassword !== user.password)
            throw new Error("invalid password");
        // Generate Token
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, "superman");
        return token;
    }
    static veryfyUserToken(token) {
        try {
            if (!token) {
                throw new Error("User not authenticated");
            }
            const verifiedToken = jsonwebtoken_1.default.verify(token, 'superman');
            return verifiedToken;
        }
        catch (err) {
            return "token is not valid";
        }
    }
}
exports.default = UserService;
