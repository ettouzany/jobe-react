
import { Link, useParams } from "react-router-dom";
import authService from "../../../services/auth/auth.service";
const HeaderProfile = ({ user }) => {

    const id = useParams();


    return (
        <div className="pxp-single-candidate-hero pxp-cover pxp-boxed" style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL + user.cover})` }}>

            <div className="pxp-hero-opacity">
                {
                    id == authService.getUserId() ?
                        <div style={{ float: "right" }}>
                            <button className="btn rounded-pill pxp-nav-btn">Change Cover</button>
                            <Link to="/dashboard/profile/"> <button className="btn rounded-pill pxp-nav-btn m-3">Edit Profile</button></Link>
                        </div>
                        : null
                }

            </div>

            <div className="pxp-single-candidate-hero-caption">
                <div className="pxp-single-candidate-hero-content d-block text-center">
                    <div className="pxp-single-candidate-hero-avatar d-inline-block" style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL + user.photo})` }}></div>
                    <div className="pxp-single-candidate-hero-name ms-0 mt-3">
                        {
                            user.isCompany ?
                                <h1>{user.companyname}</h1> :
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