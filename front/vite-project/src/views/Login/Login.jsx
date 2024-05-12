import axios from "axios"
import {Formik,Field,Form,ErrorMessage} from "formik"
import validateLogin from "../../helpers/validations/login"
import { useNavigate } from "react-router-dom"


const Login = () => {

    const navigate = useNavigate()

    const handleOnSubmit = async (values) => {
        try {
           await axios.post("http://localhost:3000/users/login",values)
           alert("Your are logged in!")
           navigate("/home")
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
                username: "",
                password: ""
            }}
            validate={validateLogin}
            onSubmit={handleOnSubmit}>
                <Form>

                    <label>username</label>
                    <Field  type="text" 
                            name="username" 
                            placeholder="Enter username" ></Field>
                    <ErrorMessage name="username" ></ErrorMessage>

                    <label>password</label>
                    <Field  type="password" 
                            name="password" 
                            placeholder="Enter password" ></Field>
                    <ErrorMessage name="password" ></ErrorMessage>

                    <button type="submit">SUBMIT</button>
                </Form>
            </Formik>
    ) 
    
}

export default Login