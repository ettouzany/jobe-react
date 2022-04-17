


const Inbox = () => {
    return (
        <div className="">
                <h1>Inbox</h1>
                <p className="pxp-text-light">Keep in touch with your candidates.</p>

                <div className="row mt-4 mt-lg-5">
                    <div className="col-xxl-4">
                        <div className="pxp-dashboard-inbox-search-form">
                            <div className="input-group">
                                <span className="input-group-text"><span className="fa fa-search"></span></span>
                                <input type="text" className="form-control" placeholder="Search messages..."/>
                            </div>
                        </div>

                        <div className="mt-3 mt-lg-4 pxp-dashboard-inbox-list">
                            <ul className="list-unstyled">
                                <li className="pxp-active">
                                    <a href="/" className="pxp-dashboard-inbox-list-item">
                                        <div className="pxp-dashboard-inbox-list-item-top">
                                            <div className="pxp-dashboard-inbox-list-item-left">
                                                <div className="pxp-dashboard-inbox-list-item-avatar pxp-cover" style={{backgroundImage: "url(images/avatar-1.jpg)"}}></div>
                                                <div className="pxp-dashboard-inbox-list-item-name ms-2">Scott Goodwin</div>
                                            </div>
                                            <div className="pxp-dashboard-inbox-list-item-right">
                                                <div className="pxp-dashboard-inbox-list-item-time">13:00</div>
                                            </div>
                                        </div>
                                        <div className="mt-2 d-flex justify-content-between">
                                            <div className="pxp-dashboard-inbox-list-item-text pxp-text-light">Replacing meaningful content with placeholder text allows...</div>
                                            <div className="pxp-dashboard-inbox-list-item-no ms-3"><span className="badge rounded-pill">3</span></div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-8">
                        <div className="pxp-dashboard-inbox-messages-container">
                            <div className="pxp-dashboard-inbox-messages-header">
                                <div className="pxp-dashboard-inbox-list-item-left">
                                    <div className="pxp-dashboard-inbox-list-item-avatar pxp-cover" style={{backgroundImage: "url(images/avatar-1.jpg)"}}></div>
                                    <div className="pxp-dashboard-inbox-list-item-name ms-2">Scott Goodwin</div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="pxp-dashboard-inbox-list-item-options">
                                        <button title="Delete conversation"><span className="fa fa-trash-o"></span></button>
                                    </div>
                                    <button className="btn rounded-pill pxp-dashboard-inbox-messages-close-btn d-inline-block d-xxl-none"><span className="fa fa-angle-left"></span> Back</button>
                                </div>
                            </div>
                            <div className="pxp-dashboard-inbox-messages-content">
                                <div className="pxp-dashboard-inbox-messages-item">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="pxp-dashboard-inbox-messages-item-header">
                                                <div className="pxp-dashboard-inbox-messages-item-avatar pxp-cover" style={{backgroundImage:"url(images/avatar-1.jpg)"}}></div>
                                                <div className="pxp-dashboard-inbox-messages-item-name ms-2">Scott Goodwin</div>
                                                <div className="pxp-dashboard-inbox-messages-item-time pxp-text-light ms-3">13:34</div>
                                            </div>
                                            <div className="pxp-dashboard-inbox-messages-item-message pxp-is-other mt-2">
                                                Lorem Ipsum is also known as: Greeked text, blind text, placeholder text, dummy content, filler text, lipsum, and mock-content.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pxp-dashboard-inbox-messages-item mt-4">
                                    <div className="row justify-content-end">
                                        <div className="col-7">
                                            <div className="pxp-dashboard-inbox-messages-item-header flex-row-reverse">
                                                <div className="pxp-dashboard-inbox-messages-item-avatar pxp-cover" style={{backgroundImage: "url(images/company-logo-1.png)"}}></div>
                                                <div className="pxp-dashboard-inbox-messages-item-name me-2">Artistre Studio</div>
                                                <div className="pxp-dashboard-inbox-messages-item-time pxp-text-light me-3">13:34</div>
                                            </div>
                                            <div className="pxp-dashboard-inbox-messages-item-message pxp-is-self mt-2">
                                                Lorem Ipsum is also known as: Greeked text, blind text, placeholder text, dummy content, filler text, lipsum, and mock-content.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pxp-dashboard-inbox-messages-footer">
                                <div className="pxp-dashboard-inbox-messages-footer-field">
                                    <input type="text" className="form-control" placeholder="Type your message here..."/>
                                </div>
                                <div className="pxp-dashboard-inbox-messages-footer-btn">
                                    <button className="btn rounded-pill pxp-section-cta">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
export default Inbox;