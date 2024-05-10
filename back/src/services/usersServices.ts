import UserDto from "../dto/UserDto";
import { registerCredentialsService, validateCredentialsService } from "./credentialsServices";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";
import { Credential } from "../entities/Credential";

export const getUsersService = async (): Promise<User[]> => {
  const users = await UserRepository.find({
    relations: {
      credentialsId: true,
      history: true
    },
  });
  return users;
};

export const getUserByIdService = async (
  userId: number
): Promise<User | null > => {
  const user = await UserRepository.findOne({
    where: {id: userId},
    relations: {
      history: true
    }
  });
  return user
};

export const registerUserService = async (userData: UserDto): Promise<User> => {
  const {
    name,
    email,
    profilePicture,
    birthdate,
    nDni,
    username,
    password,
  } = userData;
  //Registro las credenciales nuevas y espero a que retorne la instancia de la credencial
  const newCredentials = await registerCredentialsService(username, password);
  //Creo user con referencia de las credenciales que me acaba de retornar
  const newUser = await UserRepository.create({
    name,
    profilePicture,
    email,
    birthdate,
    nDni,
    credentialsId: newCredentials,
    active: true
  });
  const results = await UserRepository.save(newUser);
  return results;
};

export const loginUserService = async (username: string,password: string): Promise<number | undefined | string> => {
      const verifyCredentials: number | undefined | string = await validateCredentialsService(username,password)
      return verifyCredentials
  }

export const deleteUsersService = async (userId: number): Promise<string> => {
  await UserRepository.delete(userId);
  return "User deleted";
};
