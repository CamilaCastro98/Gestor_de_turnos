import { NextFunction, Request, Response } from "express"
import { getUsersService,registerUserService,deleteUsersService, getUserByIdService, loginUserService } from "../services/usersServices"
import { User } from "../entities/User"
import CustomError from "../errors/CustomError"
import { profile } from "console"
import UserDto from "../dto/UserDto"

export const getUsers = async (req: Request,res: Response): Promise<void> => {
    const users: User[] = await getUsersService()
    res.status(200).json(users)
}

export const getUserById = async (req: Request,res: Response,next: NextFunction): Promise<void> => {
    const userId:number = parseInt(req.params.id,10)
        const userById = await getUserByIdService(userId)
        if (userById) res.status(200).json(userById)
        else {
            const err = new CustomError(`There's no user with id ${userId}`,404)
            next(err)
        }
    
}
export const registerUser = async (req: Request,res: Response): Promise<void> => {
    const { name,email,birthdate, nDni, username, password } = req.body
    const newUserDto: UserDto = {name,email,birthdate,nDni,username,password}
    const newUser: User = await registerUserService(newUserDto)
    res.status(201).json(newUser)
}

export const loginUser = async (req: Request,res: Response,next: NextFunction) => {
    const {username,password} = req.body
    const userId:number | undefined | string = await loginUserService(username,password)
    if (typeof userId === "string") {
        const err = new CustomError("Invalid password",404)
        next(err)
    }
    if (userId && typeof userId === "number") {
        const user = await getUserByIdService(userId)
        res.status(200).json({
            "login": true,
            user
        })
    } else {
        const err = new CustomError("Invalid username",404)
        next(err)
    }
}


export const deleteUser = async (req: Request,res: Response): Promise<void> => {
    const userId:number = parseInt(req.params.id,10)
    const deleteUser = await deleteUsersService(userId)
    res.status(200).json({ message: "user deleted"})
}