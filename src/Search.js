import SearchBar from "./Components/SearchBar";
import Card from "./Components/Card";
const Search = () => {
    return (
        <div className="pxp-container">
            <SearchBar/>
            <div className="row">
                <div className="col-lg-5 col-xl-4 col-xxl-6">
                    <div className="row">
                        <div className="col-xxl-5">
                            <div className="pxp-jobs-list-side-filter pxp-with-details">
                                <div className="pxp-list-side-filter-header d-flex d-xxl-none">
                                    <div className="pxp-list-side-filter-header-label">Filter Jobs</div>
                                    <a role="button"><span className="fa fa-sliders"></span></a> 
                                </div>
                                <div className="mt-4 mt-xxl-0 d-xxl-block pxp-list-side-filter-panel">
                                    <h3>Type of Employment</h3>
                                    <div className="list-group mt-2 mt-lg-3">
                                        <label className="list-group-item d-flex justify-content-between align-items-center pxp-checked">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value="" checked=""/>
                                                Full Time
                                            </span>
                                            <span className="badge rounded-pill">56</span>
                                        </label>
                                        <label className="list-group-item d-flex justify-content-between align-items-center mt-2 mt-lg-3 pxp-checked">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value=""/>
                                                Part Time
                                            </span>
                                            <span className="badge rounded-pill">34</span>
                                        </label>
                                        <label className="list-group-item d-flex justify-content-between align-items-center mt-2 mt-lg-3 pxp-checked">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value=""/>
                                                Remote
                                            </span>
                                            <span className="badge rounded-pill">24</span>
                                        </label>
                                        <label className="list-group-item d-flex justify-content-between align-items-center mt-2 mt-lg-3">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value=""/>
                                                Internship
                                            </span>
                                            <span className="badge rounded-pill">27</span>
                                        </label>
                                        <label className="list-group-item d-flex justify-content-between align-items-center mt-2 mt-lg-3">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value=""/>
                                                Contract
                                            </span>
                                            <span className="badge rounded-pill">76</span>
                                        </label>
                                        <label className="list-group-item d-flex justify-content-between align-items-center mt-2 mt-lg-3">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value=""/>
                                                Training
                                            </span>
                                            <span className="badge rounded-pill">28</span>
                                        </label>
                                    </div>
        
                                    <h3 className="mt-3 mt-lg-4">Experience Level</h3>
                                    <div className="list-group mt-2 mt-lg-3">
                                        <label className="list-group-item d-flex justify-content-between align-items-center">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value=""/>
                                                No Experience
                                            </span>
                                            <span className="badge rounded-pill">98</span>
                                        </label>
                                        <label className="list-group-item d-flex justify-content-between align-items-center mt-2 mt-lg-3 pxp-checked">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value="" checked=""/>
                                                Entry-Level
                                            </span>
                                            <span className="badge rounded-pill">44</span>
                                        </label>
                                        <label className="list-group-item d-flex justify-content-between align-items-center mt-2 mt-lg-3 pxp-checked">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value="" checked=""/>
                                                Mid-Level
                                            </span>
                                            <span className="badge rounded-pill">35</span>
                                        </label>
                                        <label className="list-group-item d-flex justify-content-between align-items-center mt-2 mt-lg-3">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value=""/>
                                                Senior-Level
                                            </span>
                                            <span className="badge rounded-pill">45</span>
                                        </label>
                                        <label className="list-group-item d-flex justify-content-between align-items-center mt-2 mt-lg-3">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value=""/>
                                                Manager / Executive
                                            </span>
                                            <span className="badge rounded-pill">21</span>
                                        </label>
                                    </div>
        
                                    <h3 className="mt-3 mt-lg-4">Salary Range</h3>
                                    <div className="list-group mt-2 mt-lg-3">
                                        <label className="list-group-item d-flex justify-content-between align-items-center pxp-checked">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value="" checked=""/>
                                                $700 - $1000
                                            </span>
                                            <span className="badge rounded-pill">34</span>
                                        </label>
                                        <label className="list-group-item d-flex justify-content-between align-items-center mt-2 mt-lg-3 pxp-checked">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value="" checked=""/>
                                                $1000 - $1200
                                            </span>
                                            <span className="badge rounded-pill">22</span>
                                        </label>
                                        <label className="list-group-item d-flex justify-content-between align-items-center mt-2 mt-lg-3">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value=""/>
                                                $1200 - $1400
                                            </span>
                                            <span className="badge rounded-pill">67</span>
                                        </label>
                                        <label className="list-group-item d-flex justify-content-between align-items-center mt-2 mt-lg-3">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value=""/>
                                                $1500 - $1800
                                            </span>
                                            <span className="badge rounded-pill">12</span>
                                        </label>
                                        <label className="list-group-item d-flex justify-content-between align-items-center mt-2 mt-lg-3">
                                            <span className="d-flex">
                                                <input className="form-check-input me-2" type="checkbox" value=""/>
                                                $2000 - $3000
                                            </span>
                                            <span className="badge rounded-pill">26</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7">
                            <div className="pxp-jobs-list-single-column nav mt-4 mt-xxl-0" role="tablist">
                            <Card 
                                id='1'
                                title="Senior Editor" 
                                image="./assets/images/company-logo-1.png" 
                                date="3 days ago"
                                type="Full-time"
                                company="Artistre Studio"
                                location="San Francisco, CA" />
                            <Card 
                                id='2'
                                title="Senior Editor" 
                                image="./assets/images/company-logo-1.png" 
                                date="3 days ago"
                                type="Full-time"
                                company="Artistre Studio"
                                location="San Francisco, CA" />
                            <Card 
                                id='3'
                                title="Senior Editor" 
                                image="./assets/images/company-logo-1.png" 
                                date="3 days ago"
                                type="Full-time"
                                company="Artistre Studio"
                                location="San Francisco, CA" />
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="col-lg-7 col-xl-8 col-xxl-6">
                    <div className="tab-content pxp-jobs-tab-content pxp-show">
                        <div className="tab-pane active" id="job-details-1" role="tabpanel" aria-labelledby="job-1">
                                <div className="pxp-jobs-tab-pane-cover pxp-cover" ></div>
                                <div className="pxp-jobs-tab-pane-logo" ></div>
                                <div className="pxp-jobs-tab-pane-content">
                                    <div className="row justify-content-between align-items-center">
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Search;