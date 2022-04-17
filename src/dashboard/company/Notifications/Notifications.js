
const Notifications = ()=>{
    return(
        <div >
                <h1>Notifications</h1>
                <p className="pxp-text-light">History of all your received notifications.</p>

                <div className="mt-4 mt-lg-5">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <tbody>
                                <tr>
                                    <td style={{width: "75%"}}>
                                        <div className="pxp-dashboard-notifications-item-left">
                                            <div className="pxp-dashboard-notifications-item-type"><span className="fa fa-briefcase"></span></div>
                                            <div className="pxp-dashboard-notifications-item-message">
                                                <a href="#">Scott Goodwin</a> applied for <a href="#">Software Engineer</a>.
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{width: "20%"}}><div className="pxp-dashboard-notifications-item-right">20m ago</div></td>
                                    <td>
                                        <div className="pxp-dashboard-table-options">
                                            <ul className="list-unstyled">
                                                <li><button title="Delete"><span className="fa fa-trash-o"></span></button></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="col-auto">
                            <nav className="mt-3 mt-sm-0" aria-label="Notifications pagination">
                                <ul className="pagination pxp-pagination">
                                    <li className="page-item active" aria-current="page">
                                        <span className="page-link">1</span>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Notifications;