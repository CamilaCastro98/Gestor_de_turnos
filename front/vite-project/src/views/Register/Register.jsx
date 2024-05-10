import axios from "axios"
import {Formik,Field,Form,ErrorMessage} from "formik"
import { useState } from "react"


const Register = () => {
   const [ form, setForm ] = useState({
        name: "",
        email: "",
        birthdate: "",
        dni: null,
        username: "",
        password: "",
        profilePic: null
    })

    const handleInputChange = (event) => {
        const {name,value,type} = event.target
        const inputValue = type === "file" ? event.target.files[0] : value
        setForm({...form, [name]:inputValue})
    }

    const sendRequest = async () => {
        try {
           await axios.post("http://localhost:3000/users/register",form)
           alert("User created succesfully!")
        } catch(error) {
                alert("User couldn't be created")
        }
    }

    return (
            <Formik
            initialValues={{
                name: "",
                email: "",
                birthdate: "",
                dni: null,
                username: "",
                password: "",
                profilePic: null
            }}
            onSubmit={sendRequest}>
                <Form>
                    <label>name</label>
                    <Field  onChange={handleInputChange}
                            value={form.name}
                            type="text" 
                            name="name" 
                            placeholder="Your name" ></Field>
                    <ErrorMessage name="name" ></ErrorMessage>

                    <label>email</label>
                    <Field  onChange={handleInputChange}
                            value={form.email}
                            type="text" 
                            name="email" 
                            placeholder="email@example.com" ></Field>
                    <ErrorMessage name="email" ></ErrorMessage>

                    <label>birthdate</label>
                    <Field  onChange={handleInputChange}
                            value={form.birthdate}
                            type="text" 
                            name="birthdate" 
                            placeholder="YYYY-MM-DD" ></Field>
                    <ErrorMessage name="birthdate" ></ErrorMessage>

                    <label>dni</label>
                    <Field  onChange={handleInputChange}
                            value={form.dni}
                            type="number" 
                            name="dni" 
                            placeholder="12345678" ></Field>
                    <ErrorMessage name="dni" ></ErrorMessage>

                    <label>username</label>
                    <Field  onChange={handleInputChange}
                            value={form.username}
                            type="text" 
                            name="username" 
                            placeholder="user123" ></Field>
                    <ErrorMessage name="username" ></ErrorMessage>

                    <label>password</label>
                    <Field  onChange={handleInputChange}
                            value={form.password}
                            type="password" 
                            name="password" 
                            placeholder="asdf123" ></Field>
                    <ErrorMessage name="password" ></ErrorMessage>

                    <label>profile picture</label>
                    <Field  onChange={handleInputChange}
                            value={form.profilePic}
                            type="file" 
                            name="profilePic" ></Field>
                    <ErrorMessage name="profilePic" ></ErrorMessage>

                    <button type="submit">SUBMIT</button>
                </Form>
            </Formik>
    ) 
    
}

export default Register