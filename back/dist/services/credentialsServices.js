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
exports.validateCredentialsService = exports.registerCredentialsService = void 0;
const CredentialRepository_1 = require("../repositories/CredentialRepository");
const registerCredentialsService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = yield CredentialRepository_1.CredentialRepository.create({
        username: username,
        password: password,
    });
    const results = yield CredentialRepository_1.CredentialRepository.save(newCredential);
    return results;
});
exports.registerCredentialsService = registerCredentialsService;
const validateCredentialsService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const allCredentials = yield CredentialRepository_1.CredentialRepository.find();
    for (let i = 0; i < allCredentials.length; i++) {
        if (allCredentials[i].username === username) {
            if (allCredentials[i].password === password) {
                return allCredentials[i].id;
            }
        }
    }
    return new Error("Datos inválidos");
});
exports.validateCredentialsService = validateCredentialsService;
