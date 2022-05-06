
const CompanyContact = ({company}) => {
    return (
        <div className="pxp-single-company-side-panel mt-5 mt-lg-0">
            <div className="mt-4">
                <div className="pxp-single-company-side-info-label pxp-text-light">Industry</div>
                <div className="pxp-single-company-side-info-data">{company.industry}</div>
            </div>
            <div className="mt-4">
                <div className="pxp-single-company-side-info-label pxp-text-light">Company size</div>
                <div className="pxp-single-company-side-info-data">{company.size}</div>
            </div>
            <div className="mt-4">
                <div className="pxp-single-company-side-info-label pxp-text-light">Founded in</div>
                <div className="pxp-single-company-side-info-data">{company.founded}</div>
            </div>
            <div className="mt-4">
                <div className="pxp-single-company-side-info-label pxp-text-light">Phone</div>
                <div className="pxp-single-company-side-info-data">{company.fix}</div>
            </div>
            <div className="mt-4">
                <div className="pxp-single-company-side-info-label pxp-text-light">Email</div>
                <div className="pxp-single-company-side-info-data">{company.email}</div>
            </div>
            <div className="mt-4">
                <div className="pxp-single-company-side-info-label pxp-text-light">Location</div>
                <div className="pxp-single-company-side-info-data">{company.city}, {company.countryCode}</div>
            </div>
            <div className="mt-4">
                <div className="pxp-single-company-side-info-label pxp-text-light">Website</div>
                <div className="pxp-single-company-side-info-data"><a href={company.website}>{company.website}</a></div>
            </div>
            <div className="mt-4">
                <div className="pxp-single-company-side-info-data">
                    <ul className="list-unstyled pxp-single-company-side-info-social">
                        <li><a href={company.facebook}><span className="fa fa-facebook"></span></a></li>
                        <li><a href={company.twitter}><span className="fa fa-twitter"></span></a></li>
                        <li><a href={company.instagram}><span className="fa fa-instagram"></span></a></li>
                        <li><a href={company.linkedin}><span className="fa fa-linkedin"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CompanyContact;