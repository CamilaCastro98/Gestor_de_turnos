import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Appointment } from "../entities/Appointment"
import { Credential } from "../entities/Credential"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "obaSikDAta78.",
    database: "turn_manager",
    synchronize: true,
    logging: ["error"],
    entities: [User,Appointment,Credential],
    subscribers: [],
    migrations: [],
})

export const UserModel = AppDataSource.getRepository(User)
export const CredentialModel = AppDataSource.getRepository(Credential)
export const AppointmentModel = AppDataSource.getRepository(Appointment)