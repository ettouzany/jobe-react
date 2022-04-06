import React, { Component } from "react";
import SearchBar from "./Components/SearchBar";
import Card from "./Components/Card";
import Filtter from "./Components/Search/Filtter";
import JobDetails from "./Components/Search/JobDetails";
import jobService from "./services/job.service";
class Search extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleJobSearch = this.handleJobSearch.bind(this);

    this.state = {
      loading: true,
      jobId: 1,
      start: 0,
      users: [],
      error: null,
    };
  }

  //get jobs from the server
  handleJobSearch = async (e) => {
    e.start= this.state.start;
    console.log(e);
      try {
        await jobService.getJobs(e).then(
            (response) => {
                console.log(response);
            },
            (error) => {
              console.log(error);
            }
        );
    }
    catch (error) {
        console.log(error);
    }
  }


  getFetchUsers() {
    this.setState(
      {
        loading: true,
      },
      () => {
        fetch("http://localhost:3000/jobs")
          .then((res) => res.json())
          .then((result) =>
            this.setState({
              loading: false,
              users: result,
            })
          )
          .catch(console.log);
      }
    );
  }
  componentDidMount() {
    this.getFetchUsers();
  }

  handleClick(id) {
    // Changing state
    this.setState({ jobId: id });
  }
  render() {
    const { users, jobId, error } = this.state;

    // const [jobId, setJobId] = useState("1");
    // const [jobs, setJobs] = useState([]);
    // useEffect(() => {
    //     requestJobs();
    // }, []);

    // async function requestJobs() {

    //     const response = await fetch;
    //     const data = await response.json();
    //     console.log(data);
    //     setJobs(data);
    // }

    return (
      <div>
        <React.Fragment></React.Fragment>

        <section className="pxp-page-header-simple">
          <div className="pxp-container">
            <h1>Search Jobs</h1>
            <div className="pxp-hero-subtitle pxp-text-light">
              Search your career opportunity through <strong>12,800</strong>{" "}
              jobs
            </div>
            <SearchBar searchCallback={this.handleJobSearch}/>
          </div>
        </section>
        <section>
          <div className="pxp-container">
            <div className="row">
              <div className="col-lg-5 col-xl-4 col-xxl-6">
                <div className="row">
                  <div className="col-xxl-5">
                    <Filtter />
                  </div>
                  <div className="col-xxl-7">
                    <div
                      className="pxp-jobs-list-single-column nav mt-4 mt-xxl-0"
                      role="tablist"
                    >
                      {error ? <p>{error.message}</p> : null}
                      {users.map((user) => {
                        const {
                          id,
                          title,
                          image,
                          date,
                          type,
                          company,
                          location,
                        } = user;
                        return (
                          <Card
                            customClickEvent={this.handleClick}
                            key={id}
                            id={id}
                            title={title}
                            image={image}
                            date={date}
                            type={type}
                            company={company}
                            location={location}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-xl-8 col-xxl-6">
                <div className="tab-content pxp-jobs-tab-content pxp-show">
                  <JobDetails id={jobId} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Search;
