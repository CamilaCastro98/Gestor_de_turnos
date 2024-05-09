const Appointment = ({date,time,status,id}) => {
    return (
        <div key={id}>
            <span>Date: {date}</span>
            <span>Time: {time}</span>
            <span>Status: {status}</span>

        </div>
    )
}

export default Appointment