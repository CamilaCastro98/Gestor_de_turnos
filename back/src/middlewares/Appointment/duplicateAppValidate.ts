import { NextFunction, Request, Response } from "express"
import { AppointmentModel } from "../../configs/data-source"
import { Appointment } from "../../entities/Appointment"
import CustomError from "../../errors/CustomError"

const duplicateAppValidate = async (req: Request,res: Response,next: NextFunction) => {
    const {userId,date,time} = req.body
    const appoinmtents: Appointment[] | null = await AppointmentModel.find({ where: { userId: userId, date: date} })
    if (appoinmtents) {
        for (const turn of appoinmtents) {
            if (turn.time === time) {
                const err = new CustomError("The user has already made an appointment at this date and time",400)
                next(err)
            }
        }
        return next()
    } 
    else return next()
}

export default duplicateAppValidate