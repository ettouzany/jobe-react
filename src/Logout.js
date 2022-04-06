import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import authService from "./services/auth/auth.service";
const Logout = () => {
    authService.logout();
    const history = useHistory();
    history.push("/login");
    return (
        <div>
            <h1>Logout</h1>
        </div>
    );
  };
  
  export default Logout;