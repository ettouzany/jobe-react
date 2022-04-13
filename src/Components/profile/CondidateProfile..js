import { Component } from "react";
import ProfileInfo from "./ProfileInfo";
import userService from "../../services/user.service";
import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";
  
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
        const { id } = this.props.match.params;
        // const { userId } = this.props.id;
        userService.getUserFullDataById(id).then(data => {          
            console.log(data.data);  
            this.setState({ user:data.data, loading: false });
        }).catch(error => {
            this.setState({ error: true, errorMessage: error.message });
        });
    }


    render() {
        return (
           this.state.loading ? <div>Loading...</div> :
           <ProfileInfo user={this.state.user}/>
        );
    }

}

export default withRouter(CandidateProfile);
