import React, { useState, useEffect } from "react";
import authService from "../../services/auth/auth.service";
import { useNavigate } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import GoogleButton from 'react-google-button';
import SignUpStepper from "../../pages/signin/component/SignUpStepper";
import Modal from 'react-bootstrap/Modal';

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(authService.getCurrentUser());

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
  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLoginGoogle = async (googleData) => {
    console.log(googleData.tokenId);
    try {
      await authService.loginGoogle(googleData.tokenId).then(
        (data) => {
          navigate("/");
          // setUser(data);
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }


  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (user && user.status == 'new')
      handleShow()
    else if (user)
      navigate("/")
  }, [user]);


  const handleComplete = () => {
    handleClose()
    navigate("/")
  }

  return (

    <div>
      <form className="mt-4" onSubmit={handleLogin}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sign in with Google"


          render={renderProps => (

            <GoogleButton className="googleBtn" onClick={renderProps.onClick} disabled={renderProps.disabled} type="light"
            >Sign in with Google</GoogleButton>
          )}
          onSuccess={handleLoginGoogle}
          onFailure={handleFailure}
          cookiePolicy={'single_host_origin'} />
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button className="btn rounded-pill pxp-modal-cta" type="submit" >Continue</button>

        </div>
        <div className="mt-4 text-center pxp-modal-small">
          <a href="https://pixelprime.co/themes/jobster/sign-in.html#" className="pxp-modal-link">Forgot password</a>
        </div>
        <div className="mt-4 text-center pxp-modal-small">
          New to Jobster? <a role="button" className="" data-bs-target="#pxp-signup-modal" data-bs-toggle="modal" data-bs-dismiss="modal">Create an account</a>
        </div>

      </form>
      <Modal fullscreen={true} show={show} onHide={handleClose} className="modal fade pxp-user-modal" id="pxp-signin-modal">
        {/* <Modal.Header closeButton>
                    </Modal.Header> */}
        <div className="pxp-user-modal-fig text-center">
          {/* <!-- <img src="./Jobster - Home v1_files/signin-fig.png" alt="Sign in"> --> */}
        </div>



        <SignUpStepper onComplete={handleComplete} />

      </Modal>
    </div>
  );

};

export default LoginForm;
