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
const UserRepository_1 = require("../repositories/UserRepository");
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield UserRepository_1.UserRepository.find({
        relations: {
            credentialsId: true,
        },
    });
    return users;
});
exports.getUsersService = getUsersService;
const getUserByIdService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserRepository_1.UserRepository.findOneBy({ id: userId });
    return user;
});
exports.getUserByIdService = getUserByIdService;
const registerUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, profilePicture, birthdate, nDni, username, password, } = userData;
    const newCredentials = yield (0, credentialsServices_1.registerCredentialsService)(username, password);
    const newUser = yield UserRepository_1.UserRepository.create({
        name,
        profilePicture,
        email,
        birthdate,
        nDni,
        credentialsId: newCredentials,
        active: true
    });
    const results = yield UserRepository_1.UserRepository.save(newUser);
    return results;
});
exports.registerUserService = registerUserService;
const deleteUsersService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    yield UserRepository_1.UserRepository.delete(userId);
    return "User deleted";
});
exports.deleteUsersService = deleteUsersService;
