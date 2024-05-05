"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("../errors/CustomError"));
const validateDataExistence = (req, res, next) => {
    const { name, email, profilePicture, birthdate, nDni, username, password } = req.body;
    if (!name || !email || !profilePicture || !birthdate || !nDni || !username || !password) {
        const err = new CustomError_1.default("Required data is missing", 400);
        next(err);
    }
    else
        next();
};
exports.default = validateDataExistence;
