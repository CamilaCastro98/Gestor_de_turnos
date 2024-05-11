import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"

const validatePP = (req: Request,res: Response,next: NextFunction) => {
    const {profilePicture} = req.body
    const regexImg = /\.(jpg|jpeg|png)$/i
    if (profilePicture) {
        if (!regexImg.test(profilePicture)) {
            const err = new CustomError("Invalid extention for profile picture (only jpg,jpeg and png accepted)j",400)
                next(err)
        }
    }
    else next()
}

export default validatePP