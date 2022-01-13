import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

    
const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const user = {};
}
const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(username,password);
};

async function loginUser(userUsername, userPassword )  {
    let payload =
    {
        username: userUsername,
        password: userPassword 
    };
    
    let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', payload);


    localStorage.setItem("access", response.data.access);
    window.location = "/";
    //resets form
    setUserName("");
    setPassword("");
    return localStorage;
{    
    return (
        <div class="wrapper fadeInDown">
            <div id="formContent">
                <div class="fadeIn first">
                    <br/>
                    <br/>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      id="login"
                      class="fadeIn second"
                      name="username"
                      value={username}
                      placeholder="Username"
                      onChange={(event) => setUserName(event.target.value)}
                    />
                    <input
                      type="password"
                      id="password"
                      class="fadeIn third"
                      name="password"
                      value={password} 
                      placeholder="Password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <input type="submit" class="fadeIn fourth" value="Log In" />
                  </form>                    
                </div>
              
        </div>
        )
};    
function Login(props){

    const Login = () => {
        async function send(values) {
            const response = await axios.post("https://localhost:44394/api/authentication", values);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                window.location.reload();
            }
        }
    }

    const Form = (callback) => {
        const [formValues, setFormValues] = useState({});
    
        const handleChange = (event) => {
            event.persist();
    
            setFormValues({ ...formValues, [event.target.name]: event.target.value })
        }
    
        const handleSubmit = (event) => {
            event.preventDefault();
            callback();
        }
    
        // return { formValues, handleChange, handleSubmit };

    return {
        <div>
            <div>
            <center><h3> Please Enter Your Login Information  </h3></center>
                    <form onSubmit={Login}>
                    <center><label for="Email">Email Address:</label><input type="text"></input></center>
                    <center><label for="Password">Password:</label><input type="text"></input></center>
                    <center><button type="submit" className='button1'>Login</button></center>
                    </form>
            </div>
        </div>
    }
}






export default Login; 