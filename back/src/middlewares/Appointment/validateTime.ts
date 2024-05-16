import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"

const validateTime = (req: Request,res: Response,next: NextFunction) => {
    const {time} = req.body
    const regexTime = /^([01]\d|2[0-3]):([0-5]\d)$/
    if (!regexTime.test(time)) {
        const err = new CustomError("Invalid time",400)
            next(err)
    }
    const hours:number = parseInt(time.split(":")[0])

    if(hours < 9 || hours > 20) {
        const err = new CustomError("The opening hours are from 9 to 21",400)
            next(err)
    }
    next()
}

export default validateTime