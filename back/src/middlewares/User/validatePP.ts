import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"

const validatePP = (req: Request,res: Response,next: NextFunction) => {
    const {profilePicture} = req.body
    const regexURL = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/

    if (!regexURL.test(profilePicture)) {
        const err = new CustomError("Incorrect URL",400)
            next(err)
    } else next()
}

export default validatePP