import {mySchedule} from "../helpers/mySchedule"
import Appointment from "../components/Appointment/Appointment"
import {useEffect, useState} from 'react'
import styles from "./MySchedule.module.css"
import axios from "axios"

const MySchedule = () => {
    const [appointments, setAppointments] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/appointments").then((res)=> setAppointments(res.data))
    },[])

    return (
        <div className={styles.appsContainer}>
            <h1>My Appointments</h1>
            {appointments.map(app => {
                return <Appointment key={app.id} {...app}/>
            })}

        </div>
    )

}

export default MySchedule