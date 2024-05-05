import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"

const validateTypes = (req: Request,res: Response,next: NextFunction) => {
    const { name,email,profilePicture,birthdate, nDni, username, password } = req.body
    const incorrectTypes:string[] = []

    if(typeof name !== "string"){
        incorrectTypes.push(`name waits for a string and recieved ${typeof name} instead`)
    }
    if(typeof email !== "string"){
        incorrectTypes.push(`email waits for a string and recieved ${typeof email} instead`)
    }
    if(typeof profilePicture !== "string"){
        incorrectTypes.push(`profilePicture waits for a string and recieved ${typeof profilePicture} instead`)
    }
    if(typeof birthdate !== "string"){
        const err = new CustomError(`birthdate waits for a string and recieved ${typeof birthdate} instead`,400)
        next(err)
    }
    if(typeof nDni !== "number"){
        incorrectTypes.push(`nDni waits for a number and recieved ${typeof nDni} instead`)
    }
    if(typeof username !== "string"){
        incorrectTypes.push(`username waits for a string and recieved ${typeof username} instead`)
    }
    if(typeof password !== "string"){
        incorrectTypes.push(`password waits for a string and recieved ${typeof password} instead`)
    }

    if (incorrectTypes.length) {
        const err = new CustomError(`Incorrect type: ${incorrectTypes.join(" ; ")}`,400)
            next(err)
    } else next()
}
export default validateTypes