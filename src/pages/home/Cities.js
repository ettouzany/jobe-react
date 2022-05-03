const Cities = () => {
    return (
        <section className="mt-100">
            <div className="pxp-container">
                <h2 className="pxp-section-h2">Popular Cities</h2>
                <p className="pxp-text-light">Start your next carrer in a beautiful city</p>

                <div className="row mt-4 mt-md-5 pxp-animate-in pxp-animate-in-top pxp-in">
                    <div className="col-12 col-md-4 col-lg-3 col-xxl-2 pxp-cities-card-1-container">
                        <a href="jobs-list-1.html" className="pxp-cities-card-1 text-center">
                            <div className="pxp-cities-card-1-top">
                                <div className="pxp-cities-card-1-image pxp-cover" style={{backgroundImage: "url(images/city-1.jpg)"}}></div>
                                <div className="pxp-cities-card-1-name">Paris, France</div>
                            </div>
                            <div className="pxp-cities-card-1-bottom">
                                <div className="pxp-cities-card-1-jobs">366 open positions</div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="mt-4 mt-md-5 pxp-animate-in pxp-animate-in-top pxp-in">
                    <a href="jobs-list-1.html" className="btn rounded-pill pxp-section-cta">All Cities<span className="fa fa-angle-right"></span></a>
                </div>
            </div>
        </section>
    )
}
export default Cities;