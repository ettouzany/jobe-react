import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import jQuery from "jquery/dist/jquery.min.js";
import { render } from "react-dom";
import { useState, useEffect } from "react";
import AuthService from "./services/auth/auth.service";

import { BrowserRouter , Route, Routes, Navigate, Link , Router, useNavigate} from "react-router-dom";
import { StrictMode } from "react";
import Search from "./Search";
import Menu from "./Components/Menu";
import Index from "./Index";
import SignUp from "./SignUp";
import Login from "./Login";
import LoginForm from "./Components/auth/LoginForm";
import Logout from "./Logout";
import CreateJob from "./dashboard/company/CreateJob";
import DashboardLayout from "./dashboard/DashboardLayout";
import Modal from 'react-bootstrap/Modal'
import ProfileEdit from "./dashboard/company/ProfileEdit";
const App = () => {

  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      handleClose();    
    }
  }, [localStorage.getItem("user")]);

  const logOut = () => {
    AuthService.logout();
    console.log("logout");
    setCurrentUser(undefined);
    navigate("/login");
  };

  return (
    <div>
        <Menu loginCallback={handleShow} logoutCallback={logOut} user={currentUser} />
        <Routes>
          <Route path="dashboard" element={!currentUser ? ( <Login /> ) : (  <DashboardLayout/>)} >
            <Route path="" element={<CreateJob />}/>          
            <Route path="post" element={<CreateJob />}/>          
            <Route path="profile" element={<ProfileEdit />}/>          
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={ !currentUser ? ( <SignUp /> ) : (  <Navigate to="/" replace /> )}/>
          <Route path="/login" element={ !currentUser ? ( <Login /> ) : (  <Navigate to="/" replace /> )}/>          
          <Route path="/" element={<Index />} />
          
        </Routes>

        <Modal centered={true} show={show} onHide={handleClose} className="modal fade pxp-user-modal" id="pxp-signin-modal">
        <Modal.Header closeButton>
        </Modal.Header>
        <div className="modal-body">
                    <div className="pxp-user-modal-fig text-center">
                        {/* <!-- <img src="./Jobster - Home v1_files/signin-fig.png" alt="Sign in"> --> */}
                    </div>
                    <h5 className="modal-title text-center mt-4" id="signinModal">Welcome back!</h5>
                    <LoginForm/>
                </div>
        </Modal>
    </div>

    
  );
};
export default App;
render(
  <StrictMode>
      <BrowserRouter>

    <App/>
    </BrowserRouter>
    </StrictMode>,
  document.getElementById("root")
);

