import { NextFunction, Request, Response } from "express"
import { cancelAppointmentService, createAppointmentService, getAppointmentsService, getOneAppointmentService } from "../services/appointmentsServices"
import { Appointment } from "../entities/Appointment"
import CustomError from "../errors/CustomError"


export const getAppointments = async (req: Request,res: Response) => {
    try {
        const appointments: Appointment[] = await getAppointmentsService()
        res.status(200).json(appointments)
    }
    catch(error) {
        res.status(404).json(error)
    }
}

export const getOneAppointment = async (req: Request,res: Response,next: NextFunction) => {
    const appointmentId:number = parseInt(req.params.id,10)
    const appointmentById: Appointment | null = await getOneAppointmentService(appointmentId)
    if (appointmentById) res.status(200).json(appointmentById)
        else {
            const err = new CustomError(`There's no appointment with id ${appointmentId}`,404)
            next(err)
        }
}

export const createAppointment = async (req: Request,res: Response,next: NextFunction) => {
    const { date,time,status,userId } = req.body
    const newAppointment: Appointment | undefined = await createAppointmentService({date,time,status,userId})
    if (newAppointment) res.status(201).json(newAppointment)
    else {
        const err = new CustomError(`Can't create appoinmtent with userId ${userId}`,404)
        next(err)
    }
}

export const cancelAppointment = async (req: Request,res: Response,next: NextFunction) => {
    const appointmentId:number = parseInt(req.params.id,10)
    const cancelAppointment: Appointment | undefined = await cancelAppointmentService(appointmentId)
    if(cancelAppointment) res.status(200).json(cancelAppointment)
    else {
        const err = new CustomError(`The appointment couldn't be cancelled`,404)
        next(err)
    }
}