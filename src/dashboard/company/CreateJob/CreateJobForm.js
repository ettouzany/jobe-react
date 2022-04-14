import { useEffect, useState } from "react";
import jobService from "../../../services/job.service";
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw,convertFromRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";



const CreateJobForm = ({id}) => {

    const [jobTitle, setJobTitle] = useState("");
    const [jobLocation, setJobLocation] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobCategory, setJobCategory] = useState("");
    const [jobMinYearsOfExperience, setJobMinYearsOfExperience] = useState("");
    const [jobCareerLevel, setJobCareerLevel] = useState("");
    const [jobType, setJobType] = useState("");
    const [jobSalaryType, setJobSalaryType] = useState("fixed");
    const [jobSalary, setJobSalary] = useState("");
    const [jobSalaryRangeFrom, setJobSalaryRangeFrom] = useState("1000");
    const [jobSalaryRangeTo, setJobSalaryRangeTo] = useState("2000");
    const [jobSalaryCurrency, setJobSalaryCurrency] = useState("MAD");
    const [numberOfPeople, setNumberOfPeople] = useState(10);
    
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
        if (id) {
            jobService.getJobById(id).then(res => {
                setJobTitle(res.data.jobTitle);
                setJobLocation(res.data.jobLocation);
                setJobDescription(res.data.jobDescription);
                setJobCategory(res.data.jobCategory);
                setJobMinYearsOfExperience(res.data.jobMinYearsOfExperience);
                setJobCareerLevel(res.data.jobCareerLevel);
                setJobType(res.data.jobType);
                setJobSalaryType(res.data.jobSalaryType);
                setJobSalary(res.data.jobSalary);
                setJobSalaryRangeFrom(res.data.jobSalaryRangeFrom);
                setJobSalaryRangeTo(res.data.jobSalaryRangeTo);
                setJobSalaryCurrency(res.data.jobSalaryCurrency);
                setNumberOfPeople(res.data.numberOfPeople);
                //initialize editor
                setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(res.data.jobDescription))));

            });

            
        }
    }, [id]);

    const handleJobSubmit = async (e) => {
        e.preventDefault();
        try {
            const job = {
                
                jobTitle,
                jobDescription,
                jobLocation,
                jobMinYearsOfExperience,
                jobCategory,
                jobCareerLevel,
                jobType,
                jobSalaryType,
                jobSalary,
                jobSalaryRangeFrom,
                jobSalaryRangeTo,
                jobSalaryCurrency,
                numberOfPeople,


            }
            if (id) {
                await jobService.updateJobById(id, job);
            }
            else {
                await jobService.createJob(job);
            }
        } catch (err) {
            console.log(err);
        }
    }
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        setJobDescription(convertToRaw(editorState.getCurrentContent()));

        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
      };
    return(
        <form onSubmit={handleJobSubmit}>
                    <div className="row mt-4 mt-lg-5">
                        <div className="col-xxl-6">
                            <div className="mb-3">
                                <label htmlFor="pxp-company-job-title" className="form-label">Job title</label>
                                <input 
                                 type="text" id="pxp-company-job-title" className="form-control" placeholder="Add title"
                                 value={jobTitle}
                                    onChange={(e) => setJobTitle(e.target.value)}
                                 />
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-3">
                            <label htmlFor="pxp-company-job-location" className="form-label">Location</label>
                            <input 
                            value={jobLocation}
                            onChange={(e) => setJobLocation(e.target.value)}
                            type="text" id="pxp-company-job-location" className="form-control" placeholder="E.g. San Francisco, CA"/>
                        </div>
                        <div className="col-md-6 col-xxl-3">
                            <div className="mb-3">
                                <label htmlFor="pxp-company-job-category" className="form-label">Category</label>
                                <select 
                                id="jobCategory"
                                value={jobCategory}
                                onChange={(e) => setJobCategory(e.target.value)}
                                onBlur={(e) => setJobCategory(e.target.value)}
                                className="form-control">
                                    <option>Select a category</option>
                                    <option>Marketing &amp; Communication</option>
                                    <option>Software Engineering</option>
                                    <option>Project Management</option>
                                    <option>Finance</option>
                                    <option>Retail</option>
                                    <option>Sales</option>
                                    <option>Manufacturing</option>
                                    <option>IT</option>
                                    <option>Business Development</option>
                                    <option>Human Resources</option>
                                    <option>Customer Service</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="pxp-company-job-description" className="form-label">Job description</label>
                        <Editor
                            
                            wrapperClassName="form-control p-0 overflow-hidden richeditorhight"
                            editorClassName="p-3"
                            toolbarClassName="toolbar-class"
                            editorState={editorState}
                            onEditorStateChange={onEditorStateChange}
                            />
                        {/* <textarea
                        disabled
                        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                        ></textarea>
                        <textarea 
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        className="form-control" id="pxp-company-job-description" placeholder="Type the description here..."></textarea> */}
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-xxl-3">
                            <div className="mb-3">
                                <label htmlFor="pxp-company-job-experience" className="form-label">Minimum years of experience</label>
                                <input 
                                id="jobMinYearsOfExperience"
                                name="jobMinYearsOfExperience"
                                value={jobMinYearsOfExperience}
                                onChange={(e) => setJobMinYearsOfExperience(e.target.value)}
                                type="number" className="form-control" placeholder="E.g. Minimum 3 years"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-3">
                            <div className="mb-3">
                                <label htmlFor="jobCareerLevel" className="form-label">Career level</label>
                                <select 
                                id="jobCareerLevel"
                                name="jobCareerLevel"
                                value={jobCareerLevel}
                                onChange={(e) => setJobCareerLevel(e.target.value)}
                                onBlur={(e) => setJobCareerLevel(e.target.value)}
                                className="form-select">
                                    <option>No Experience</option>
                                    <option>Entry-Level</option>
                                    <option>Mid-Level</option>
                                    <option>Senior-Level</option>
                                    <option>Manager / Executive</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-3">
                            <div className="mb-3">
                                <label htmlFor="pxp-company-job-type" className="form-label">Employment type</label>
                                <select
                                id="jobType"
                                name="jobType"
                                value={jobType}
                                onChange={(e) => setJobType(e.target.value)}
                                onBlur={(e) => setJobType(e.target.value)}
                                className="form-select">
                                    <option>Full Time</option>
                                    <option>Part Time</option>
                                    <option>Remote</option>
                                    <option>Internship</option>
                                    <option>Contract</option>
                                    <option>Training</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-xxl-3">
                            <div className="mb-3">
                                <label htmlFor="pxp-company-job-salary" className="form-label">Salary range</label>
                                <select 
                                id="jobSalary"
                                name="jobSalary"
                                value={jobSalary}
                                onChange={(e) => setJobSalary(e.target.value)}
                                onBlur={(e) => setJobSalary(e.target.value)}
                                className="form-select">
                                    <option>Select range</option>
                                    <option>$700 - $1000</option>
                                    <option>$1000 - $1200</option>
                                    <option>$1200 - $1400</option>
                                    <option>$1500 - $1800</option>
                                    <option>$2000 - $3000</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className="mt-4 mt-lg-5">
                        <button className="btn rounded-pill pxp-section-cta" type="submit" >Publish Job</button>
                        <button 
                        style={{border: '1px solid var(--pxpTextColor)', color: 'var(--pxpTextColor)', marginLeft: '10px'}}
                        className="btn rounded-pill pxp-section-cta pxp-user-nav-trigger pxp-on-light mx-3 " type="submit" >Preview</button>
                        <button className="btn rounded-pill pxp-section-cta-o ms-3 ">Save Draft</button>
                    </div>
                </form>
    )
}

export default CreateJobForm;