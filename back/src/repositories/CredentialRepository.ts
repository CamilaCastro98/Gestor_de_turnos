import { AppDataSource } from "../configs/data-source"
import { Credential } from "../entities/Credential"


export const CredentialRepository = AppDataSource.getRepository(Credential)