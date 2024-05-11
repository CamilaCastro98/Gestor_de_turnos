const validateDataExistence = (values) => {
    const { name,email, birthdate, nDni, username, password } = values
    const errors = {}
    
    if (!name) {
        errors.name = "Your name is required"
    }
    if (!email) {
        errors.email = "Your email is required"
    }
    if (!birthdate) {
        errors.birthdate = "Your birthdate is required"
    }
    if (!nDni) {
        errors.nDni = "Your dni is required"
    }
    if (!username) {
        errors.username = "Your username is required"
    }
    if (!password) {
        errors.password = "Your password is required"
    }

    return errors
}

export default validateDataExistence