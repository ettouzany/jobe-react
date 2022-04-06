import { useEffect, useState } from "react";

const JobDetails = (props) => {
  const [job, setJob] = useState({
    title: "Senior Editor",
    company: "Artistre Studio",
    location: "San Francisco, CA",
    type: "Full-time",
    date: "3 days ago",
  });

  useEffect(() => {
    requestJobData();
  }, [props.id]);

  async function requestJobData() {
    await fetch(`http://localhost:3000/jobs/${props.id}`)
      .then((res) => res.json())
      .then((result) => {
        setJob(result);
      })
      .catch(console.log);
  }
  return (
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
            <h3>{job.title}</h3>
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
                Los Angeles, CA
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
              <button className="btn ms-2 pxp-jobs-tab-pane-apply-btn rounded-pill">
                Apply Now
              </button>
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
          <h4>Overview</h4>
          <p>
            As a Product Designer, you will work within a Product Delivery Team
            fused with UX, engineering, product and data talent. You will help
            the team design beautiful interfaces that solve business challenges
            for our clients. We work with a number of Tier 1 banks on building
            web-based applications for AML, KYC and Sanctions List management
            workflows. This role is ideal if you are looking to segue your
            career into the FinTech or Big Data arenas.
          </p>
          <div className="mt-4">
            <h4>Responsabilities</h4>
            <ul>
              <li>
                Be involved in every step of the product design cycle from
                discovery to developer handoff and user acceptance testing.
              </li>
              <li>
                Work with BAs, product managers and tech teams to lead the
                Product Design
              </li>
              <li>
                Maintain quality of the design process and ensure that when
                designs are translated into code they accurately reflect the
                design specifications.
              </li>
              <li>
                Accurately estimate design tickets during planning sessions.
              </li>
              <li>
                Contribute to sketching sessions involving non-designersCreate,
                iterate and maintain UI deliverables including sketch files,
                style guides, high fidelity prototypes, micro interaction
                specifications and pattern libraries.
              </li>
              <li>
                Ensure design choices are data led by identifying assumptions to
                test each sprint, and work with the analysts in your team to
                plan moderated usability test sessions.
              </li>
              <li>
                Design pixel perfect responsive UI’s and understand that
                adopting common interface patterns is better for UX than
                reinventing the wheel
              </li>
              <li>
                Present your work to the wider business at Show &amp; Tell
                sessions.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h4>Requirements</h4>
            <ul>
              <li>
                4+ years of system administration experience with the Microsoft
                Server platform (2012/2016, Microsoft IIS, Active Directory)
              </li>
              <li>
                3+ years of hands-on system administration experience with AWS
                (EC2, Elastic Load Balancing, Multi AZ, etc.)
              </li>
              <li>4+ years of SQL Server, MySQL</li>
              <li>
                Working knowledge of Encryption techniques and protocols,
                Multi-factor authentication, Data protection, Penetration
                testing, Security threats
              </li>
              <li>Bachelors Degree, or 4+ years of hands-on IT experience</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4>Skills</h4>
            <ul>
              <li>
                Programming experience developing web applications with the
                Microsoft .NET stack and a basic knowledge of SQL
              </li>
              <li>
                Development experience with Angular, Node.JS, or ColdFusion
              </li>
              <li>HTML, CSS, XHTML, XML</li>
              <li>
                Hypervisors, SAN’s, load balancers, firewalls, and Web
                Application Firewall (WAF)
              </li>
              <li>Experience with Higher Logic (a collaboration platform)</li>
              <li>MongoDB, Drupal</li>
              <li>Mobile App Development (iOS and Android)</li>
              <li>Episerver CMS</li>
              <li>Microsoft Team Foundation Server</li>
              <li>Speaker Management System (Planstone)</li>
            </ul>
          </div>

          <div className="mt-4 mt-lg-5">
            <a
              href="https://pixelprime.co/themes/jobster/jobs-list-10.html#"
              className="btn rounded-pill pxp-section-cta"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
      <button className="btn rounded-pill pxp-jobs-tab-pane-close-btn d-inline-block d-lg-none">
        <span className="fa fa-angle-left"></span> Back
      </button>
    </div>
  );
};

export default JobDetails;
