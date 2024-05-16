import { NextFunction, Request, Response } from "express"
import { AppointmentModel } from "../../configs/data-source"
import { Appointment } from "../../entities/Appointment"
import CustomError from "../../errors/CustomError"

const duplicateAppValidate = async (req: Request,res: Response,next: NextFunction) => {
    const {userId,date,time} = req.body
    const appointments: Appointment[] | null = await AppointmentModel.find({
        where: { date: date, time: time },
        relations: ["user"]
    })
    if (appointments && appointments.length > 0) {
        const userAppointments = appointments.filter(appointment => appointment.user.id === userId)

        if (userAppointments.length > 0) {
            const err = new CustomError("The user has already made an appointment at this date and time", 400)
            return next(err)
        }
    } 
    next()
}

export default duplicateAppValidate