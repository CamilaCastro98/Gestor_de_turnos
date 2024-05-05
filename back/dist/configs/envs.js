"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOST = exports.PROTO = exports.DB = exports.PORT = void 0;
require("dotenv/config");
exports.PORT = process.env.PORT;
exports.DB = process.env.DB;
exports.PROTO = process.env.PROTO;
exports.HOST = process.env.HOST;
