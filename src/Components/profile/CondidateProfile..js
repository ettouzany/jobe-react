import { Component } from "react";
import userService from "../../services/user.service";
import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";
import CompanyContact from "./Components/CompanyContact";
import HeaderProfile from "./Components/HeaderProfile";
import UserInfo from "./Components/UserInfo";
import CompanyInfo from "./Components/CompanyInfo";
import ContactForm from "./Components/ContactForm";
import UserContact from "./Components/UserContact";
  
  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }
// function GetId()
// {
//     const id = useParams();
//     return id;
// }

export class CandidateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      user: {},
      loading: true,
      error: false,
      errorMessage: '',
    };
    }

    componentDidMount() {
        this.getUser();
    }
    
    getUser() {
        userService.getUserFullDataById(this.props.router.params.id).then(data => {          
            this.setState({ user:data.data, loading: false });
        }).catch(error => {
            this.setState({ error: true, errorMessage: error.message });
        });
    }


    render() {
        return (
           this.state.loading ? <div>Loading...</div> :
          (
            <div>
              <section>
                        <div className="pxp-container">
                            <div className="pxp-single-candidate-container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-9">
                                    <HeaderProfile  user={this.state.user}/>
                                    <div className="row mt-4 mt-lg-5">
                                            <div className="col-lg-7 col-xxl-8">
                                              <UserInfo user={this.state.user}/>

                                              <CompanyInfo company={this.state.user}/>
                                            </div>
                                            <div className="col-lg-5 col-xxl-4">
                                              <CompanyContact company={this.state.user}/>
                                              <UserContact user={this.state.user}/>
                                              <ContactForm user={this.state.user}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
          )
        );
    }

}

export default withRouter(CandidateProfile);
