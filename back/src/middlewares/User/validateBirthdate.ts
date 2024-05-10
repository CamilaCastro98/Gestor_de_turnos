import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"

const validateBirthdate = (req: Request,res: Response,next: NextFunction) => {
    const {birthdate} = req.body
    if (isNaN(Date.parse(birthdate)) ) {
        const err = new CustomError("Invalid birthdate",400)
            next(err)
    }

    const todayDate = new Date()
    const userBirth = new Date(birthdate)
    const milisecondsInAYear = 1000 * 60 * 60 * 24 * 365.25
    if ((todayDate.getTime() - userBirth.getTime())/milisecondsInAYear < 16) {
        const err = new CustomError("Registration requires users to be at least 16 years of age",400)
        next(err)
    } else next()
}

export default validateBirthdate