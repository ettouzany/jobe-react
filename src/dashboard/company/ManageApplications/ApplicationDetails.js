import { useEffect, useState } from "react";
import jobService from "../../../services/job.service";
import Spinner from "react-bootstrap/Spinner";
//convertFromRaw
import { EditorState, convertToRaw,convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";


const ApplicationDetails = ({id}) => {
  const [job, setJob] = useState();
  const [loading, setLoading] = useState(true);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    requestJobData();
    setLoading(true);
  }, [id]);

  async function requestJobData() {
    try {
      await jobService.getJobById(id).then(
          (response) => {
              setJob(response.data);
              setLoading(false);
              setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(response.data.jobDescription))));

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
    loading==false ? (
      <div className="tab-pane active">
      <div
        className="pxp-jobs-tab-pane-cover pxp-cover"
        style={{
          backgroundImage:
            "url(https://pixelprime.co/themes/jobster/images/office-1.jpg)",
        }}
      ></div>
      <div
        className="pxp-jobs-tab-pane-logo"
        style={{
          backgroundImage:
            "url(https://pixelprime.co/themes/jobster/images/company-logo-1.png)",
        }}
      ></div>
      <div className="pxp-jobs-tab-pane-content">
        
      </div>
      <button className="btn rounded-pill pxp-jobs-tab-pane-close-btn d-inline-block d-lg-none">
        <span className="fa fa-angle-left"></span> Back
      </button>
    </div>
    ):(
      //still loading
      <div className="tab-pane active" >
        <div className="d-flex justify-content-center   h-100  align-items-center" style={{minHeight:"360px"}}>
              <Spinner animation="grow" />
            </div>
      </div>
    )
  );
};

export default ApplicationDetails;
