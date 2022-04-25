import { Link } from "react-router-dom";

const CompanyCard = ({ company }) => {
    return (
        <Link to={`/p/${company.id}`}
         className="col-md-6 col-xl-4 col-xxl-3 pxp-companies-card-1-container">
            <div className="pxp-companies-card-1 pxp-has-border">
                <div className="pxp-companies-card-1-top">
                    <span className="pxp-companies-card-1-company-logo" style={{backgroundImage: `url(${company.photo})`}}></span>
                    <span className="pxp-companies-card-1-company-name">{company.companyname}</span>
                    <div className="pxp-companies-card-1-company-description pxp-text-light">{company.descreption}</div>
                </div>
                <div className="pxp-companies-card-1-bottom">
                    <span className="pxp-companies-card-1-company-jobs">10 jobs</span>
                </div>
            </div>
        </Link>
    );
}
export default CompanyCard;