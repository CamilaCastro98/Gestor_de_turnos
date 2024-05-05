import AppointmentDto from "../dto/AppointmentDto"
import { Appointment } from "../entities/Appointment"
import { AppointmentRepository } from "../repositories/AppointmentRepository"
import { getUserByIdService } from "./usersServices"


export const getAppointmentsService = async (): Promise<Appointment[]> => {
    const allAppointments: Appointment[] = await AppointmentRepository.find()
    return allAppointments
}

export const getOneAppointmentService = async (id:number): Promise<Appointment | null> => {
    const appointment = await AppointmentRepository.findOneBy({id:id})
    return appointment
}

export const createAppointmentService = async (appointmentData: AppointmentDto): Promise<Appointment | undefined> => {
    const {date,time,status,userId} = appointmentData
    const user = await getUserByIdService(userId)
    if(user) {
        const newAppointment: Appointment = await AppointmentRepository.create({
            date,
            time,
            status,
            userId
        })
        const results = await AppointmentRepository.save(newAppointment)
        return results
    }
}

export const cancelAppointmentService = async (id:number): Promise<Appointment | undefined> => {
    const appointment: Appointment | null = await getOneAppointmentService(id)
    if(appointment){
        appointment.status = "cancelled"
        await AppointmentRepository.save(appointment)
        return appointment
    }
}