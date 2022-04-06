
const ProfileEdit = () => {
    return (
        <div>
            <h1>Edit Profile</h1>
                <p class="pxp-text-light">Edit your company profile page info.</p>

                <form>
                    <div class="row mt-4 mt-lg-5">
                        <div class="col-xxl-8">
                            <div class="mb-3">
                                <label for="pxp-company-name" class="form-label">Company name</label>
                                <input type="text" id="pxp-company-name" class="form-control" placeholder="Add company name"/>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label for="pxp-company-email" class="form-label">Email</label>
                                        <input type="email" id="pxp-company-email" class="form-control" placeholder="company@email.com"/>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3">
                                        <label for="pxp-company-phone" class="form-label">Phone</label>
                                        <input type="tel" id="pxp-company-phone" class="form-control" placeholder="(+12) 345 6789"/>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="pxp-company-website" class="form-label">Website</label>
                                <input type="url" id="pxp-company-website" class="form-control" placeholder="https://"/>
                            </div>
                        </div>
                        <div class="col-xxl-4">
                            <div class="form-label">&nbsp;</div>
                            <div class="pxp-company-cover mb-3">
                                <input type="file" id="pxp-company-cover-choose-file" accept="image/*"/>
                                <label for="pxp-company-cover-choose-file" class="pxp-cover"><span>Upload Cover Image</span></label>
                            </div>
                            <div class="pxp-company-logo mb-3">
                                <input type="file" id="pxp-company-logo-choose-file" accept="image/*"/>
                                <label for="pxp-company-logo-choose-file" class="pxp-cover"><span>Upload<br/>Logo</span></label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="pxp-company-about" class="form-label">About the company</label>
                        <textarea class="form-control" id="pxp-company-about" placeholder="Type your info here..."></textarea>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="pxp-company-industry" class="form-label">Industry</label>
                                <input type="text" id="pxp-company-industry" class="form-control" placeholder="E.g. Software"/>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="pxp-company-founded" class="form-label">Founded in</label>
                                <input type="text" id="pxp-company-founded" class="form-control" placeholder="E.g. 2001"/>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label for="pxp-company-size" class="form-label">Company size</label>
                                <select id="pxp-company-size" class="form-select">
                                    <option value="">&lt; 50 employees</option>
                                    <option value="">50 - 100 employees</option>
                                    <option value="">100 - 150 employees</option>
                                    <option value="">150 - 200 employees</option>
                                    <option value="">200 - 250 employees</option>
                                    <option value="">250 - 300 employees</option>
                                    <option value="">&gt; 300 employees</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4 mt-lg-5">
                        <h2>Company Location</h2>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="pxp-company-country" class="form-label">Country/State</label>
                                    <input type="text" id="pxp-company-country" class="form-control" placeholder="E.g. United States, CA"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="pxp-company-city" class="form-label">City</label>
                                    <input type="text" id="pxp-company-city" class="form-control" placeholder="E.g. San Francisco"/>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="pxp-company-address" class="form-label">Address</label>
                            <input type="text" id="pxp-company-address" class="form-control" placeholder="Type full address here..."/>
                        </div>
                    </div>

                    <div class="mt-4 mt-lg-5">
                        <h2>Social Media</h2>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="pxp-company-facebook" class="form-label">Facebook</label>
                                    <input type="url" id="pxp-company-facebook" class="form-control" placeholder="https://"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="pxp-company-twitter" class="form-label">Twitter</label>
                                    <input type="url" id="pxp-company-twitter" class="form-control" placeholder="https://"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="pxp-company-instagram" class="form-label">Instagram</label>
                                    <input type="url" id="pxp-company-instagram" class="form-control" placeholder="https://"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="pxp-company-linkedin" class="form-label">Linkedin</label>
                                    <input type="url" id="pxp-company-linkedin" class="form-control" placeholder="https://"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4 mt-lg-5">
                        <button class="btn rounded-pill pxp-section-cta">Save Profile</button>
                    </div>
                </form>
        </div>
    );
};

export default ProfileEdit;