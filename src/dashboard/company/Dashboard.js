const Dashboard =()=>{
    return(
        <div>
            <h1>Dashboard</h1>
            <div className="row mt-4 mt-lg-5 align-items-center">
                    <div className="col-sm-6 col-xxl-3">
                        <div className="pxp-dashboard-stats-card bg-primary bg-opacity-10 mb-3 mb-xxl-0">
                            <div className="pxp-dashboard-stats-card-icon text-primary">
                                <span className="fa fa-file-text-o"></span>
                            </div>
                            <div className="pxp-dashboard-stats-card-info">
                                <div className="pxp-dashboard-stats-card-info-number">13</div>
                                <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Jobs posted</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xxl-3">
                        <div className="pxp-dashboard-stats-card bg-primary bg-opacity-10 mb-3 mb-xxl-0">
                            <div className="pxp-dashboard-stats-card-icon text-success">
                                <span className="fa fa-user"></span>
                            </div>
                            <div className="pxp-dashboard-stats-card-info">
                                <div className="pxp-dashboard-stats-card-info-number">312</div>
                                <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Applications</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xxl-3">
                        <div className="pxp-dashboard-stats-card bg-primary bg-opacity-10 mb-3 mb-xxl-0">
                            <div className="pxp-dashboard-stats-card-icon text-warning">
                                <span className="fa fa-envelope-o"></span>
                            </div>
                            <div className="pxp-dashboard-stats-card-info">
                                <div className="pxp-dashboard-stats-card-info-number">14</div>
                                <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Unread messages</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xxl-3">
                        <div className="pxp-dashboard-stats-card bg-primary bg-opacity-10 mb-3 mb-xxl-0">
                            <div className="pxp-dashboard-stats-card-icon text-danger">
                                <span className="fa fa-bell-o"></span>
                            </div>
                            <div className="pxp-dashboard-stats-card-info">
                                <div className="pxp-dashboard-stats-card-info-number">5</div>
                                <div className="pxp-dashboard-stats-card-info-text pxp-text-light">Notifications</div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export  default Dashboard;