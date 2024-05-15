import { NextFunction, Request, Response } from "express"
import { cancelAppointmentService, createAppointmentService, getAppointmentByUserService, getAppointmentsService, getOneAppointmentService } from "../services/appointmentsServices"
import { Appointment } from "../entities/Appointment"
import CustomError from "../errors/CustomError"
import { getUserByIdService } from "../services/usersServices"
import { Status } from "../interfaces/IAppointment"


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

export const getAppointmentsByUser = async (req: Request,res: Response,next: NextFunction) => {
    const userId:number = parseInt(req.params.id,10)
    const appointmentsByUser: Appointment[] | null = await getAppointmentByUserService(userId)
    if (appointmentsByUser) res.status(200).json(appointmentsByUser)
        else {
            const err = new CustomError(`There's no user with id ${userId}`,404)
            next(err)
        }
}

export const createAppointment = async (req: Request,res: Response,next: NextFunction) => {
    const { date,time,userId,service } = req.body
    const verifyUser = await getUserByIdService(userId)
    if(verifyUser){

        const newAppointment: Appointment | undefined = await createAppointmentService({date,time,service,userId})
        if (newAppointment) res.status(201).json(newAppointment)
        else {
            const err = new CustomError("The appointment couldn't be created",404)
            next(err)
            }
            
    } else {
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