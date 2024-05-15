const validateNewApp = (values)=> {
    let errors = {}
    const {date,time,service} = values
    const today = new Date()
    const newDate = new Date(date)
    const newTime = parseInt(time.slice(0,2))

    if (!date || (newDate < today)) {
        errors.date = "Please enter a future date starting tomorrow"
    }
    if (!time || newTime < 9 || newTime > 21) {
        errors.time = "Please enter a valid time between 9am and 9pm"
    }
    if (!service) {
        errors.service = "Please choose a service"
    }
    return errors
}

export default validateNewApp