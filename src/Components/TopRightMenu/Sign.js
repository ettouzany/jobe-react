import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import LoginForm from '../auth/LoginForm';
import { useGoogleOneTapLogin } from "react-google-one-tap-login";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth/auth.service";

const Sign = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();



    const handleLoginGoogle = async (googleData) => {
        console.log(googleData);
        try {
          await authService.loginGoogle(googleData.credential).then(
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

    useGoogleOneTapLogin({
        onError: error => console.log(error),
        // onSuccess: response => handleLoginGoogle(response),

        googleAccountConfigs: {
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: data=> handleLoginGoogle(data)
        },
    });

    return (
        <div>
            <a

                className="btn rounded-pill pxp-nav-btn pxp-user-nav-trigger pxp-on-light"
                data-bs-toggle="modal"
                onClick={handleShow}
                role="button"
            >
                Sign in / Login
            </a>
            <Modal centered={true} show={show} onHide={handleClose} className="modal fade pxp-user-modal" id="pxp-signin-modal">
                <Modal.Header closeButton>
                </Modal.Header>
                <div className="modal-body">
                    <div className="pxp-user-modal-fig text-center">
                        {/* <!-- <img src="./Jobster - Home v1_files/signin-fig.png" alt="Sign in"> --> */}
                    </div>
                    <h5 className="modal-title text-center mt-4" id="signinModal">Welcome back!</h5>
                    <LoginForm />
                </div>
            </Modal>

            
        </div>

    )
}

export default Sign;