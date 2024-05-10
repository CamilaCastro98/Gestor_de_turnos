import axios from "axios"
import {Formik,Field,Form,ErrorMessage} from "formik"
import { useState } from "react"


const Login = () => {
   const [ userLog, setUserLog ] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (event) => {
        const {name,value} = event.target
        setUserLog({...userLog, [name]:value})
    }

    const sendRequest = async () => {
        try {
           await axios.post("http://localhost:3000/users/login",userLog)
           alert("Your are logged in!")
        } catch(error) {
                alert("User couldn't be logged in")
        }
    }

    return (
            <Formik
            initialValues={{
                username: "",
                password: ""
            }}
            onSubmit={sendRequest}>
                <Form>

                    <label>username</label>
                    <Field  onChange={handleInputChange}
                            value={userLog.username}
                            type="text" 
                            name="username" 
                            placeholder="Enter username" ></Field>
                    <ErrorMessage name="username" ></ErrorMessage>

                    <label>password</label>
                    <Field  onChange={handleInputChange}
                            value={userLog.password}
                            type="password" 
                            name="password" 
                            placeholder="Enter password" ></Field>
                    <ErrorMessage name="password" ></ErrorMessage>

                    <button type="submit">SUBMIT</button>
                </Form>
            </Formik>
    ) 
    
}

export default Login