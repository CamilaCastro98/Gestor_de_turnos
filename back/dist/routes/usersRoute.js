"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const validateDataExistence_1 = __importDefault(require("../middlewares/validateDataExistence"));
const validateTypes_1 = __importDefault(require("../middlewares/validateTypes"));
const usersRouter = (0, express_1.Router)();
usersRouter.get("/", usersController_1.getUsers);
usersRouter.get("/:id", usersController_1.getUserById);
usersRouter.post("/register", validateDataExistence_1.default, validateTypes_1.default, usersController_1.registerUser);
usersRouter.post("/login", usersController_1.loginUser);
usersRouter.delete("/:id", usersController_1.deleteUser);
exports.default = usersRouter;
