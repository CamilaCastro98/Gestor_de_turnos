import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"
import { getUsersService } from "../../services/usersServices"

const validateEmail = async (req: Request,res: Response,next: NextFunction) => {
    const {email} = req.body
    const regexMail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/

    if (!regexMail.test(email)) {
        const err = new CustomError("Incorrect email",400)
            next(err)
    }
    const users = await getUsersService()
    for (const user of users) {
        if (user.email.includes(email)) {
            const err = new CustomError("This mail is already in use",400)
            next(err)
        }
    } next()
}

export default validateEmail