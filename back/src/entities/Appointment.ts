import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Status,Service } from "../interfaces/IAppointment"

@Entity()
export class Appointment {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column()
    time: string

    @Column()
    service: Service

    @Column()
    state: Status

    @ManyToOne(() => User, (user) => user.history)
    @JoinColumn({ name: "userId" })
    user: User
}