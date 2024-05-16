import AppointmentDto from "../dto/AppointmentDto"
import { Appointment } from "../entities/Appointment"
import { Status } from "../interfaces/IAppointment"
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

export const getAppointmentByUserService = async (id:number): Promise<Appointment[] | null> => {
    const appointments = await AppointmentRepository.find({
        where: { user: { id } },
        relations: ["user"]
    })
    return appointments
}

export const createAppointmentService = async (appointmentData: AppointmentDto): Promise<Appointment | undefined> => {
    const {date,time,userId,service} = appointmentData
    const user = await getUserByIdService(userId)
    if(user) {
        const newAppointment: Appointment = await AppointmentRepository.create({
            date,
            time,
            service,
            state: Status.inProgress,
            user: user
        })
        const results = await AppointmentRepository.save(newAppointment)
        return results
    }
}

export const cancelAppointmentService = async (id:number): Promise<Appointment | undefined> => {
    const appointment: Appointment | null = await getOneAppointmentService(id)
    if(appointment){
        appointment.state = Status.cancelled
        await AppointmentRepository.save(appointment)
        return appointment
    }
}