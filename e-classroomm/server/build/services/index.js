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
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const sec = (0, crypto_1.randomBytes)(20);
        const plaintext = 'hellowold';
        const hashePass = (0, crypto_1.createHmac)('sha256', sec).update(plaintext).digest('hex');
        const user = yield user_1.default.create({
            Name: 'John',
            Sirname: 'John',
            Email: 'jokjhhn@exiuyufiyadhhkjfmple.com',
            Password: hashePass,
            Username: hashePass,
            Sat: 'fkjl'
        });
        return user;
    });
}
exports.default = createUser;
