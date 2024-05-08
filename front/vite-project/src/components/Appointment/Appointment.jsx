const Appointment = ({date,time,status}) => {
    return (
        <div>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Status: {status}</p>

        </div>
    )
}

export default Appointment