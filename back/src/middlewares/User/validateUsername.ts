import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"
import { getUsersService } from "../../services/usersServices"

const validateUsername = async (req: Request,res: Response,next: NextFunction) => {
    const {username} = req.body

    if(username.length < 5 || username.length > 15) {
        const err = new CustomError("Name length must be greater than 5 and less than 15",400)
        next(err)
    }

    const regexUsername = /^[a-zA-Z0-9_\-.]+$/
    if (!regexUsername.test(username)) {
        const err = new CustomError("Invalid username format. Please use only letters, numbers, hyphens, underscores, and dots",400)
            next(err)
    }

    const users = await getUsersService()
    for (const user of users) {
        if (user.credentialsId.username.includes(username)) {
            const err = new CustomError("This username is already in use",400)
            next(err)
        }
    } next()
}

export default validateUsername