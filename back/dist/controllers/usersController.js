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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.loginUser = exports.registerUser = exports.getUserById = exports.getUsers = void 0;
const usersServices_1 = require("../services/usersServices");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, usersServices_1.getUsersService)();
    res.status(200).json(users);
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id, 10);
    const userById = yield (0, usersServices_1.getUserByIdService)(userId);
    res.status(200).json(userById);
});
exports.getUserById = getUserById;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, profilePicture, birthdate, nDni, username, password, active } = req.body;
    const newUser = yield (0, usersServices_1.registerUserService)({ name, email, profilePicture, birthdate, nDni, username, password, active });
    res.status(201).json(newUser);
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Este controlador sirve para que el usuario pueda hacer login a la app");
});
exports.loginUser = loginUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id, 10);
    const deleteUser = yield (0, usersServices_1.deleteUsersService)(userId);
    res.status(200).json({ message: "user deleted" });
});
exports.deleteUser = deleteUser;
