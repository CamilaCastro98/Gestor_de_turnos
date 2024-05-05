import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"

const validateDate= (req: Request,res: Response,next: NextFunction) => {
    const {date} = req.body
    if (isNaN(Date.parse(date)) ) {
        const err = new CustomError("Invalid date",400)
            next(err)
    } else next()
}

export default validateDate