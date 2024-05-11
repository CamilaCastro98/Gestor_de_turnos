const validateUsername = (values) => {
    const { username } = values;
    const errors = {};

    if (username.length < 5 || username.length > 15) {
        errors.username = "Username must be between 5 and 15 characters";
    }

    const regexUsername = /^[a-zA-Z0-9_\-.]+$/;
    if (!regexUsername.test(username)) {
        errors.username = "Username can only contain letters, numbers, hyphens, underscores, and periods";
    }

    return errors;
};

export default validateUsername;