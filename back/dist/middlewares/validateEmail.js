"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateEmail = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = ;
    if (!email.includes("@")) {
    }
    else
        next();
};
exports.default = validateEmail;
