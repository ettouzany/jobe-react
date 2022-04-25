import { useState } from "react";
import messageService from "../../../services/messages.service";
import { useNavigate } from "react-router-dom";

const ContactForm = ({ id }) => {
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(message);
        const { data } = await messageService.sendMessage(message, id, id);
        navigate("/dashboard/inbox");
    }

    return (
        <div className="pxp-single-candidate-side-panel mt-4 mt-lg-5">
            <h3>Contact Rebecca</h3>
            <form className="mt-4" onSubmit={handleSubmit}>
                {/* <div className="mb-3">
                    <label htmlFor="contact-candidate-name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="contact-candidate-name" placeholder="Enter your name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="contact-candidate-email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="contact-candidate-email" placeholder="Enter your email address"/>
                </div> */}
                <div className="mb-3">
                    <label htmlFor="contact-candidate-message" className="form-label">Message</label>
                    <textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className="form-control" id="contact-candidate-message" placeholder="Type your message here..."></textarea>
                </div>
                <button className="btn rounded-pill pxp-section-cta d-block" type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;