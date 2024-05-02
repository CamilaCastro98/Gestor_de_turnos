import { Request, Response } from "express"
import { getUsersService,registerUserService,deleteUsersService, getUserByIdService } from "../services/usersServices"
import IUser from "../interfaces/IUser"

export const getUsers = async (req: Request,res: Response) => {
    const users: IUser[] = await getUsersService()
    res.status(200).json(users)
}

export const getUserById = async (req: Request,res: Response) => {
    const userId:number = parseInt(req.params.id,10)
    const userById = await getUserByIdService(userId)
    res.status(200).json(userById)
}

export const registerUser = async (req: Request,res: Response) => {
    const { name,email,profilePicture,birthdate, nDni, username, password,active } = req.body
    const newUser: IUser = await registerUserService({name,email,profilePicture, birthdate, nDni, username,password, active})
    res.status(201).json(newUser)
}

export const loginUser = async (req: Request,res: Response) => {
    console.log("Este controlador sirve para que el usuario pueda hacer login a la app")
}


export const deleteUser = async (req: Request,res: Response) => {
    const userId:number = parseInt(req.params.id,10)
    const deleteUser = await deleteUsersService(userId)
    res.status(200).json({ message: "user deleted"})
}