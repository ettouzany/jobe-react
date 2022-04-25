

const HeaderProfile = ({ user }) => {
    return(
        <div className="pxp-single-candidate-hero pxp-cover pxp-boxed" style={{backgroundImage :"url(images/candidate-cover-1.jpg)"}}>
            <div className="pxp-hero-opacity"></div>
            <div className="pxp-single-candidate-hero-caption">
                <div className="pxp-single-candidate-hero-content d-block text-center">
                    <div className="pxp-single-candidate-hero-avatar d-inline-block" style={{backgroundImage: `url(${user.photo})`}}></div>
                    <div className="pxp-single-candidate-hero-name ms-0 mt-3">
                        {
                            user.isCompany ?
                            <h1>{user.companyname}</h1>:
                            <h1>{user.first_name} {user.last_name}</h1>
                            }
                        <div className="pxp-single-candidate-hero-title">{user.title}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderProfile;