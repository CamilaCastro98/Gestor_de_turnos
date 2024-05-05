import { AppDataSource } from "../configs/data-source"
import { Appointment } from "../entities/Appointment"


export const AppointmentRepository = AppDataSource.getRepository(Appointment)