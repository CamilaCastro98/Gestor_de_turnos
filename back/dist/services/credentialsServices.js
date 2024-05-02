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
let credentialsArray = [];
let credentialsId = 1;
const registerCredentialsService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const credentials = {
        id: credentialsId,
        username: username,
        password: password
    };
    credentialsArray.push(credentials);
    credentialsId++;
    return credentials.id;
});
exports.registerCredentialsService = registerCredentialsService;
const validateCredentialsService = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < credentialsArray.length; i++) {
        if (credentialsArray[i].username === username) {
            if (credentialsArray[i].password === password) {
                return credentialsArray[i].id;
            }
        }
    }
    return new Error('Datos inválidos');
});
exports.validateCredentialsService = validateCredentialsService;
