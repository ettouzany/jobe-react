

import { Link } from "react-router-dom";
const Selection = ({ message, date, user }) => {
    return (
        <Link to={`/dashboard/company/inbox/${user.id}`} className="pxp-dashboard-inbox-list-item">
            <div className="pxp-dashboard-inbox-list-item-top">
                <div className="pxp-dashboard-inbox-list-item-left">
                    <div className="pxp-dashboard-inbox-list-item-avatar pxp-cover" style={{ backgroundImage: `url(${user.avatar})` }}></div>
                    <div className="pxp-dashboard-inbox-list-item-name ms-2">{user.name}</div>
                </div>
                <div className="pxp-dashboard-inbox-list-item-right">
                    <div className="pxp-dashboard-inbox-list-item-time">{date}</div>
                </div>
            </div>
            <div className="mt-2 d-flex justify-content-between">
                <div className="pxp-dashboard-inbox-list-item-text pxp-text-light">{message}</div>
                <div className="pxp-dashboard-inbox-list-item-no ms-3"><span className="badge rounded-pill">3</span></div>
            </div>
        </Link>
    )
}

export default Selection;