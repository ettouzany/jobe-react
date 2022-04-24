import authService from "../../../../services/auth/auth.service";
import { useEffect, useState } from "react";
import userService from "../../../../services/user.service";
import Education from "../../../../dashboard/condidate/profile/Education";
import Experience from "../../../../dashboard/condidate/profile/Experience";
import Skill from "../../../../dashboard/condidate/profile/Skill";

const Step3 = ({
    handelNext,
    handelPrev,
    handleSkip,
}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    useEffect(() => {
        userService.getUserFullData().then(user => {
            setUser(user.data);
            setLoading(false);
        })
    }, [])
    const handleSubmit = () => {

        userService.updateUserNameImage(user).then(user => {

            setUser(user.data);
            let auser = authService.getCurrentUser();
            auser.photo = user.data.photo;
            auser.firstName = user.data.first_name;
            auser.lastName = user.data.first_name;
            localStorage.setItem("user", JSON.stringify(auser));
            handleSkip();
        })
    }
    return (
        <div>
            {
                loading ?
                    <div>loading</div>
                    :
                    <div className="mt-5 p-3">
                        {
                            user.isCompany ?
                                (
                                    null
                                )
                                :
                                (
                                    <div>
                                        <Skill ss={user.userSkills} />
                                        <Experience es={user.experiences} />
                                        <Education es={user.educations} />
                                    </div>
                                )
                        }
                    </div>
            }
            <div className='row '>
                <div className='col-6 '>
                    <button className='btn rounded-pill pxp-subsection-cta m-2 ' style={{ float: "right" }} color="primary" variant="contained" type="button" onClick={handelPrev} >
                        Previus
                    </button>
                </div>
                <div className='col-6 '>
                    <button className='btn rounded-pill pxp-section-cta m-2' color="primary" variant="contained" type="button" onClick={handleSubmit}>
                        Finish
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Step3;