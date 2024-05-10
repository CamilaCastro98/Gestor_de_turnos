import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"

const validatePassword = (req: Request,res: Response,next: NextFunction) => {
    const {password} = req.body

    if (password.length < 5) {
        const err = new CustomError("Password length must be longer than 5",400)
            next(err)
    }

    const regexPassword = /^(?=.*[A-Z])(?=.*\d).+/
    if (!(regexPassword.test(password))) {
        const err = new CustomError("Password must contain at leat one uppercase character and a number",400)
            next(err)
    }
    
    else next()
}

export default validatePassword