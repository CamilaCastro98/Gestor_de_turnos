import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity()
export class Appointment {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column()
    time: string

    @Column()
    status: string

    @ManyToOne(()=> User,(user)=> user.history)
    userId: number
}