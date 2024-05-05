"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const CustomError_1 = __importDefault(require("./errors/CustomError"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use("/", routes_1.default);
app.use((err, req, res, next) => {
    if (err instanceof CustomError_1.default) {
        return res.status(err.statusCode).json({ error: err.message });
    }
    else {
        return res.status(500).json({ error: err.message });
    }
});
exports.default = app;
