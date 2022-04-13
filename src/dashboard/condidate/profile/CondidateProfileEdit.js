
import * as React from "react"
import userService from "../../../services/user.service";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";
import InformationForm from "./forms/InformationForm";

const CondadateProfileEdit = () => {
    
    const [user, setUser] = React.useState();
    React.useEffect(() => {
        userService.getUserFullData().then(user => {

            console.log(user.data)
            
            setUser(user.data);
        })
    }, [])

    const handleUserChange = (e) => {
        console.log(e.target.name)
        setUser({ ...user, [e.target.name]: e.target.value })

    }

    //submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        userService.updateUser(user).then(res => {
            console.log(res)
        })
    }







    return (
        <div>
            <h1>Edit Profile</h1>
                <p className="pxp-text-light">Edit your candidate profile page info.</p>
                {
                    user ? (
                                
                    <form onSubmit={handleSubmit}>
                        
                        
                        <InformationForm user={user} handleUserChange={handleUserChange} />
                        
                        <Skill ss={user.userSkills}/>
                        <Experience es={user.experiences}/>
                        <Education es={user.educations}/>

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