import { Request, Response } from "express"
import { getUsersService,registerUserService,deleteUsersService } from "../services/usersServices"
import IUser from "../interfaces/IUser"

export const getUsers = async (req: Request,res: Response) => {
    const users: IUser[] = await getUsersService()
    res.status(200).json(users)
}

export const getUserId = async (req: Request,res: Response) => {
    console.log("Este controlador muestra user según id")
}

export const registerUser = async (req: Request,res: Response) => {
    const { name,mail,profilePicture,active } = req.body
    const newUser: IUser = await registerUserService({name,mail,profilePicture,active})
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