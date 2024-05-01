"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const envs_1 = require("./configs/envs");
server_1.default.listen(envs_1.PORT, () => {
    console.log(`listening on port ${envs_1.PORT}`);
});
