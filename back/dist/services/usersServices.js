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
exports.deleteUsersService = exports.registerUserService = exports.getUserByIdService = exports.getUsersService = void 0;
const credentialsServices_1 = require("./credentialsServices");
let usersArray = [];
let id = 1;
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return usersArray;
});
exports.getUsersService = getUsersService;
const getUserByIdService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].id === userId) {
            return usersArray[i];
        }
    }
    return new Error('No se encontró usuario');
});
exports.getUserByIdService = getUserByIdService;
const registerUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, profilePicture, birthdate, nDni, username, password, active } = userData;
    const credentialsId = yield (0, credentialsServices_1.registerCredentialsService)(username, password);
    const newUser = {
        id: id,
        name: name,
        email: email,
        profilePicture: profilePicture,
        birthdate: birthdate,
        nDni: nDni,
        credentialsId: credentialsId,
        active: active
    };
    usersArray.push(newUser);
    id++;
    return newUser;
});
exports.registerUserService = registerUserService;
const deleteUsersService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    usersArray = usersArray.filter((user) => user.id !== userId);
    return usersArray;
});
exports.deleteUsersService = deleteUsersService;
