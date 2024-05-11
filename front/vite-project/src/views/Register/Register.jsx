import axios from "axios"
import {Formik,Field,Form,ErrorMessage} from "formik"
import validations from "../../helpers/validations/register"
import styles from "./Register.module.css"

const Register = () => {

    const sendRequest = async (values) => {
        try {
           await axios.post("http://localhost:3000/users/register",values)
           alert("User created succesfully!")
        } catch(error) {
                if (error.response && error.response.data && error.response.data.error) {
                        alert("Error: " + error.response.data.error);
                    } else if (error.message) {
                        alert("Error: " + error.message); 
                    } else {
                        alert("An unexpected error occurred"); 
                    }
        }
    }

    return (
            <Formik
            initialValues={{
                name: "",
                email: "",
                birthdate: "",
                nDni: "",
                username: "",
                password: ""
            }}
            validate={validations}
            onSubmit={(values, { setSubmitting }) => {
                sendRequest(values);
                setSubmitting(false);
              }}>
                <Form className="styles.form">
                    <label>name</label>
                    <Field  type="text" 
                            name="name" 
                            placeholder="Your name" ></Field>
                    <ErrorMessage name="name" ></ErrorMessage>

                    <label>email</label>
                    <Field  type="text" 
                            name="email" 
                            placeholder="email@example.com" ></Field>
                    <ErrorMessage name="email" ></ErrorMessage>

                    <label>birthdate</label>
                    <Field  type="text" 
                            name="birthdate" 
                            placeholder="YYYY-MM-DD" ></Field>
                    <ErrorMessage name="birthdate" ></ErrorMessage>

                    <label>dni</label>
                    <Field  type="number" 
                            name="nDni" 
                            placeholder="12345678" ></Field>
                    <ErrorMessage name="nDni" ></ErrorMessage>

                    <label>username</label>
                    <Field  type="text" 
                            name="username" 
                            placeholder="user123" ></Field>
                    <ErrorMessage name="username" ></ErrorMessage>

                    <label>password</label>
                    <Field  type="password" 
                            name="password" 
                            placeholder="asdf123" ></Field>
                    <ErrorMessage name="password" ></ErrorMessage>

                    <button type="submit">SUBMIT</button>
                </Form>
            </Formik>
    ) 
    
}

export default Register