import { Request, Response } from "express"
import { cancelAppointmentService, createAppointmentService, getAppointmentsService, getOneAppointmentService } from "../services/appointmentsServices"
import IAppointment from "../interfaces/IAppointment"


export const getAppointments = async (req: Request,res: Response) => {
    const appointments: IAppointment[] = await getAppointmentsService()
    res.status(200).json(appointments)
}

export const getOneAppointment = async (req: Request,res: Response) => {
    const appointmentId:number = parseInt(req.params.id,10)
    const appointmentById = await getOneAppointmentService(appointmentId)
    res.status(200).json(appointmentById)
}

export const createAppointment = async (req: Request,res: Response) => {
    const { date,time,status,userId } = req.body
    const newAppointment: IAppointment = await createAppointmentService({date,time,status,userId})
    res.status(201).json(newAppointment)
}

export const cancelAppointment = async (req: Request,res: Response) => {
    const appointmentId:number = parseInt(req.params.id,10)
    const cancelAppointment = await cancelAppointmentService(appointmentId)
    res.status(200).json(cancelAppointment)
}