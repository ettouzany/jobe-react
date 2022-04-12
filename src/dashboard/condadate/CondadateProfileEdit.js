
import authService from "../../services/auth/auth.service";
import Croppie from "croppie";
import * as React from "react"
import userService from "../../services/user.service";
import Modal from 'react-bootstrap/Modal'
import educationService from "../../services/education.service";
import Education from "./profile/Education";
import Experience from "./profile/Experience";

const CondadateProfileEdit = () => {
    // CompanyStructer: null
    // LastLogin: null
    // adress: null
    // city: null
    // companyname: null
    // country: null
    // dayofbirth: null
    // description: null
    // email: "n.ettouzany@gmail.com"
    // fax: null
    // file: null
    // first_name: "noureddine"
    // fix: null
    // gender: null
    // googleId: "110694666103807910316"
    // id: 9
    // isCompany: null
    // last_name: "ettouzany"
    // password: "$2b$10$EBwTF214W/GDy2W/dzvCOu3m3gsxt5TsrNlAhsEn5zOKz9kE.P0Bm"
    // phone: null
    // photo: "https://lh3.googleusercontent.com/a-/AOh14GhDGviSQfClhU35GXHymyJwSFvbig8sOIKKIyW5-w=s96-c"
    // salt: "$2b$10$EBwTF214W/GDy2W/dzvCOu"
    // status: null
    // time_zone: null
    // username: "110694666103807910316"
    // valid: false
    // verified: null
    // website: null
    // zipcode: null
    const [image, setImage] = React.useState("")
    const [croppie, setCroppie] = React.useState(null)
    
    const [user, setUser] = React.useState();
    const [SelectedExperience, setSelectedExperience] = React.useState();
    const [showExperience, setShowExperience] = React.useState(false);



    const handleCloseExperience = () => setShowExperience(false);
    const handleShowExperience = () => setShowExperience(true);

  

    const AddToUserExperiences = (experience) => {
        setUser({ ...user, experiences: [...user.experiences, experience] })
    }

    const deleteFromUserExperiences = (experience) => {
        setUser({ ...user, experiences: user.experiences.filter(e => e.id !== experience.id) })
    }

    const updateUserExperiences = (experience) => {
        setUser({ ...user, experiences: user.experiences.map(e => e.id === experience.id ? experience : e) })
    }

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
    var croppieInstance = croppie;
    function handleImage(image) {
        setImage(image)

      const el = document.getElementById("image-helper")
      if (el) {
        
        if(!croppieInstance)
        croppieInstance = new Croppie(el, {
          enableExif: true,
          viewport: {
            height: 250,
            width: 250,
          },
          boundary: {
            height: 250,
            width: 400,
         }
      });
      croppieInstance.bind({
        url: image,
      });
      setCroppie(croppieInstance)
      }
    }
  
    function handleSubmit(event) {
      event.preventDefault()
      if (croppie !== null) {
        croppie.result({type: 'base64',
        size: {
            width: 480,
            height: 480
        }}).then((blob) => {
          console.log(blob)
        }
        )
      }
      setImage("");
    }

    const handleFileInput = (e) => {
        // handle validations
        console.log(e.target.files[0])
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            handleImage(reader.result)
        }
        reader.readAsDataURL(file);
    }




    return (
        <div>
               

            <h1>Edit Profile</h1>
                <p className="pxp-text-light">Edit your candidate profile page info.</p>
                {
                    user ? (
                                
                    <form>
                        <div className="col-xxl-4">
                                <div className="form-label">&nbsp;</div>
                                <div className="pxp-candidate-cover mb-3" onClick={()=>setImage(true)}>
                                    test
                                </div>
                                
                            </div>
                        <div className="row mt-4 mt-lg-5">
                            <div className="col-xxl-8">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label htmlFor="first_name" className="form-label">First Name</label>
                                            <input
                                            id="first_name"
                                            name="first_name"
                                            onChange={(e) => handleUserChange(e)}
                                            value={user.first_name}
                                            type="text" className="form-control"  value={user.first_name} onChange={handleUserChange} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label htmlFor="last_name" className="form-label">Last Name</label>
                                            <input
                                            id="last_name"
                                            name="last_name"
                                            onChange={(e) => handleUserChange(e)}
                                            value={user.last_name}
                                            type="text" className="form-control" value={user.last_name} onChange={handleUserChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label htmlFor="pxp-candidate-title" className="form-label">Title</label>
                                            <input type="text" id="pxp-candidate-title" className="form-control" placeholder="E.g. Web Designer"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label htmlFor="pxp-candidate-location" className="form-label">Location</label>
                                            <input type="tel" id="pxp-candidate-location" className="form-control" placeholder="E.g. San Francisco, CA"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label htmlFor="pxp-candidate-email" className="form-label">Email</label>
                                            <input
                                            name="email"
                                            value={user.email}
                                            onChange={(e) => handleUserChange(e)}
                                            type="email" id="pxp-candidate-email" className="form-control" placeholder="candidate@email.com"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label htmlFor="pxp-candidate-phone" className="form-label">Phone</label>
                                            <input type="tel" id="pxp-candidate-phone" className="form-control" placeholder="(+12) 345 6789"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="mb-3">
                            <label htmlFor="pxp-candidate-about" className="form-label">About you</label>
                            <textarea className="form-control" id="pxp-candidate-about" placeholder="Type your info here..."></textarea>
                        </div>

                        <div className="mt-4 mt-lg-5">
                            <h2>Skills</h2>
                            <div className="pxp-candidate-dashboard-skills mb-3">
                                <ul className="list-unstyled">
                                    <li>Work from home<span className="fa fa-trash-o"></span></li>
                                    <li>Part-time<span className="fa fa-trash-o"></span></li>
                                    <li>Administration<span className="fa fa-trash-o"></span></li>
                                    <li>Finance<span className="fa fa-trash-o"></span></li>
                                    <li>Retail<span className="fa fa-trash-o"></span></li>
                                    <li>IT<span className="fa fa-trash-o"></span></li>
                                    <li>Engineering<span className="fa fa-trash-o"></span></li>
                                    <li>Sales<span className="fa fa-trash-o"></span></li>
                                    <li>Manufacturing<span className="fa fa-trash-o"></span></li>
                                </ul>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Skill"/>
                                <button className="btn">Add Skill</button>
                            </div>
                        </div>

                        <div className="mt-4 mt-lg-5">
                            <h2>Work Experience</h2>
                            <div className="table-responsive">
                                <table className="table align-middle">
                                    <tbody><tr>
                                        <td style={{width: "30%"}}><div className="pxp-candidate-dashboard-experience-title">Senior UI/UX Designer</div></td>
                                        <td style={{width: "25%"}}><div className="pxp-candidate-dashboard-experience-company">Adobe Corporation</div></td>
                                        <td style={{width: "25%"}}><div className="pxp-candidate-dashboard-experience-time">2005 - 2013</div></td>
                                        <td>
                                            <div className="pxp-dashboard-table-options">
                                                <ul className="list-unstyled">
                                                    <li><button title="Edit"><span className="fa fa-pencil"></span></button></li>
                                                    <li><button title="Delete"><span className="fa fa-trash-o"></span></button></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: "30%"}}><div className="pxp-candidate-dashboard-experience-title">Senior UI/UX Designer</div></td>
                                        <td style={{width: "25%"}}><div className="pxp-candidate-dashboard-experience-company">Adobe Corporation</div></td>
                                        <td style={{width: "25%"}}><div className="pxp-candidate-dashboard-experience-time">2005 - 2013</div></td>
                                        <td>
                                            <div className="pxp-dashboard-table-options">
                                                <ul className="list-unstyled">
                                                    <li><button title="Edit"><span className="fa fa-pencil"></span></button></li>
                                                    <li><button title="Delete"><span className="fa fa-trash-o"></span></button></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width: "30%"}}><div className="pxp-candidate-dashboard-experience-title">Senior UI/UX Designer</div></td>
                                        <td style={{width: "25%"}}><div className="pxp-candidate-dashboard-experience-company">Adobe Corporation</div></td>
                                        <td style={{width: "25%"}}><div className="pxp-candidate-dashboard-experience-time">2005 - 2013</div></td>
                                        <td>
                                            <div className="pxp-dashboard-table-options">
                                                <ul className="list-unstyled">
                                                    <li><button title="Edit"><span className="fa fa-pencil"></span></button></li>
                                                    <li><button title="Delete"><span className="fa fa-trash-o"></span></button></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody></table>
                            </div>

                            <div className="row mt-3 mt-lg-4">
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label htmlFor="pxp-candidate-work-title" className="form-label">Job title</label>
                                        <input type="text" id="pxp-candidate-work-title" className="form-control" placeholder="E.g. Web Designer"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label htmlFor="pxp-candidate-work-company" className="form-label">Company</label>
                                        <input type="text" id="pxp-candidate-work-company" className="form-control" placeholder="Company name"/>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="mb-3">
                                        <label htmlFor="pxp-candidate-work-time" className="form-label">Time period</label>
                                        <input type="text" id="pxp-candidate-work-time" className="form-control" placeholder="E.g. 2005 - 2013"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pxp-candidate-work-about" className="form-label">Description</label>
                                <textarea className="form-control pxp-smaller" id="pxp-candidate-work-about" placeholder="Type a short description here..."></textarea>
                            </div>
                            <button className="btn rounded-pill pxp-subsection-cta">Add Experience</button>
                        </div>
                        <Experience es={user.experiences}/>
                        <Education es={user.educations} />

                        <div className="mt-4 mt-lg-5">
                            <button className="btn rounded-pill pxp-section-cta">Save Profile</button>
                        </div>
                    </form>
                    ) : (
                        <p>Loading...</p>
                    )
                }
                        <Modal centered={true} onEntered={()=>handleImage(user.photo)} show={image} className="modal fade pxp-user-modal" id="pxp-signin-modal">
                        {/* <Modal.Header closeButton>
                        </Modal.Header> */}
                        <div>
                        <form onSubmit={handleSubmit}>
                          {/* Your image upload functionality here */}

                                {image === "" && (
                                        //  <ImageUpload image={image} setImage={handleImage} />
                                    <span onClick={()=>handleImage(user.photo)}>click</span>
                                    )}
                                
                                    <div id="image-helper"></div>
                                    
                                <button color="primary" variant="contained" type="submit">
                                    Submit
                                </button>
                                <label htmlFor="pxp-candidate-cover-choose-file">
                                        Submit
                                </label>
                                <input type="file" id="pxp-candidate-cover-choose-file" accept="image/*" hidden onChange={handleFileInput}/>
                            </form>
                        </div>
                        </Modal>



        </div>
    );
};

export default CondadateProfileEdit;