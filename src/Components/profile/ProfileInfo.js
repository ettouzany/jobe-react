const ProfileInfo = ({user})=> {

        console.log(user.educations)


        return (
                    (<section>
                        <div className="pxp-container">
                            <div className="pxp-single-candidate-container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-9">
                                        <div className="pxp-single-candidate-hero pxp-cover pxp-boxed" style={{backgroundImage :"url(images/candidate-cover-1.jpg)"}}>
                                            <div className="pxp-hero-opacity"></div>
                                            <div className="pxp-single-candidate-hero-caption">
                                                <div className="pxp-single-candidate-hero-content d-block text-center">
                                                    <div className="pxp-single-candidate-hero-avatar d-inline-block" style={{backgroundImage: "url(images/avatar-3.jpg)"}}></div>
                                                    <div className="pxp-single-candidate-hero-name ms-0 mt-3">
                                                        <h1>{user.first_name} {user.last_name}</h1>
                                                        <div className="pxp-single-candidate-hero-title">{user.title}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-4 mt-lg-5">
                                            <div className="col-lg-7 col-xxl-8">
                                                <div className="pxp-single-candidate-content">
                                                    <h2>About {user.first_name}</h2>
                                                    {user.description}

                                                    <div className="mt-4 mt-lg-5">
                                                        <h2>Skills</h2>
                                                        <div className="pxp-single-candidate-skills">
                                                            <ul className="list-unstyled">
                                                                {
                                                                    
                                                                    user.userSkills.map((skill,index)=>{
                                                                        return(
                                                                            <li key={index}>
                                                                            {skill.skillId}
                                                                        </li>)
                                                                    })
                                                                }
                                                                
                                                            </ul>
                                                        </div>
                                                    </div>
                        
                                                    <div className="mt-4 mt-lg-5">
                                                        <h2>Work Experience</h2>
                                                        <div className="pxp-single-candidate-timeline">
                                                        {user.experiences.map((experience,index)=>{
                                                            return(
                                                                <div key={index} className="pxp-single-candidate-timeline-item">
                                                            <div className="pxp-single-candidate-timeline-dot"></div>
                                                            <div className="pxp-single-candidate-timeline-info ms-3">
                                                                <div className="pxp-single-candidate-timeline-time"><span className="me-3">{experience.startDate +" - " +experience.endDate}</span></div>
                                                                <div className="pxp-single-candidate-timeline-position mt-2">{experience.jobTitle}</div>
                                                                <div className="pxp-single-candidate-timeline-company pxp-text-light">{experience.company}</div>
                                                                <div className="pxp-single-candidate-timeline-about mt-2 pb-4">In publishing and graphic design, lorem ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation. Lorem Ipsum is also known as: Greeked text.</div>
                                                            </div>
                                                        </div>
                                                            )
                                                        })}
                                                            
                                                        </div>
                                                    </div>
                        
                                                    <div className="mt-4 mt-lg-5">
                                                        <h2>Education &amp; Training</h2>
                                                        <div className="pxp-single-candidate-timeline">
                                                            {user.educations.map((education,index)=>{
                                                                return(
                                                                    <div key={index} className="pxp-single-candidate-timeline-item">
                                                                <div className="pxp-single-candidate-timeline-dot"></div>
                                                                <div className="pxp-single-candidate-timeline-info ms-3">
                                                                    <div className="pxp-single-candidate-timeline-time"><span className="me-3">{education.startEndDate}</span></div>
                                                                    <div className="pxp-single-candidate-timeline-position mt-2">{education.title}</div>
                                                                    <div className="pxp-single-candidate-timeline-company pxp-text-light">{education.institution}</div>
                                                                    <div className="pxp-single-candidate-timeline-about mt-2 pb-4">In publishing and graphic design, lorem ipsum is a filler text or greeking commonly used to demonstrate the textual elements of a graphic document or visual presentation. Lorem Ipsum is also known as: Greeked text.</div>
                                                                </div>
                                                            </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-xxl-4">
                                                <div className="pxp-single-candidate-side-panel mt-5 mt-lg-0">
                                                    <div>
                                                        <div className="pxp-single-candidate-side-info-label pxp-text-light">Email</div>
                                                        <div className="pxp-single-candidate-side-info-data">{user.email}</div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <div className="pxp-single-candidate-side-info-label pxp-text-light">Location</div>
                                                        <div className="pxp-single-candidate-side-info-data">{user.city}, {user.country}</div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <div className="pxp-single-candidate-side-info-label pxp-text-light">Phone</div>
                                                        <div className="pxp-single-candidate-side-info-data">{user.phone}</div>
                                                    </div>
                                                </div>
                        
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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>)
            
        );
}

export default ProfileInfo;