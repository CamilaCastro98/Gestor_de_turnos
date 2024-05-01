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
exports.deleteUsersService = exports.registerUserService = exports.getUsersService = void 0;
let users = [];
let id = 1;
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return users;
});
exports.getUsersService = getUsersService;
const registerUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, mail, profilePicture, active } = userData;
    const newUser = {
        id: id,
        name: name,
        mail: mail,
        profilePicture: profilePicture,
        active: active
    };
    users.push(newUser);
    id++;
    return newUser;
});
exports.registerUserService = registerUserService;
const deleteUsersService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    users = users.filter((user) => user.id !== userId);
    return users;
});
exports.deleteUsersService = deleteUsersService;
