import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Appointment } from "../entities/Appointment"
import { Credential } from "../entities/Credential"
import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME, HOST } from "./envs"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,  
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    //dropSchema:true,
    logging: ["error"],
    entities: [User,Appointment,Credential],
    subscribers: [],
    migrations: [],
})

export const UserModel = AppDataSource.getRepository(User)
export const CredentialModel = AppDataSource.getRepository(Credential)
export const AppointmentModel = AppDataSource.getRepository(Appointment)