import React, { useState } from "react"
//import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Button, Input } from "@mui/material"

const Register = () => {

    const history = useHistory()
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        // reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password ){
            axios.post("http://localhost:1800/adduser", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invalid input")
        }
        
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>REGISTER FOR AUTO MOBILE MANAGEMENT SYSTEM WEBSITE</h1>
            <Input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></Input><br></br>
            <Input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></Input><br></br>
            <Input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></Input><br></br>
            <Input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></Input><br></br><br></br>
            <Button variant="contained" className="button" onClick={register} >Register</Button>
            <div>or</div>
            <Button variant="contained" className="button" onClick={() => history.push("/login")}>Login</Button>
        </div>
    )
}

export default Register