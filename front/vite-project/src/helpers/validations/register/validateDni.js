const validateDni = (values) => {
    const {nDni} = values
    const errors = {}

    if (nDni < 10000000 || nDni > 99999999) {
        errors.nDni = "DNI must be 8 digits long"
    }

    return errors
}

export default validateDni