import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"

const validateName = async (req: Request,res: Response,next: NextFunction) => {
    const {name} = req.body

    if(name.length < 5 || name.length > 35) {
        const err = new CustomError("Name length must be greater than 5 and less than 35",400)
        next(err)
    }

    const regexName = /^[a-zA-Z\s]+$/
    if (!regexName.test(name)) {
        const err = new CustomError("Name can't contain numbers or special characters",400)
            next(err)
    }
    else next()
}

export default validateName