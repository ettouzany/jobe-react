
import * as React from "react"
import userService from "../../../services/user.service";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";
import InformationForm from "./forms/InformationForm";
import ProfilePhoto from "./ProfilePhoto";

const CondadateProfileEdit = () => {

    const [user, setUser] = React.useState();
    React.useEffect(() => {
        userService.getUserFullData().then(user => {

            console.log(user.data)

            setUser(user.data);
        })
    }, [])

    const handleUserChange = (e) => {
        e.preventDefault();
        console.log(e.target.name)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    //submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        //check the form id
        if (e.target.id === "form1") {
            console.log(user)
            userService.updateUser(user).then(res => {
                //update user image in local storage
                const user = JSON.parse(localStorage.getItem("user"));
                user.photo = res.data.photo;
                localStorage.setItem("user", JSON.stringify(user ));
            })
        }
    }


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





    return (
        <div>
            <h1>Edit Profile</h1>
            <p className="pxp-text-light">Edit your candidate profile page info.</p>
            {
                user ? (

                    <form onSubmit={handleSubmit} id="form1">

                        <ProfilePhoto user={user} handleNewPhoto={handleNewPhoto} />
                        <InformationForm user={user} handleUserChange={handleUserChange} />

                        <Skill ss={user.userSkills} />
                        <Experience es={user.experiences} />
                        <Education es={user.educations} />

                        <div className="mt-4 mt-lg-5">
                            <button className="btn rounded-pill pxp-section-cta">Save Profile</button>
                        </div>
                    </form>
                ) : (
                    <p>Loading...</p>
                )
            }




        </div>
    );
};

export default CondadateProfileEdit;