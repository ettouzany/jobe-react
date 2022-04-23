import { useEffect } from "react";
import NameTittleForm from "../../../../dashboard/condidate/profile/forms/NameTittleForm";
import NameIndustryForm from "../../../../dashboard/condidate/profile/forms/NameIndustryForm";
import userService from "../../../../services/user.service";
import authService from "../../../../services/auth/auth.service";
import { useState } from "react";
import ProfilePhoto from "../../../../dashboard/condidate/profile/ProfilePhoto";
const Step2 = ({
    handelNext,
    handelPrev,
    handleSkip,
}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        userService.getUserFullData().then(user => {
            setUser(user.data);
            setLoading(false);
        })
    }, []);
    const handleNewPhoto = (ablob) => {
        fetch(ablob)
            .then(res => res.blob()) // Gets the response and returns it as a blob
            .then(blob => {
                //file = blobToFile(blob,"download.jpg");
                //new File([theBlob], fileName, { lastModified: new Date().getTime(), type: theBlob.type })
                const file = new File([blob], "download.jpg", { lastModified: new Date().getTime(), type: blob.type });
                setUser({ ...user, photo: file })
            })
        //from file to form data

    }
    const handleUserChange = (e) => {
        e.preventDefault();
        console.log(e.target.name)
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        if (user.isCompany)
            userService.updateCompanyNameImage(user).then(user => {
                setUser(user.data);
                let auser = authService.getCurrentUser();
                auser.photo = user.data.photo;
                auser.companyname = user.data.companyname;
                localStorage.setItem("user", JSON.stringify(auser));
                handelNext();
            })
        else
            userService.updateUserNameImage(user).then(user => {

                setUser(user.data);
                let auser = authService.getCurrentUser();
                auser.photo = user.data.photo;
                auser.firstName = user.data.first_name;
                auser.lastName = user.data.first_name;
                localStorage.setItem("user", JSON.stringify(auser));
                handelNext();
            })
    }

    return (
        <div>
            {
                loading ?
                    <div>loading</div>
                    :
                    <div className="mt-5 p-3">
                        <ProfilePhoto user={user} handleNewPhoto={handleNewPhoto} />
                        <div className="col-lg-3 m-auto d-block">
                            {user.isCompany ? <NameIndustryForm user={user} handleUserChange={handleUserChange} /> :
                                <NameTittleForm user={user} handleUserChange={handleUserChange} />}
                        </div>
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
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Step2;