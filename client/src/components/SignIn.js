import React, { useState, useEffect } from 'react';
import "./SignIn.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const SignIn = (props) => {
    let navigate = useNavigate();
    let [login, SetLogin] = useState([]);
    const [formValues, setFormValues] = useState({ username: "", password: "" });


    // Manage Field Change
    const handleChange = (event) => {
         console.log(event.target);
        const { name, value } = event.target; //destructuring
        setFormValues({ ...formValues, [name]: value });
         console.log(formValues);
    }

    useEffect(() => {
        loginData();
    }, []);

    function loginData() {
        axios.get("/login")
            .then((response) => {
                console.log("in logindata",response.data);
                SetLogin(login = Array.from (response.data));
            }
            )
    }
    function authenticate() {
        console.log("in authenticate")
        let flag1=0
        let flag2=0
        let admin=0
    login.map((x, key) => (
        (x.username===formValues.username && x.password===formValues.password)?flag1=1:flag2=0
    ))
    login.map((x, key) => (
        ("Admin"===formValues.username && "12345"===formValues.password)?admin=1:flag2=0
    ))
    if (admin===1)
    {navigate("/", { replace: true })
        props.setlogin(2)
    }
    else if (flag1===1)
    {
        navigate("/articlelist", { replace: true })
        props.setlogin(1)
    }
    
    else
    alert("Invalid Username or Password")
    }

    const clicked = (event) => {
        navigate("/signup", { replace: true })
    }
    return (
        <>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className="signin" onSubmit={clicked}>
                <h3>Login Here</h3>

                <label for="username">Username - Admin</label>
                <input type="text" name="username" placeholder="username" id="username" onChange={handleChange} value={formValues.username}/>

                    <label for="password">Password - 12345</label>
                    <input type="password" name="password" placeholder="Password" id="password" onChange={handleChange} value={formValues.password} />

                        <button onClick={authenticate}>Log In</button>
                        <label>Not Registered?</label>
                        <button onClick={clicked}>Sign Up Here!!!!</button>
                        <div class="social">
                            <div className="go"><i className="fab fa-google"></i>  Google</div>
                            <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                        </div>
                    </form>
                </>
                );
};

                export default SignIn;