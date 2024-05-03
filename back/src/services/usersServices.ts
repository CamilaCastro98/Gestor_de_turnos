import UserDto from "../dto/UserDto"
import { registerCredentialsService } from "./credentialsServices"
import { User } from "../entities/User"
import { UserModel } from "../configs/data-source"


export const getUsersService = async (): Promise<User[]> => {
        const users = await UserModel.find({
                relations: {
                        credentialsId: true,
                }
        })
        return users

}

export const getUserByIdService = async (userId: number): Promise<User | null> => {
        const user = await UserModel.findOneBy({id:userId})
        return user 
}

export const registerUserService = async (userData: UserDto): Promise<User> => {
        const {name,email,profilePicture, birthdate, nDni, username, password, active} = userData
        //Registro las credenciales nuevas y espero a que retorne la instancia de la credencial
        const newCredentials = await registerCredentialsService(username,password)
       //Creo user con referencia de las credenciales que me acaba de retornar
        const newUser = await UserModel.create(
           {name, 
           profilePicture, 
           email,
           birthdate,
           nDni,
           active,
           credentialsId: newCredentials
       })
        const results = await UserModel.save(newUser)
        return results

}

export const deleteUsersService = async (userId: number): Promise<string> => {
    await UserModel.delete(userId)
    return "User deleted"
}