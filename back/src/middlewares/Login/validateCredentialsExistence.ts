import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"

const validateCredentialsExistence = (req: Request,res: Response,next: NextFunction) => {
    const { username, password } = req.body
    if (!username || !password) {
        const err = new CustomError("Username and password are required",400)
            next(err)
    } else next()
}

export default validateCredentialsExistence