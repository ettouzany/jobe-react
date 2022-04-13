import Modal from 'react-bootstrap/Modal'
import Croppie from "croppie";
import { useState } from "react";


const ProfilePhot= ({user})=>
{
    const [croppie, setCroppie] = useState(null)

    const [image, setImage] = useState("")
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
    return(
        <div>
            <div className="col-xxl-4">
                                <div className="form-label">&nbsp;</div>
                                <div className="pxp-candidate-cover mb-3" onClick={()=>setImage(true)}>
                                    test
                                </div>
                                
                            </div>
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
    )
                        
}

export default ProfilePhot;