const JobsSection = () => {
    return(
        <section className="mt-100">
            <div className="pxp-container">
                <h2 className="pxp-section-h2">Featured Job Offers</h2>
                <p className="pxp-text-light">Search your career opportunity through 12,800 jobs</p>

                <div className="row mt-4 mt-md-5 pxp-animate-in pxp-animate-in-top pxp-in">
                    <div className="col-md-6 col-xl-4 col-xxl-3 pxp-jobs-card-1-container">
                        <div className="pxp-jobs-card-1 pxp-has-border">
                            <div className="pxp-jobs-card-1-top">
                                <a href="jobs-list-1.html" className="pxp-jobs-card-1-category">
                                    <div className="pxp-jobs-card-1-category-icon"><span className="fa fa-bullhorn"></span></div>
                                    <div className="pxp-jobs-card-1-category-label">Marketing &amp; Communication</div>
                                </a>
                                <a href="single-job-1.html" className="pxp-jobs-card-1-title">Senior Editor</a>
                                <div className="pxp-jobs-card-1-details">
                                    <a href="jobs-list-1.html" className="pxp-jobs-card-1-location">
                                        <span className="fa fa-globe"></span>San Francisco, CA
                                    </a>
                                    <div className="pxp-jobs-card-1-type">Full-time</div>
                                </div>
                            </div>
                            <div className="pxp-jobs-card-1-bottom">
                                <div className="pxp-jobs-card-1-bottom-left">
                                    <div className="pxp-jobs-card-1-date pxp-text-light">3 days ago by</div>
                                    <a href="single-company-1.html" className="pxp-jobs-card-1-company">Artistre Studio</a>
                                </div>
                                <a href="single-company-1.html" className="pxp-jobs-card-1-company-logo" style={{backgroundImage: "url(images/company-logo-1.png)"}}></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 mt-md-5 pxp-animate-in pxp-animate-in-top pxp-in">
                    <a href="jobs-list-1.html" className="btn rounded-pill pxp-section-cta">All Job Offers<span className="fa fa-angle-right"></span></a>
                </div>
            </div>
        </section>
    )
}

export default JobsSection;