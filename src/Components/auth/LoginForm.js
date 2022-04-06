import React, { useState } from "react";
import authService from "../../services/auth/auth.service";
import {useNavigate} from "react-router-dom";

const LoginForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await authService.login(email, password).then(
          (data) => {
            navigate("/");

          },
          (error) => {
            console.log(error);
          }
        );
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
        
        <form className="mt-4" onSubmit={handleLogin}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="pxp-signin-email" placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

                            />
                            <label htmlFor="pxp-signin-email">Email address</label>
                            <span className="fa fa-envelope-o"></span>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="pxp-signin-password" placeholder="Password"
                                                                    value={password}
                                                                    onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="pxp-signin-password">Password</label>
                            <span className="fa fa-lock"></span>
                        </div>
                        <button className="btn rounded-pill pxp-modal-cta" type="submit" >Continue</button>
                        <div className="mt-4 text-center pxp-modal-small">
                            <a href="https://pixelprime.co/themes/jobster/sign-in.html#" className="pxp-modal-link">Forgot password</a>
                        </div>
                        <div className="mt-4 text-center pxp-modal-small">
                            New to Jobster? <a role="button" className="" data-bs-target="#pxp-signup-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Create an account</a>
                        </div>
                    </form>
    );
  };
  
  export default LoginForm;
  