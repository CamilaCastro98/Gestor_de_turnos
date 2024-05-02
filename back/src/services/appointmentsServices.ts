import AppointmentDto from "../dto/AppointmentDto"
import IAppointment from "../interfaces/IAppointment"

let appointmentsArray: IAppointment[] = []
let appointmentId = 1

export const getAppointmentsService = async (): Promise<IAppointment[]> => {
    return appointmentsArray
}

export const getOneAppointmentService = async (id:number): Promise<IAppointment | Error> => {
    for (let i = 0; i < appointmentsArray.length; i++) {
        if (appointmentsArray[i].id === id) {
            return appointmentsArray[i]
        }
    }
    return new Error ('No se encontró turno')
}

export const createAppointmentService = async (appointmentData: AppointmentDto): Promise<IAppointment> => {
    const {date,time,status,userId} = appointmentData
    const newAppointment: IAppointment = {
        id: appointmentId,
        date: date,
        time: time,
        userId: userId,
        status: status
    }
    appointmentsArray.push(newAppointment)
    appointmentId++
    return newAppointment
}

export const cancelAppointmentService = async (id:number) => {
    for (let i = 0; i < appointmentsArray.length; i++) {
        if (appointmentsArray[i].id === id) {
            appointmentsArray[i].status = "Cancelled"
            return "Appointment cancelled"
        }
    }
}