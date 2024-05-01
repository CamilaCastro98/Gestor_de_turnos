"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRoute_1 = __importDefault(require("./usersRoute"));
const appointmentsRoutes_1 = __importDefault(require("./appointmentsRoutes"));
const router = (0, express_1.Router)();
router.use("/users", usersRoute_1.default);
router.use("/appointments", appointmentsRoutes_1.default);
exports.default = router;
