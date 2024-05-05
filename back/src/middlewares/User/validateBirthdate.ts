import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"

const validateBirthdate = (req: Request,res: Response,next: NextFunction) => {
    const {birthdate} = req.body
    if (isNaN(Date.parse(birthdate)) ) {
        const err = new CustomError("Invalid birthdate",400)
            next(err)
    } else next()
}

export default validateBirthdate