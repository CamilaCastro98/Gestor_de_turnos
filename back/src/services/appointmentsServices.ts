import { AppointmentModel } from "../configs/data-source"
import AppointmentDto from "../dto/AppointmentDto"
import { Appointment } from "../entities/Appointment"


export const getAppointmentsService = async (): Promise<Appointment[]> => {
    const allAppointments: Appointment[] = await AppointmentModel.find()
    return allAppointments
}

export const getOneAppointmentService = async (id:number): Promise<Appointment | undefined> => {
    const allAppointments: Appointment[] = await AppointmentModel.find()
    for (let i = 0; i < allAppointments.length; i++) {
        if (allAppointments[i].id === id) {
            return allAppointments[i]
        }
    }
}

export const createAppointmentService = async (appointmentData: AppointmentDto): Promise<Appointment> => {
    const {date,time,status,userId} = appointmentData
    const newAppointment: Appointment = await AppointmentModel.create({
        date,
        time,
        status,
        userId
    })
    const results = await AppointmentModel.save(newAppointment)
    return results
}

export const cancelAppointmentService = async (id:number): Promise<string | undefined> => {
    const appointment: Appointment | null = await AppointmentModel.findOneBy({id:id})
    if(appointment){
        appointment.status = "cancelled"
        await AppointmentModel.save(appointment)
        return "Appointment cancelled"
    }
}