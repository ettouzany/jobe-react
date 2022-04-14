import React from "react";
import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import UserMenu from "../../Components/UserMenu";
import authService from "../../services/auth/auth.service";

const CompanyDashboardLayout = (props) => {
    
      
    return (
        <div style={{ backgroundColor: "var(--pxpMainColorLight)" }}>
            <div className="pxp-dashboard-side-panel d-none d-lg-block">
             <div className="pxp-logo">
                <Link to="/" className="pxp-animate"><span       style={{ color: "var(--pxpMainColor)" }}>j</span>obrah</Link>
            </div> 

            <nav className="mt-3 mt-lg-4 d-flex justify-content-between flex-column pb-100">
                <div className="pxp-dashboard-side-label">Admin tools</div>
                <ul className="list-unstyled">
                    <li> <NavLink to={"./"} className={({ isActive }) => (isActive? 'pxp-active' : null)+ " pxp-animate"} > <span className="fa fa-home"></span>Dashboard </NavLink> </li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'pxp-active' : null)} to="profile" ><span className="fa fa-pencil"></span>Edit Profile</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'pxp-active' : null)} to="post"><span className="fa fa-file-text-o"></span>New Job Offer</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'pxp-active' : null)} to="jobs"><span className="fa fa-briefcase"></span>Manage Jobs</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'pxp-active' : null)} to="condadates"><span className="fa fa-user"></span>Candidates</NavLink></li>
                    {/* <li><Link to="company-dashboard-subscriptions.html"><span className="fa fa-credit-card"></span>Subscriptions</Link></li>
                    <li><Link to="company-dashboard-password.html"><span className="fa fa-lock"></span>Change Password</Link></li> */}
                </ul>
                <div className="pxp-dashboard-side-label mt-3 mt-lg-4">Insights</div>
                <ul className="list-unstyled">
                    <li>
                        <a href="company-dashboard-inbox.html" className="d-flex justify-content-between align-items-center">
                            <div><span className="fa fa-envelope-o"></span>Inbox</div>
                            <span className="badge rounded-pill">14</span>
                        </a>
                    </li>
                    <li>
                        <a href="company-dashboard-notifications.html" className="d-flex justify-content-between align-items-center">
                            <div><span className="fa fa-bell-o"></span>Notifications</div>
                            <span className="badge rounded-pill">5</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <nav className="pxp-dashboard-side-user-nav-container">
                <div className="pxp-dashboard-side-user-nav">
                    <UserMenu user={authService.getCurrentUser()} logoutCallback={()=>authService.logout()}/>
                </div>
            </nav>
            </div>
            <div className="pxp-dashboard-content">
                <div className="pxp-dashboard-content-header">
                    <div className="pxp-nav-trigger navbar pxp-is-dashboard d-lg-none">
                        <a role="button" data-bs-toggle="offcanvas" data-bs-target="#pxpMobileNav" aria-controls="pxpMobileNav">
                            <div className="pxp-line-1"></div>
                            <div className="pxp-line-2"></div>
                            <div className="pxp-line-3"></div>
                        </a>
                        <div className="offcanvas offcanvas-start pxp-nav-mobile-container pxp-is-dashboard" tabIndex="-1" id="pxpMobileNav">
                            <div className="offcanvas-header">
                                <div className="pxp-logo">
                                    <a href="index.html" className="pxp-animate"><span style={{color: "var(--pxpMainColor}"}}>j</span>obster</a>
                                </div>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <nav className="pxp-nav-mobile">
                                    <ul className="navbar-nav justify-content-end flex-grow-1">
                                        <li className="pxp-dropdown-header">Admin tools</li>
                                        <li className="nav-item"><a href="company-dashboard.html"><span className="fa fa-home"></span>Dashboard</a></li>
                                        <li className="nav-item"><a href="company-dashboard-profile.html"><span className="fa fa-pencil"></span>Edit Profile</a></li>
                                        <li className="nav-item"><a href="company-dashboard-new-job.html"><span className="fa fa-file-text-o"></span>New Job Offer</a></li>
                                        <li className="nav-item"><a href="company-dashboard-jobs.html"><span className="fa fa-briefcase"></span>Manage Jobs</a></li>
                                        <li className="nav-item"><a href="company-dashboard-candidates.html"><span className="fa fa-user-circle-o"></span>Candidates</a></li>
                                        <li className="nav-item"><a href="company-dashboard-subscriptions.html"><span className="fa fa-credit-card"></span>Subscriptions</a></li>
                                        <li className="nav-item"><a href="company-dashboard-password.html"><span className="fa fa-lock"></span>Change Password</a></li>
                                        <li className="pxp-dropdown-header mt-4">Insights</li>
                                        <li className="nav-item">
                                            <a href="company-dashboard-inbox.html" className="d-flex justify-content-between align-items-center">
                                                <div><span className="fa fa-envelope-o"></span>Inbox</div>
                                                <span className="badge rounded-pill">14</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="company-dashboard-notifications.html" className="d-flex justify-content-between align-items-center">
                                                <div><span className="fa fa-bell-o"></span>Notifications</div>
                                                <span className="badge rounded-pill">5</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <nav className="pxp-user-nav pxp-on-light">
                        <a href="company-dashboard-new-job.html" className="btn rounded-pill pxp-nav-btn">Post a Job</a>
                         <div className="dropdown pxp-user-nav-dropdown pxp-user-notifications">
                            <a role="button" className="dropdown-toggle" data-bs-toggle="dropdown">
                                <span className="fa fa-bell-o"></span>
                                <div className="pxp-user-notifications-counter">5</div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="company-dashboard-notifications.html"><strong>Scott Goodwin</strong> applied for <strong>Software Engineer</strong>. <span className="pxp-is-time">20m</span></a></li>
                                <li><a className="dropdown-item" href="company-dashboard-notifications.html"><strong>Alayna Becker</strong> sent you a message. <span className="pxp-is-time">1h</span></a></li>
                                <li><a className="dropdown-item" href="company-dashboard-notifications.html"><strong>Erika Tillman</strong> applied for <strong>Team Leader</strong>. <span className="pxp-is-time">2h</span></a></li>
                                <li><a className="dropdown-item" href="company-dashboard-notifications.html"><strong>Scott Goodwin</strong> applied for <strong>Software Engineer</strong>. <span className="pxp-is-time">5h</span></a></li>
                                <li><a className="dropdown-item" href="company-dashboard-notifications.html"><strong>Alayna Becker</strong> sent you a message. <span className="pxp-is-time">1d</span></a></li>
                                <li><a className="dropdown-item" href="company-dashboard-notifications.html"><strong>Erika Tillman</strong> applied for <strong>Software Engineer</strong>. <span className="pxp-is-time">3d</span></a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item pxp-link" href="company-dashboard-notifications.html">Read All</a></li>
                            </ul>
                        </div>
                        <UserMenu user={authService.getCurrentUser()} logoutCallback={()=>authService.logout()}/>

                    </nav>
                </div>

                <div className="pxp-dashboard-content-details">
                    <Outlet/>
                </div>

                <footer>
                    <div className="pxp-footer-copyright pxp-text-light">© 2021 Jobster. All Right Reserved.</div>
                </footer>
            </div>
            
        </div>
    );
  
}

export default CompanyDashboardLayout;