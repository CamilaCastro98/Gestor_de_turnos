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
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Controlador que muestra los turnos");
});
exports.getAppointments = getAppointments;
const getOneAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Controlador que muestra turno específico");
});
exports.getOneAppointment = getOneAppointment;
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Controlador que agenda un turno");
});
exports.createAppointment = createAppointment;
const cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Controlador que cancela un turno");
});
exports.cancelAppointment = cancelAppointment;
