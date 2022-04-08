

import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from "react";
import applicationService from "../../services/application.service";

const Apply = ({jobId}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const applyToJob = async () => {
        try {
          await applicationService.addApplication(jobId).then(
              (response) => {
                  console.log(response);
                  handleClose ();
              },
              (error) => {
                console.log(error);
              }
          );
      }
      catch (error) {
          console.log(error);
      }
      }
    return (
        <div>
            <button onClick={handleShow} className="btn rounded-pill pxp-section-cta">
              Apply Now
            </button>
            <Modal fullscreen={true} centered={true} show={show} onHide={handleClose} className="modal fade pxp-user-modal"  id="pxp-apply-modal">
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
            <div className="modal-body">
            
                    <div className='container'>
                    <div className="mb-3">
                        <label htmlFor="pxp-company-job-description" className="form-label">Job description</label>
                        <input 
                        className="form-control" id="pxp-company-job-description" placeholder="Type the description here..."/>
                    </div>

                        <div className="pxp-user-modal-fig text-center">
                            {/* <!-- <img src="./Jobster - Home v1_files/signin-fig.png" alt="Sign in"> --> */}
                        </div>
                        <h5 className="modal-title text-center mt-4" id="signinModal">Welcome back!</h5>
                    </div>
                        <div className='row m-3'>
                            <div className='col-6 d-flex justify-content-end'>
                            <button onClick={handleClose} className=" btn rounded-pill pxp-section-cta-o">
                            Cancel
                        </button>
                            </div>
                        
                        <div className='col-6 '>
                        <button onClick={applyToJob} className=" btn rounded-pill pxp-section-cta">
                            Apply To Job
                        </button>
                        </div>
                        </div>
                    </div>
            </Modal.Body>
            </Modal>
        </div>
    );
}

export default Apply;
        