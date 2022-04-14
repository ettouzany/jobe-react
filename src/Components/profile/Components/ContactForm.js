
const ContactForm = () => {
    return(
        <div className="pxp-single-candidate-side-panel mt-4 mt-lg-5">
            <h3>Contact Rebecca</h3>
            <form className="mt-4">
                <div className="mb-3">
                    <label htmlFor="contact-candidate-name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="contact-candidate-name" placeholder="Enter your name"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="contact-candidate-email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="contact-candidate-email" placeholder="Enter your email address"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="contact-candidate-message" className="form-label">Message</label>
                    <textarea className="form-control" id="contact-candidate-message" placeholder="Type your message here..."></textarea>
                </div>
                <a href="/" className="btn rounded-pill pxp-section-cta d-block">Send Message</a>
            </form>
        </div>
    )
}

export default ContactForm;