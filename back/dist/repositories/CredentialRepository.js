"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CredentialRepository = void 0;
const data_source_1 = require("../configs/data-source");
const Credential_1 = require("../entities/Credential");
exports.CredentialRepository = data_source_1.AppDataSource.getRepository(Credential_1.Credential);
