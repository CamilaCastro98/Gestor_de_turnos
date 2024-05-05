"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentRepository = void 0;
const data_source_1 = require("../configs/data-source");
const Appointment_1 = require("../entities/Appointment");
exports.AppointmentRepository = data_source_1.AppDataSource.getRepository(Appointment_1.Appointment);
