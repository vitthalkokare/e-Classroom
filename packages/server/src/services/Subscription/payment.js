"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentEnrollService_1 = __importDefault(require("../Student/studentEnrollService"));
class PaymentService extends studentEnrollService_1.default {
    static async EnrollSubjectPayment() {
    }
}
exports.default = PaymentService;
