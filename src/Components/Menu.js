import { Link } from "react-router-dom";
import authService from "../services/auth/auth.service";
import UserMenu from "./TopRightMenu/UserMenu";
import Sign from "./TopRightMenu/Sign";
const Menu = ({mode}) => {
  return (
    <header className="pxp-header fixed-top">
      <div className="pxp-container">
        <div className="pxp-header-container">
          <div className="pxp-logo-nav-container">
            <div className="pxp-logo">
              <a href="/" className="pxp-animate">
                <span style={{ color: "var(--pxpMainColor)" }}>Der</span>Work
              </a>
            </div>
            <div className={mode?"pxp-nav-trigger  navbar d-xl-none flex-fill pxp-light":"pxp-nav-trigger  navbar d-xl-none flex-fill"}>
              <a
                role="button"
                href="/"
                data-bs-toggle="offcanvas"
                data-bs-target="#pxpMobileNav"
                aria-controls="pxpMobileNav"
              >
                <div className="pxp-line-1"></div>
                <div className="pxp-line-2"></div>
                <div className="pxp-line-3"></div>
              </a>
              <div
                className="offcanvas offcanvas-start pxp-nav-mobile-container"
                tabIndex="-1"
                id="pxpMobileNav"
              >
                <div className="offcanvas-header">
                  <div className="pxp-logo">
                    <a href="/" className="pxp-animate">
                      <span style={{ Color: "var(--pxpMainColor)" }}>j</span>
                      obster
                    </a>
                  </div>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <nav className="pxp-nav-mobile">
                    <ul className="navbar-nav justify-content-end flex-grow-1">
                      {/* <li  className="nav-item dropdown">
                                        <a role="button"  href="/" className="nav-link" data-bs-toggle="dropdown">Home</a>
                                        
                                    </li>
                                    <li  className="nav-item dropdown">
                                        <a role="button"  href="/search" className="nav-link" data-bs-toggle="dropdown">Find Jobs</a>
                                       
                                    </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <nav className={mode?"pxp-nav dropdown-hover-all d-none d-xl-block pxp-light":"pxp-nav dropdown-hover-all d-none d-xl-block"}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                  {/* <a href="/"   data-bs-toggle="dropdown">Home</a> */}
                </li>
                <li>
                  <Link to="/search">Find Jobs</Link>
                  {/* <a href="/search"  className="dropdown-toggle" data-bs-toggle="dropdown">Find Jobs</a> */}
                </li>
                <li>
                  <Link to="/companies">Companies</Link>
                  {/* <a href="/search"  className="dropdown-toggle" data-bs-toggle="dropdown">Find Jobs</a> */}
                </li>
              </ul>
            </nav>
          </div>
          <nav className="pxp-user-nav pxp-on-light">

            {/* <Link to="dashboard/post"><span className="btn rounded-pill pxp-nav-btn">
              Post a Job
            </span>
            </Link> */}

            {
              !authService.getCurrentUser() ?
                <Sign />
                :
                <UserMenu />
            }


          </nav>
        </div>

      </div>

    </header>
  );
};

export default Menu;
