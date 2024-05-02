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
let appointmentsArray = [];
let appointmentId = 1;
const getAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return appointmentsArray;
});
exports.getAppointmentsService = getAppointmentsService;
const getOneAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < appointmentsArray.length; i++) {
        if (appointmentsArray[i].id === id) {
            return appointmentsArray[i];
        }
    }
    return new Error('No se encontró turno');
});
exports.getOneAppointmentService = getOneAppointmentService;
const createAppointmentService = (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time, status, userId } = appointmentData;
    const newAppointment = {
        id: appointmentId,
        date: date,
        time: time,
        userId: userId,
        status: status
    };
    appointmentsArray.push(newAppointment);
    appointmentId++;
    return newAppointment;
});
exports.createAppointmentService = createAppointmentService;
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < appointmentsArray.length; i++) {
        if (appointmentsArray[i].id === id) {
            appointmentsArray[i].status = "Cancelled";
            return "Appointment cancelled";
        }
    }
});
exports.cancelAppointmentService = cancelAppointmentService;
