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
exports.cancelAppointment = exports.createAppointment = exports.getOneAppointment = exports.getAppointments = void 0;
const appointmentsServices_1 = require("../services/appointmentsServices");
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield (0, appointmentsServices_1.getAppointmentsService)();
    res.status(200).json(appointments);
});
exports.getAppointments = getAppointments;
const getOneAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentId = parseInt(req.params.id, 10);
    const appointmentById = yield (0, appointmentsServices_1.getOneAppointmentService)(appointmentId);
    res.status(200).json(appointmentById);
});
exports.getOneAppointment = getOneAppointment;
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time, status, userId } = req.body;
    const newAppointment = yield (0, appointmentsServices_1.createAppointmentService)({ date, time, status, userId });
    res.status(201).json(newAppointment);
});
exports.createAppointment = createAppointment;
const cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentId = parseInt(req.params.id, 10);
    const cancelAppointment = yield (0, appointmentsServices_1.cancelAppointmentService)(appointmentId);
    res.status(200).json(cancelAppointment);
});
exports.cancelAppointment = cancelAppointment;
