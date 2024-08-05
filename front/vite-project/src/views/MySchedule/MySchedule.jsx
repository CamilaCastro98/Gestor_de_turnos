import {mySchedule} from "../../helpers/mySchedule"
import Appointment from "../../components/Appointment/Appointment"
import {useEffect, useState} from 'react'
import styles from "./MySchedule.module.css"
import axios from "axios"
import NewAppointment from "../../components/newAppointment/NewAppointment"
import { useSelector, useDispatch} from "react-redux"
import { getAppointments, selectUserId,selectAppointments} from "../../redux/reducer"

const MySchedule = () => {
    const [update, setUpdate] = useState(0)
    const [formVisibility,setFormVisibility] = useState(styles.disableForm)
    const userLogged = useSelector(selectUserId)
    const dispatch = useDispatch()
    const appointments = useSelector(selectAppointments);

    useEffect(() => {
        if (userLogged) {
            axios.get(`http://localhost:3000/appointments/schedule/${userLogged}`)
                .then((res) => {
                    dispatch(getAppointments(res.data))
                    setFormVisibility(styles.disableForm)
                })
                .catch((error) => {
                    console.error("Error fetching appointments:", error);
                });
        } else {
            console.log("userLogged is not defined");
        }
    }, [dispatch,userLogged, update])

    useEffect(() => {
        console.log(appointments);
    }, [appointments]);

    const handleNewApp = () => {
        setFormVisibility(styles.enableForm)
    }

    const handleCancelNewApp = () => {
        setFormVisibility(styles.disableForm)
    }

    const handleUpdate = (data) => {
        setUpdate(data)
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
                        < NewAppointment onData={handleUpdate} />
                        <button className={styles.cancelNew} onClick={handleCancelNewApp}>Cancel</button>
                    </div>
                </div>
                {appointments && appointments.length > 0 ? (
            appointments.map((app) => <Appointment key={app.id} {...app} />)
          ) : (
            <p className={styles.noAppointments}>No appointments scheduled yet!</p>
          )}
            </div>
        </div>
        </div>
    )

}

export default MySchedule