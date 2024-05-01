import IUser from "../interfaces/IUser"
import UserDto from "../dto/UserDto"

let users: IUser[] = []
let id: number = 1

export const getUsersService = async (): Promise<IUser[]> => {
    return users
}

export const registerUserService = async (userData: UserDto): Promise<IUser> => {
    const { name,mail,profilePicture,active } = userData
    const newUser: IUser = {
        id: id,
        name: name,
        mail: mail,
        profilePicture: profilePicture,
        active: active
    }
    users.push(newUser)
    id++
    return newUser
}

export const deleteUsersService = async (userId: number): Promise<IUser[]> => {
    users = users.filter((user: IUser)=> user.id !== userId)
    return users
}