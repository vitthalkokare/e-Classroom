"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const user_1 = __importDefault(require("../model/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const fake = "fakesalt";
const jwt_secret = 'fuckingsecret';
class UserService {
    static getUserByEmail(Email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.findOne({ Email: Email });
        });
    }
    static GenerateHash(Password, Salt) {
        const hashedPass = (0, crypto_1.createHmac)('sha256', Salt).update(Password).digest('hex');
        return hashedPass;
    }
    static createUser(userPayload) {
        const { Name, Sirname, Email, Password, Salt } = userPayload;
        const secret = (0, crypto_1.randomBytes)(32).toString('hex');
        const hashedPass = UserService.GenerateHash(Password, fake);
        const user = user_1.default.create({
            Name: Name,
            Sirname: Sirname,
            Email: Email,
            Password: hashedPass,
            Salt: fake, // Make sure the property name matches the User model
        });
        return user;
    }
    static UserSignIn(Payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Email, Password } = Payload;
            const user = yield UserService.getUserByEmail(Email);
            if (!user)
                throw new Error(`User not found`);
            const ChecHashPass = UserService.GenerateHash(Password, fake);
            if (ChecHashPass !== user.Password)
                throw new Error(`Wrong password`);
            const token = jsonwebtoken_1.default.sign({ id: user.id, Email: user.Email }, jwt_secret);
            return token;
        });
    }
}
exports.default = UserService;
