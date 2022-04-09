import { Link } from "react-router-dom";

const UserMenu = ({ user, logoutCallback }) => {
    return (
        <div className="dropdown pxp-user-nav-dropdown">
              <a href="index.html" className="dropdown-toggle" data-bs-toggle="dropdown">
                  <div className="pxp-user-nav-avatar pxp-cover" style={{backgroundImage:`url(${user.photo})`}}></div>
                  <div className="pxp-user-nav-name d-none d-md-block">{user.firstName}</div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link to={"/dashboard/"} className="dropdown-item" >Dashboard</Link></li>
                  <li><Link to={"/dashboard/profile"} className="dropdown-item" >Edit profile</Link></li>
                  <li onClick={logoutCallback}><a className="dropdown-item" >Logout</a></li>
              </ul>
        </div>
    );
    }

export default UserMenu;