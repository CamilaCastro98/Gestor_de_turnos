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
exports.cancelAppointmentService = exports.createAppointmentService = exports.getOneAppointmentService = exports.getAppointmentsService = void 0;
const AppointmentRepository_1 = require("../repositories/AppointmentRepository");
const getAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield AppointmentRepository_1.AppointmentRepository.find();
    return allAppointments;
});
exports.getAppointmentsService = getAppointmentsService;
const getOneAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield AppointmentRepository_1.AppointmentRepository.findOneBy({ id: id });
    return appointment;
});
exports.getOneAppointmentService = getOneAppointmentService;
const createAppointmentService = (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time, status, userId } = appointmentData;
    const newAppointment = yield AppointmentRepository_1.AppointmentRepository.create({
        date,
        time,
        status,
        userId
    });
    const results = yield AppointmentRepository_1.AppointmentRepository.save(newAppointment);
    return results;
});
exports.createAppointmentService = createAppointmentService;
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield AppointmentRepository_1.AppointmentRepository.findOneBy({ id: id });
    if (appointment) {
        appointment.status = "cancelled";
        yield AppointmentRepository_1.AppointmentRepository.save(appointment);
        return "Appointment cancelled";
    }
});
exports.cancelAppointmentService = cancelAppointmentService;
