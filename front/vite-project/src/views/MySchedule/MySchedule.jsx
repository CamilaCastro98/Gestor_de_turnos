import {mySchedule} from "../../helpers/mySchedule"
import Appointment from "../../components/Appointment/Appointment"
import {useEffect, useState} from 'react'
import styles from "./MySchedule.module.css"
import axios from "axios"
import NewAppointment from "../../components/newAppointment/NewAppointment"

const MySchedule = () => {
    const [appointments, setAppointments] = useState([])
    const [formVisibility,setFormVisibility] = useState(styles.disableForm)
    const userId = 1

    useEffect(()=>{
        axios.get("http://localhost:3000/appointments").then((res)=> {
            const filteredAppointments = res.data.filter(appointment => appointment.userId.id === userId)
            setAppointments(filteredAppointments)
        })
    },[])

    const handleNewApp = () => {
        setFormVisibility(styles.enableForm)
    }

    const handleCancelNewApp = () => {
        setFormVisibility(styles.disableForm)
    }

    return (
        <div className={styles.scheduleContainer}>
        <img className={styles.scheduleImg} src="../src/assets/schedule.jpg" alt="scheduleBackground" />
        <div className={styles.appsContainer}>
            <div className={styles.title}>
                <h1>My schedule</h1>
                <button onClick={handleNewApp} className={styles.newApp}>New Appointment</button>
            </div>
            <hr />
            <div className={styles.appData}>
                <ul>
                    <li>Date</li>
                    <li>Time</li>
                    <li>Service</li>
                    <li>Status</li>
                </ul>
                <div className={formVisibility}>
                    <div className={styles.newAppContainer}>
                        < NewAppointment />
                         <button className={styles.cancelNew} onClick={handleCancelNewApp}>Cancel</button>
                    </div>
                </div>
                {appointments.map(app => {
                    return (
                    <Appointment key={app.id} {...app}/>)
                })}
            </div>
        </div>
        </div>
    )

}

export default MySchedule