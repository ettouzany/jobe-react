import jobService from "../../services/job.service";
import { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
const JobsSection = () => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        jobService.getLandingJobs()
            .then(jobs => {
                setJobs(jobs.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                // setLoading(false);
            });
    }, []);



    return(
        
        // error ? <div>{error}</div> :
        <section className="mt-100">
            <div className="pxp-container">
                <h2 className="pxp-section-h2">Featured Job Offers</h2>
                <p className="pxp-text-light">Search your career opportunity through 12,800 jobs</p>

                <div className="row mt-4 mt-md-5 pxp-animate-in pxp-animate-in-top pxp-in">
                    
                {loading ? <div className="col-12 text-center">
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    
    :
    jobs.map(job => (
        <div className="col-md-6 col-xl-4 col-xxl-3 pxp-jobs-card-1-container">
            <div className="pxp-jobs-card-1 pxp-has-border">
                <div className="pxp-jobs-card-1-top">
                    <Link to={`/jobs/${job.id}`} className="pxp-jobs-card-1-category">
                        <div className="pxp-jobs-card-1-category-icon"><span className="fa fa-bullhorn"></span></div>
                        {/* <div className="pxp-jobs-card-1-category-label">{job.category}</div> */}
                    </Link>
                    <Link to={`/jobs/${job.id}`} className="pxp-jobs-card-1-title">{job.jobTitle}</Link>
                    <div className="pxp-jobs-card-1-details">
                        <Link to={`/jobs/${job.id}`} className="pxp-jobs-card-1-location">
                            {/* <span className="fa fa-globe"></span>{job.location} */}
                        </Link>
                        <div className="pxp-jobs-card-1-type">{job.jobType}</div>
                    </div>
                </div>
                <div className="pxp-jobs-card-1-bottom">
                    <div className="pxp-jobs-card-1-bottom-left">
                        <div className="pxp-jobs-card-1-date pxp-text-light">3 days ago by</div>
                        <Link to={`/${job.id}`} className="pxp-jobs-card-1-company">google</Link>
                    </div>
                    <Link to={`/${job.id}`} className="pxp-jobs-card-1-company-logo" style={{backgroundImage: `url(${job.user.photo})`}}></Link>
                </div>
            </div>
        </div>
    ))}
                    


                </div>

                {/* <div className="mt-4 mt-md-5 pxp-animate-in pxp-animate-in-top pxp-in">
                    <Link to="jobs-list-1.html" className="btn rounded-pill pxp-section-cta">All Job Offers<span className="fa fa-angle-right"></span></Link>
                </div> */}

                <div className="mt-4 mt-md-5 pxp-animate-in pxp-animate-in-top pxp-in">
                    <Link to="/search" className="btn rounded-pill pxp-section-cta">All Job Offers<span className="fa fa-angle-right"></span></Link>
                </div>
            </div>
        </section>

    )
}

export default JobsSection;