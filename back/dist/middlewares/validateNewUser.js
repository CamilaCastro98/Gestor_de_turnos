"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../entities/User");
const validateNewUser = (req, res, next) => {
    if (!(req.body instanceof User_1.User)) {
    }
};
