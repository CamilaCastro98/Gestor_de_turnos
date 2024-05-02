import IUser from "../interfaces/IUser"
import UserDto from "../dto/UserDto"
import { registerCredentialsService } from "./credentialsServices"

let usersArray: IUser[] = []
let id: number = 1

export const getUsersService = async (): Promise<IUser[]> => {
    return usersArray
}

export const getUserByIdService = async (userId: number): Promise<IUser | Error> => {
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].id === userId) {
            return usersArray[i]
        }
    }
    return new Error ('No se encontró usuario')
}

export const registerUserService = async (userData: UserDto): Promise<IUser> => {
    const {name,email,profilePicture, birthdate, nDni, username, password, active} = userData
    const credentialsId: number = await registerCredentialsService(username,password)
    const newUser: IUser = {
        id: id,
        name: name,
        email: email,
        profilePicture: profilePicture,
        birthdate: birthdate,
        nDni: nDni,
        credentialsId: credentialsId,
        active: active
    }
    usersArray.push(newUser)
    id++
    return newUser
}

export const deleteUsersService = async (userId: number): Promise<IUser[]> => {
    usersArray = usersArray.filter((user: IUser)=> user.id !== userId)
    return usersArray
}