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
    <div>
      <section className="pxp-hero pxp-hero-boxed">
            <div className="pxp-container">
                <div className="pxp-hero-boxed-content" style={{backgroundColor: "var(--pxpMainColorLight)"}}>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-xl-6 col-xxl-5">
                            <h1>Find the perfect<br/><span  style={{ color: "var(--pxpMainColor)"}}>job</span> for you</h1>
                            <div className="pxp-hero-subtitle mt-3 mt-lg-4">Search your career opportunity through <strong>12,800</strong> jobs</div>

                            <div className="pxp-hero-form pxp-hero-form-round pxp-bigger mt-3 mt-lg-4">
                                <form className="row gx-3 align-items-center" action="jobs-list-1.html">
                                    <div className="col-12 col-md">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="pxpHeroFormKeyword" placeholder="Job title or keyword" value="Job title or keyword"/>
                                            <label htmlFor="pxpHeroFormKeyword">What</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md pxp-has-left-border">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="pxpHeroFormLocation" placeholder="Job location" value="Job location"/>
                                            <label htmlFor="pxpHeroFormLocation">Where</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-auto">
                                        <button>Find Jobs</button>
                                    </div>
                                </form>
                            </div>

                            <div className="pxp-hero-searches-container">
                                <div className="pxp-hero-searches-label">Popular Searches</div>
                                <div className="pxp-hero-searches">
                                    <div className="pxp-hero-searches-items">
                                        <a href="jobs-list-1.html">Work from home</a>
                                        <a href="jobs-list-1.html">Part-time</a>
                                        <a href="jobs-list-1.html">Administration</a>
                                        <a href="jobs-list-1.html">Finance</a>
                                        <a href="jobs-list-1.html">Retail</a>
                                        <a href="jobs-list-1.html">IT</a>
                                        <a href="jobs-list-1.html">Engineering</a>
                                        <a href="jobs-list-1.html">Sales</a>
                                        <a href="jobs-list-1.html">Manufacturing</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-xl-block col-xl-4 col-xxl-5 position-relative">
                            <div className="pxp-hero-boxed-circulars pxp-animate-circles-bounce animate__animated animate__bounceIn" style={{height: "642px"}}>
                                <div className="pxp-hero-boxed-circular-outer">
                                    <div className="pxp-hero-boxed-circular-outer-1"></div>
                                    <div className="pxp-hero-boxed-circular-outer-2"></div>
                                    <div className="pxp-hero-boxed-circular-outer-3"></div>
                                </div>
                                <div className="pxp-hero-boxed-circular-middle">
                                    <div className="pxp-hero-boxed-circular-middle-1"></div>
                                    <div className="pxp-hero-boxed-circular-middle-2"></div>
                                    <div className="pxp-hero-boxed-circular-middle-3"></div>
                                </div>
                                <div className="pxp-hero-boxed-circular-center"></div>
                            </div>

                            <div className="pxp-hero-boxed-icon-circles">
                                <div className="pxp-hero-boxed-icon-circle-1 pxp-animate-icon-circle-bounce animate__animated animate__bounceIn">
                                    <img src="https://pixelprime.co/themes/jobster/images/paper-icon.png" alt="Paper icon"/>
                                </div>
                                <div className="pxp-hero-boxed-icon-circle-2 pxp-animate-icon-circle-bounce animate__animated animate__bounceIn">
                                    <img src="https://pixelprime.co/themes/jobster/images/folder-icon.png" alt="Folder icon"/>
                                </div>
                            </div>

                            <div className="pxp-hero-boxed-info-cards">
                                <div className="pxp-hero-boxed-info-card-big pxp-animate-info-card animate__animated animate__flipInX">
                                    <div className="pxp-hero-boxed-info-card-big-content">
                                        <div className="pxp-hero-boxed-info-card-big-icon">
                                            <img src="https://pixelprime.co/themes/jobster/images/service-2-icon.png" alt="Job Fit Scoring"/>
                                        </div>
                                        <div className="pxp-hero-boxed-info-card-big-title">Job Fit Scoring</div>
                                        <div className="pxp-hero-boxed-info-card-big-text pxp-text-light">Search your career opportunity through 12,800 jobs</div>
                                    </div>
                                </div>
                                <div className="pxp-hero-boxed-info-card-small pxp-animate-info-card animate__animated animate__flipInX">
                                    <div className="pxp-hero-boxed-info-card-small-content">
                                        <div className="pxp-hero-boxed-info-card-small-icon">
                                            <img src="https://pixelprime.co/themes/jobster/images/service-1-icon.png" alt="Full-service recruiting"/>
                                        </div>
                                        <div className="pxp-hero-boxed-info-card-small-title">Full-service recruiting</div>
                                    </div>
                                </div>
                                <div className="pxp-hero-boxed-info-list-container pxp-animate-info-card animate__animated animate__flipInX">
                                    <div className="pxp-hero-boxed-info-list">
                                        <div className="pxp-hero-boxed-info-list-item">
                                            <div className="pxp-hero-boxed-info-list-item-number">286<span>job offers</span></div>
                                            <div className="pxp-hero-boxed-info-list-item-description">in Business Development</div>
                                        </div>
                                        <div className="pxp-hero-boxed-info-list-item">
                                            <div className="pxp-hero-boxed-info-list-item-number">154<span>job offers</span></div>
                                            <div className="pxp-hero-boxed-info-list-item-description">in Marketing &amp; Communication</div>
                                        </div>
                                        <div className="pxp-hero-boxed-info-list-item">
                                            <div className="pxp-hero-boxed-info-list-item-number">319<span>job offers</span></div>
                                            <div className="pxp-hero-boxed-info-list-item-description">in Human Resources</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mt-100">
            <div className="pxp-container">
                <h2 className="pxp-section-h2 text-center">Search by Category</h2>
                <p className="pxp-text-light text-center">Search your career opportunity with our categories</p>
    
                <div className="row mt-4 mt-md-5 pxp-animate-in pxp-animate-in-top pxp-in">
                    <div className="col-12 col-md-4 col-lg-3 col-xxl-2 pxp-categories-card-1-container">
                        <a href="jobs-list-1.html" className="pxp-categories-card-1">
                            <div className="pxp-categories-card-1-icon-container">
                                <div className="pxp-categories-card-1-icon">
                                    <span className="fa fa-pie-chart"></span>
                                </div>
                            </div>
                            <div className="pxp-categories-card-1-title">Business Development</div>
                            <div className="pxp-categories-card-1-subtitle">139 open positions</div>
                        </a>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 col-xxl-2 pxp-categories-card-1-container">
                        <a href="jobs-list-1.html" className="pxp-categories-card-1">
                            <div className="pxp-categories-card-1-icon-container">
                                <div className="pxp-categories-card-1-icon">
                                    <span className="fa fa-bullhorn"></span>
                                </div>
                            </div>
                            <div className="pxp-categories-card-1-title">Marketing &amp; Communication</div>
                            <div className="pxp-categories-card-1-subtitle">366 open positions</div>
                        </a>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 col-xxl-2 pxp-categories-card-1-container">
                        <a href="jobs-list-1.html" className="pxp-categories-card-1">
                            <div className="pxp-categories-card-1-icon-container">
                                <div className="pxp-categories-card-1-icon">
                                    <span className="fa fa-address-book-o"></span>
                                </div>
                            </div>
                            <div className="pxp-categories-card-1-title">Human Resources</div>
                            <div className="pxp-categories-card-1-subtitle">435 open positions</div>
                        </a>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 col-xxl-2 pxp-categories-card-1-container">
                        <a href="jobs-list-1.html" className="pxp-categories-card-1">
                            <div className="pxp-categories-card-1-icon-container">
                                <div className="pxp-categories-card-1-icon">
                                    <span className="fa fa-calendar-o"></span>
                                </div>
                            </div>
                            <div className="pxp-categories-card-1-title">Project Management</div>
                            <div className="pxp-categories-card-1-subtitle">324 open positions</div>
                        </a>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 col-xxl-2 pxp-categories-card-1-container">
                        <a href="jobs-list-1.html" className="pxp-categories-card-1">
                            <div className="pxp-categories-card-1-icon-container">
                                <div className="pxp-categories-card-1-icon">
                                    <span className="fa fa-comments-o"></span>
                                </div>
                            </div>
                            <div className="pxp-categories-card-1-title">Customer Service</div>
                            <div className="pxp-categories-card-1-subtitle">39 open positions</div>
                        </a>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 col-xxl-2 pxp-categories-card-1-container">
                        <a href="jobs-list-1.html" className="pxp-categories-card-1">
                            <div className="pxp-categories-card-1-icon-container">
                                <div className="pxp-categories-card-1-icon">
                                    <span className="fa fa-terminal"></span>
                                </div>
                            </div>
                            <div className="pxp-categories-card-1-title">Software Engineering</div>
                            <div className="pxp-categories-card-1-subtitle">439 open positions</div>
                        </a>
                    </div>
                </div>

                <div className="mt-4 mt-md-5 text-center pxp-animate-in pxp-animate-in-top pxp-in">
                    <a href="jobs-list-1.html" className="btn rounded-pill pxp-section-cta">All Categories<span className="fa fa-angle-right"></span></a>
                </div>
            </div>
        </section>
      <section
        className="mt-100 pt-100 pb-100 pxp-page-header-simple"
        style={{ backgroundColor: "var(--pxpSecondaryColorLight)" }}
      >
        <div className="pxp-container">
          <h2 className="pxp-section-h2 text-center">Featured Job Offers</h2>
          <p className="pxp-text-light text-center">
            Search your career opportunity through 12,800 jobs
          </p>

          <div className="row mt-4 mt-md-5 pxp-animate-in pxp-animate-in-top pxp-in">
            <div className="col-md-6 col-xl-4 col-xxl-3 pxp-jobs-card-1-container">
              <div className="pxp-jobs-card-1 pxp-has-shadow">
                <div className="pxp-jobs-card-1-top">
                  <a
                    href="https://pixelprime.co/themes/jobster/jobs-list-1.html"
                    className="pxp-jobs-card-1-category"
                  >
                    <div className="pxp-jobs-card-1-category-icon">
                      <span className="fa fa-bullhorn"></span>
                    </div>
                    <div className="pxp-jobs-card-1-category-label">
                      Marketing &amp; Communication
                    </div>
                  </a>
                  <a
                    href="https://pixelprime.co/themes/jobster/single-job-1.html"
                    className="pxp-jobs-card-1-title"
                  >
                    Senior Editor
                  </a>
                  <div className="pxp-jobs-card-1-details">
                    <a
                      href="https://pixelprime.co/themes/jobster/jobs-list-1.html"
                      className="pxp-jobs-card-1-location"
                    >
                      <span className="fa fa-globe"></span>San Francisco, CA
                    </a>
                    <div className="pxp-jobs-card-1-type">Full-time</div>
                  </div>
                </div>
                <div className="pxp-jobs-card-1-bottom">
                  <div className="pxp-jobs-card-1-bottom-left">
                    <div className="pxp-jobs-card-1-date pxp-text-light">
                      3 days ago by
                    </div>
                    <a
                      href="https://pixelprime.co/themes/jobster/single-company-1.html"
                      className="pxp-jobs-card-1-company"
                    >
                      Artistre Studio
                    </a>
                  </div>
                  {/* <a href="https://pixelprime.co/themes/jobster/single-company-1.html" className="pxp-jobs-card-1-company-logo" 
                            style="background-image: url(./assets/images/company-logo-4.png);" href="" ></a> */}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 mt-md-5 text-center pxp-animate-in pxp-animate-in-top">
            <a
              href="https://pixelprime.co/themes/jobster/jobs-list-1.html"
              className="btn rounded-pill pxp-section-cta"
            >
              All Job Offers<span className="fa fa-angle-right"></span>
            </a>
          </div>
        </div>
      </section>
      </div>

    );
  }
}

export default Index;
