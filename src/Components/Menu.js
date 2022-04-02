const Menu =()=>{
    return(
    <header  className="pxp-header fixed-top">
        <div  className="pxp-container">
            <div  className="pxp-header-container">
                <div  className="pxp-logo">
                    <a href="/"  className="pxp-animate"><span styles={"color: var(--pxpMainColor)"}>j</span>obster</a>
                </div>
                <div  className="pxp-nav-trigger navbar d-xl-none flex-fill">
                    <a role="button"  href="/"data-bs-toggle="offcanvas" data-bs-target="#pxpMobileNav" aria-controls="pxpMobileNav">
                        <div  className="pxp-line-1"></div>
                        <div  className="pxp-line-2"></div>
                        <div  className="pxp-line-3"></div>
                    </a>
                    <div  className="offcanvas offcanvas-start pxp-nav-mobile-container" tabIndex="-1" id="pxpMobileNav">
                        <div  className="offcanvas-header">
                            <div  className="pxp-logo">
                                <a href="/"  className="pxp-animate"><span styles={"color: var(--pxpMainColor)"}>j</span>obster</a>
                            </div>
                            <button type="button"  className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div  className="offcanvas-body">
                            <nav  className="pxp-nav-mobile">
                                <ul  className="navbar-nav justify-content-end flex-grow-1">
                                    <li  className="nav-item dropdown">
                                        <a role="button"  href="/" className="nav-link" data-bs-toggle="dropdown">Home</a>
                                        
                                    </li>
                                    <li  className="nav-item dropdown">
                                        <a role="button"  href="/" className="nav-link" data-bs-toggle="dropdown">Find Jobs</a>
                                       
                                    </li>
                                    
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <nav  className="pxp-nav dropdown-hover-all d-none d-xl-block">
                    <ul>
                        <li  className="dropdown">
                            <a href="/"  className="dropdown-toggle" data-bs-toggle="dropdown">Home</a>
                           
                        </li>
                        <li  className="dropdown">
                            <a href="/"  className="dropdown-toggle" data-bs-toggle="dropdown">Find Jobs</a>

                        </li>

                    </ul>
                </nav>
                <nav  className="pxp-user-nav d-none d-sm-flex">
                    <a href="/"  className="btn rounded-pill pxp-nav-btn">Post a Job</a>
                    <a  className="btn rounded-pill pxp-user-nav-trigger pxp-on-light" data-bs-toggle="modal" href="/#pxp-signin-modal" role="button">Sign in</a>
                </nav>
            </div>
        </div>
    </header>
    )
};

export default Menu;
