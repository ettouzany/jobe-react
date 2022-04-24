import { useEffect, useState } from "react";
import jobService from "../../services/job.service";
import Apply from "./Apply";
import Spinner from "react-bootstrap/Spinner";
//convertFromRaw
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import JobLabel from "./JobDetailsElements/JobLabel";
import { Link } from "react-router-dom";


const JobDetails = ({ id }) => {
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
    loading == false ? (
      <div className="tab-pane active">
        {
          job.user.cover ?
            <div
              className="pxp-jobs-tab-pane-cover pxp-cover"
              style={{
                backgroundImage:
                  `url(${job.user.cover})`,
              }}
            ></div>
            :null
        }
        <div
          className="pxp-jobs-tab-pane-logo"
          style={{
            backgroundImage:
              `url(${job.user.photo})`,
          }}
        ></div>
        <div className="pxp-jobs-tab-pane-content">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6">
              <h3>{job.jobTitle}</h3>
              <div className="pxp-jobs-tab-pane-company-location">
                by
                <Link
                  to={`/p/${job.userId}`}
                  className="pxp-jobs-tab-pane-company m-1"
                >
                  {job.user.companyname}
                </Link>
                in
                <a
                  href="https://pixelprime.co/themes/jobster/jobs-list-1.html"
                  className="pxp-jobs-tab-pane-location"
                >
                  {job.jobCity}
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
                <Apply jobId={id} />
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
                  <span className={job.categorie.icon}></span>
                </div>
                <div className="pxp-jobs-tab-pane-category-label">
                  {job.categorie.label}
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
            <JobLabel title="Experience" value={job.jobMinYearsOfExperience} />
            <JobLabel title="Work Level" value={job.jobCareerLevel} />
            <JobLabel title="Employment Type" value={job.jobType} />
            <JobLabel title="Salary" value={job.jobSalary} />
          </div>

          <div className="pxp-jobs-tab-pane-content-details mt-4 mt-lg-5">
            <div dangerouslySetInnerHTML={{ __html: draftToHtml(convertToRaw(editorState.getCurrentContent())) }} />
            <div className="mt-4 mt-lg-5">

              <Apply jobId={id} />
            </div>
          </div>
        </div>
        <button className="btn rounded-pill pxp-jobs-tab-pane-close-btn d-inline-block d-lg-none">
          <span className="fa fa-angle-left"></span> Back
        </button>
      </div>
    ) : (
      //still loading
      <div className="tab-pane active" >
        <div className="d-flex justify-content-center   h-100  align-items-center" style={{ minHeight: "360px" }}>
          <Spinner animation="grow" />
        </div>
      </div>
    )
  );
};

export default JobDetails;
