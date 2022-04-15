import { useEffect, useState } from "react";
import jobService from "../../services/job.service";
import Apply from "./Apply";
import Spinner from "react-bootstrap/Spinner";
//convertFromRaw
import { EditorState, convertToRaw,convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";


const JobDetails = ({id}) => {
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
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6">
            <h3>{job.jobTitle}</h3>
            <div className="pxp-jobs-tab-pane-company-location">
              by{" "}
              <a
                href="https://pixelprime.co/themes/jobster/single-company-1.html"
                className="pxp-jobs-tab-pane-company"
              >
                Craftgenics
              </a>{" "}
              in
              <a
                href="https://pixelprime.co/themes/jobster/jobs-list-1.html"
                className="pxp-jobs-tab-pane-location"
              >
                {job.jobLocation}
              </a>
            </div>
          </div>
          <div className="col-xl-auto">
            <div className="pxp-jobs-tab-pane-options mt-4 mt-xl-0">
              <button className="btn pxp-jobs-tab-pane-save-btn">
                <span className="fa fa-heart-o"></span>
              </button>
              <div className="dropdown ms-2">
                <button
                  className="btn pxp-jobs-tab-pane-share-btn dropdown-toggle"
                  type="button"
                  id="socialShareBtn-2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="fa fa-share-alt"></span>
                </button>
                <ul
                  className="dropdown-menu pxp-jobs-tab-pane-share-dropdown"
                  aria-labelledby="socialShareBtn-2"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://pixelprime.co/themes/jobster/jobs-list-10.html#"
                    >
                      <span className="fa fa-facebook"></span> Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://pixelprime.co/themes/jobster/jobs-list-10.html#"
                    >
                      <span className="fa fa-twitter"></span> Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://pixelprime.co/themes/jobster/jobs-list-10.html#"
                    >
                      <span className="fa fa-pinterest"></span> Pinterest
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://pixelprime.co/themes/jobster/jobs-list-10.html#"
                    >
                      <span className="fa fa-linkedin"></span> LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              <Apply jobId={id}/>
            </div>
          </div>
        </div>

        <div className="row mt-4 justify-content-between align-items-center">
          <div className="col-6">
            <a
              href="https://pixelprime.co/themes/jobster/jobs-list-1.html"
              className="pxp-jobs-tab-pane-category"
            >
              <div className="pxp-jobs-tab-pane-category-icon">
                <span className="fa fa-calendar-o"></span>
              </div>
              <div className="pxp-jobs-tab-pane-category-label">
                Project Management
              </div>
            </a>
          </div>
          <div className="col-auto">
            <div className="pxp-jobs-tab-pane-date pxp-text-light">
              4 days ago
            </div>
          </div>
        </div>

        <div className="row mt-4 mt-lg-5 align-items-center">
          <div className="col-sm-6">
            <div>
              <div className="pxp-jobs-tab-pane-content-info-label pxp-text-light">
                Experience
              </div>
              <div className="pxp-jobs-tab-pane-content-info-data">
                Minimum 1 year
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div>
              <div className="pxp-jobs-tab-pane-content-info-label pxp-text-light">
                Work Level
              </div>
              <div className="pxp-jobs-tab-pane-content-info-data">
                Senior Level
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mt-4">
              <div className="pxp-jobs-tab-pane-content-info-label pxp-text-light">
                Employment Type
              </div>
              <div className="pxp-jobs-tab-pane-content-info-data">
                Full Time
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mt-4">
              <div className="pxp-jobs-tab-pane-content-info-label pxp-text-light">
                Salary
              </div>
              <div className="pxp-jobs-tab-pane-content-info-data">
                $35k / year
              </div>
            </div>
          </div>
        </div>

        <div className="pxp-jobs-tab-pane-content-details mt-4 mt-lg-5">
          <div dangerouslySetInnerHTML={{ __html: draftToHtml(convertToRaw(editorState.getCurrentContent())) }} />
          <div className="mt-4 mt-lg-5">
            
            <Apply jobId={id}/>
          </div>
        </div>
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

export default JobDetails;
