import { NextFunction, Request, Response } from "express"
import CustomError from "../../errors/CustomError"

const validateDataExistence = (req: Request,res: Response,next: NextFunction) => {
    const { name,email,birthdate, nDni, username, password } = req.body
    const missingData = []

        if (!name) {
            missingData.push("name");
        }
        if (!email) {
            missingData.push("email");
        }
        if (!birthdate) {
            missingData.push("birthdate");
        }
        if (!nDni) {
            missingData.push("nDni");
        }
        if (!username) {
            missingData.push("username");
        }
        if (!password) {
            missingData.push("password");
        }
    
        if (missingData.length) {
            const err = new CustomError(`Required data is missing: ${missingData}`, 400);
            next(err);
        } else {
            next();
        }
};

export default validateDataExistence
