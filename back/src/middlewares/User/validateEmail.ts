import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"

const validateEmail = (req: Request,res: Response,next: NextFunction) => {
    const {email} = req.body
    const regexMail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/

    if (!regexMail.test(email)) {
        const err = new CustomError("Incorrect email",400)
            next(err)
    } else next()
}

export default validateEmail