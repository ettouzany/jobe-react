import { Component } from "react";


class Index extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
        };
    }


    render() {
        return (
                <section  className="mt-100 pt-100 pb-100 pxp-page-header-simple" style={{backgroundColor: "var(--pxpSecondaryColorLight)"}}>
        <div className="pxp-container">
            <h2 className="pxp-section-h2 text-center">Featured Job Offers</h2>
            <p className="pxp-text-light text-center">Search your career opportunity through 12,800 jobs</p>

            <div className="row mt-4 mt-md-5 pxp-animate-in pxp-animate-in-top pxp-in">
                <div className="col-md-6 col-xl-4 col-xxl-3 pxp-jobs-card-1-container">
                    <div className="pxp-jobs-card-1 pxp-has-shadow">
                        <div className="pxp-jobs-card-1-top">
                            <a href="https://pixelprime.co/themes/jobster/jobs-list-1.html" className="pxp-jobs-card-1-category">
                                <div className="pxp-jobs-card-1-category-icon"><span className="fa fa-bullhorn"></span></div>
                                <div className="pxp-jobs-card-1-category-label">Marketing &amp; Communication</div>
                            </a>
                            <a href="https://pixelprime.co/themes/jobster/single-job-1.html" className="pxp-jobs-card-1-title">Senior Editor</a>
                            <div className="pxp-jobs-card-1-details">
                                <a href="https://pixelprime.co/themes/jobster/jobs-list-1.html" className="pxp-jobs-card-1-location">
                                    <span className="fa fa-globe"></span>San Francisco, CA
                                </a>
                                <div className="pxp-jobs-card-1-type">Full-time</div>
                            </div>
                        </div>
                        <div className="pxp-jobs-card-1-bottom">
                            <div className="pxp-jobs-card-1-bottom-left">
                                <div className="pxp-jobs-card-1-date pxp-text-light">3 days ago by</div>
                                <a href="https://pixelprime.co/themes/jobster/single-company-1.html" className="pxp-jobs-card-1-company">Artistre Studio</a>
                            </div>
                            {/* <a href="https://pixelprime.co/themes/jobster/single-company-1.html" className="pxp-jobs-card-1-company-logo" 
                            style="background-image: url(./assets/images/company-logo-4.png);" href="" ></a> */}
                        </div>
                    </div>
                </div>
               
            </div>

            <div className="mt-4 mt-md-5 text-center pxp-animate-in pxp-animate-in-top">
                <a href="https://pixelprime.co/themes/jobster/jobs-list-1.html" className="btn rounded-pill pxp-section-cta">All Job Offers<span className="fa fa-angle-right"></span></a>
            </div>
        </div>
    </section>
        );
    }
}



export default Index;