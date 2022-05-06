const CompanyInformationForm = ({ user, handleUserChange }) => {
        // // Company
    // @Column({ nullable: true })
    // companyname: string;

    // @Column({nullable:true})
    // industry:string;
        
    // @Column({ nullable: true })
    // fax: string;

    // @Column({ nullable: true })
    // fix: string;

    // @Column({ nullable: true })
    // CompanyStructer: string;

    // @Column({ nullable: true })
    // founded: string;

    // @Column({ nullable: true })
    // size: number;

    // @Column({ nullable: true })
    // photo:string;

    // @Column({ nullable: true })
    // cover:string;

    
    // @Column({ nullable: true })
    // googleId:string;

    // @Column({ nullable: true })
    // file:string;

    // @Column({ nullable: true })
    // password: string;

    // @Column({ nullable: true })
    // salt: string;

    // @Column({ nullable: true })
    // email: string;

    // @Column({ nullable: true })
    // time_zone: string;

    // @Column({ nullable: true })
    // country: string;

    // @Column({ nullable: true })
    // countryCode: string;
    
    // @Column({ nullable: true })
    // city: string;

    // @Column({ nullable: true })
    // adress: string;

    // @Column({ nullable: true })
    // zipcode: string;

    // @Column({ nullable: true })
    // description: string;

    // @Column({ nullable: true })
    // website:string;

    // @Column({ nullable: true })
    // valid: boolean;

    // @Column({ nullable: true })
    // verified: boolean;

    // @Column({ nullable: true })
    // isCompany: boolean;

    // @Column({ nullable: true })
    // LastLogin: Date;
    
    // @Column({ nullable: true })
    // status:string;
    return (
        <div>
                        <div className="row mt-4 mt-lg-5">
                            <div className="mb-3">
                                <label htmlFor="companyname" className="form-label">Company Name</label> 
                                <input type="text" id="companyname" name="companyname" onChange={(e) => handleUserChange(e)} value={user.companyname} className="form-control" placeholder="Company Name" />
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" id="email" name="email" onChange={(e) => handleUserChange(e)} value={user.email} className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label htmlFor="fix" className="form-label">Fix</label>
                                        <input type="tel" id="fix" name="fix" onChange={(e) => handleUserChange(e)} value={user.fix} className="form-control" placeholder="(+12) 345 6789"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="website" className="form-label">Website</label>
                                <input type="url" id=" website" name="website" onChange={(e) => handleUserChange(e)} value={user.website} className="form-control" placeholder="http://www.example.com"/>
                            </div>
                        </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">About the company</label>
                        <textarea 
                            id="description"
                            name="description"
                            onChange={(e) => handleUserChange(e)}
                            value={user.description}
                            className="form-control" placeholder="Type your info here..."></textarea>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label htmlFor="industry" className="form-label">Industry</label>
                                <input type="text" id="industry" name="industry" onChange={(e) => handleUserChange(e)} value={user.industry} className="form-control" placeholder="E.g. Software"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label htmlFor="founded" className="form-label">Founded in</label>
                                <input type="text" id="founded" name="founded" onChange={(e) => handleUserChange(e)} value={user.founded} className="form-control" placeholder="E.g. 2017"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <label htmlFor="size" className="form-label">Company size</label>
                                <select id="size" name="size" onChange={(e) => handleUserChange(e)} value={user.size} onBlur={(e) => handleUserChange(e)} className="form-control">
                                    <option value="< 50">&lt; 50 employees</option>
                                    <option value="50 - 100">50 - 100 employees</option>
                                    <option value="100 - 150">100 - 150 employees</option>
                                    <option value="150 - 200">150 - 200 employees</option>
                                    <option value="200 - 250">200 - 250 employees</option>
                                    <option value="250 - 300">250 - 300 employees</option>
                                    <option value="> 300">&gt; 300 employees</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 mt-lg-5">
                        <h2>Company Location</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <input type="text" id="country" name="country" onChange={(e) => handleUserChange(e)} value={user.country} className="form-control" placeholder="E.g. USA"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" id="city" name="city" onChange={(e) => handleUserChange(e)} value={user.city} className="form-control" placeholder="E.g. New York"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" id="address" name="address" onChange={(e) => handleUserChange(e)} value={user.address} className="form-control" placeholder="E.g. 123 Main St"/>
                        </div>
                    </div>

                    <div className="mt-4 mt-lg-5">
                        <h2>Social Media</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="pxp-company-facebook" className="form-label">Facebook</label>
                                    <input type="url" id="pxp-company-facebook" className="form-control" placeholder="https://"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="pxp-company-twitter" className="form-label">Twitter</label>
                                    <input type="url" id="pxp-company-twitter" className="form-control" placeholder="https://"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="pxp-company-instagram" className="form-label">Instagram</label>
                                    <input type="url" id="pxp-company-instagram" className="form-control" placeholder="https://"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="pxp-company-linkedin" className="form-label">Linkedin</label>
                                    <input type="url" id="pxp-company-linkedin" className="form-control" placeholder="https://"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
    )
}

export default CompanyInformationForm;