import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"
import { Service } from "../../interfaces/IAppointment"

const validateService= (req: Request,res: Response,next: NextFunction) => {
    const {service} = req.body
    if (!Object.values(Service).includes(service)) {
        const err = new CustomError("Invalid service (must be Yoga, Strength Training, Outdoor Adventure or Free Workout)",400)
        next(err)
    } else next()
}


export default validateService