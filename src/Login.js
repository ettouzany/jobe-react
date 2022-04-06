import React, { Component } from "react";
import LoginForm from "./Components/auth/LoginForm";
class Login extends Component {
    constructor() {
        super();
        this.state = {
        loading: true,
        };
    } 



    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm />

            </div>
        );
    }
}

export default Login;
