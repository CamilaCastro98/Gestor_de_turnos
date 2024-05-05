"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("../errors/CustomError"));
const validateTypes = (req, res, next) => {
    const { name, email, profilePicture, birthdate, nDni, username, password } = req.body;
    const incorrectTypes = [];
    if (typeof name !== "string") {
        incorrectTypes.push(`name waits for a string and recieved ${typeof name} instead`);
    }
    if (typeof email !== "string") {
        incorrectTypes.push(`email waits for a string and recieved ${typeof email} instead`);
    }
    if (typeof profilePicture !== "string") {
        incorrectTypes.push(`profilePicture waits for a string and recieved ${typeof profilePicture} instead`);
    }
    if (typeof birthdate !== "string") {
        incorrectTypes.push(`birthdate waits for a string and recieved ${typeof birthdate} instead`);
    }
    if (typeof nDni !== "number") {
        incorrectTypes.push(`nDni waits for a number and recieved ${typeof nDni} instead`);
    }
    if (typeof username !== "string") {
        incorrectTypes.push(`username waits for a string and recieved ${typeof username} instead`);
    }
    if (typeof password !== "string") {
        incorrectTypes.push(`password waits for a string and recieved ${typeof password} instead`);
    }
    if (incorrectTypes.length) {
        const err = new CustomError_1.default(`Incorrect type: ${incorrectTypes.join(" ; ")}`, 400);
        next(err);
    }
    else
        next();
};
exports.default = validateTypes;
