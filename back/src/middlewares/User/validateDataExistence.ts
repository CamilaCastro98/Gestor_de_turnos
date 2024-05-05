import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"

const validateDataExistence = (req: Request,res: Response,next: NextFunction) => {
    const { name,email,profilePicture,birthdate, nDni, username, password } = req.body
    if (!name || !email || !profilePicture || !birthdate || !nDni || !username || !password) {
        const err = new CustomError("Required data is missing",400)
            next(err)
    } else next()
}

export default validateDataExistence
