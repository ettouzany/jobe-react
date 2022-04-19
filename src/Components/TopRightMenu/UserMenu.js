import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth/auth.service";
import NotificationsTable from "./notifications/notificationsTable";

const UserMenu = () => {

    const user = authService.getCurrentUser();

    const navigate = useNavigate();

    const logout = () => {
        authService.logout();
        navigate("/login");
    };

    return (


        <nav className="pxp-user-nav pxp-on-light">
            <a href="company-dashboard-new-job.html" className="btn rounded-pill pxp-nav-btn">Post a Job</a>
            <NotificationsTable />

            <div className="dropdown pxp-user-nav-dropdown">
                <a href="index.html" className="dropdown-toggle" data-bs-toggle="dropdown">
                    <div className="pxp-user-nav-avatar pxp-cover" style={{ backgroundImage: `url(${user.photo})` }}></div>
                    <div className="pxp-user-nav-name d-none d-md-block">{user.firstName}</div>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><Link to={user.company ? "/dashboard/company/" : "/dashboard/"} className="dropdown-item" >Dashboard</Link></li>
                    <li><Link to={"/dashboard/profile"} className="dropdown-item" >Edit profile</Link></li>
                    <li onClick={logout}><a className="dropdown-item"  >Logout</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default UserMenu;