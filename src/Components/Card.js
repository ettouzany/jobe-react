const Card = (props) => {
    function interuptClick   () {
        props.customClickEvent(props.id);
    }

    return (
        <a onClick={()=>interuptClick  ()} className="pxp-jobs-card-4 pxp-has-border" id={`job-${props.id}`}  data-bs-toggle="tab" data-bs-target={`#job-details-${props.id}`} role="tab" aria-controls={`job-details-${props.id}`} aria-selected="true" href="/">
            <div className="pxp-jobs-card-4-company-top">
                {/* <div className="pxp-jobs-card-4-company-logo" style="background-image: url(./assets/images/company-logo-1.png);"></div> */}
                <div className="pxp-jobs-card-4-info">
                    <div className="pxp-jobs-card-4-title">{props.title}</div>
                    <div className="pxp-jobs-card-4-details">
                        <div className="pxp-jobs-card-4-location pxp-text-light">
                            <span className="fa fa-globe"></span>{props.location}
                        </div>
                        <div className="pxp-jobs-card-4-type">{props.type}</div>
                    </div>
                </div>
            </div>
            <div className="pxp-jobs-card-4-company-bottom">
                <div className="pxp-jobs-card-4-category">
                    <span className="pxp-jobs-card-4-company">{props.company}</span>
                </div>
                <div className="pxp-jobs-card-4-bottom-right">
                    <span className="pxp-jobs-card-4-date pxp-text-light">{props.date}</span>
                </div>
            </div>
        </a>
        
    )
    }

    export default Card;