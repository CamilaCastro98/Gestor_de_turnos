const validateLogin = (values)=> {
    let errors = {}
    const {username,password} = values

    if (!username) {
        errors.username = "Please enter username"
    }
    if (!password) {
        errors.password = "Please enter password"
    }
    return errors
}

export default validateLogin