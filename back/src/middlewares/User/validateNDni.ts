import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"

const validateNDni = (req: Request,res: Response,next: NextFunction) => {
    const {nDni} = req.body

    if (nDni.toString().length !== 8) {
        const err = new CustomError("Incorrect dni",400)
            next(err)
    } else next()
}

export default validateNDni