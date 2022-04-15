import React, { Component } from "react";
import SearchBar from "./Components/SearchBar";
import Card from "./Components/Card";
import Filtter from "./Components/Search/Filtter";
import JobDetails from "./Components/Post/JobDetails";
import jobService from "./services/job.service";
import Spinner from 'react-bootstrap/Spinner'
class Search extends Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleJobSearch = this.handleJobSearch.bind(this);

    this.state = {
      loading: true,
      jobId: 1,
      limit: 10,
      page: 1,
      jobs: [],
      error: null,
    };
  }

  //get jobs from the server
  async handleJobSearch(e)  { 
    this.setState({
      loading: true,
    });
    e.limit= this.state.limit;
    console.log(e);
      try {
        await jobService.getJobs(e).then(
            (response) => {
                console.log("os",response);
                this.setState({
                  loading: false,
                  jobs: response.data,
                  jobId:response.data.length? response.data[0].id:-1,
                })
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



  componentDidMount() {
    this.handleJobSearch({start: this.state.start,Search: null,Location: null,categorie: null,filters: null});
  }

  handleClick(id) {
    // Changing state
    this.setState({ jobId: id });
  }
  render() {

    const { jobs, jobId, error } = this.state;

    console.log(jobs);
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
            {
            this.state.loading ?
            <div className="d-flex justify-content-center">
              <Spinner animation="grow" />
            </div>
            :
            jobs.length>0 ?
            
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
                      { jobs.map((job) => {
                        const {
                          id,
                          jobTitle, jobLocation, 
                          //jobDescription,userId
                        } = job;
                        return (
                          <Card
                            customClickEvent={this.handleClick}
                            key={id}
                            id={id}
                            title={jobTitle}
                            image={"image"}
                            date={"date"}
                            type={"type"}
                            company={"company"}
                            location={jobLocation}
                            active={id == jobs[0].id}
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
            :
            <div className="pxp-jobs-list-single-column nav mt-4 mt-xxl-0" role="tablist">
              <p>No jobs found</p>
            </div>
            }
            
          </div>
        </section>
      </div>
    );
  }
}
export default Search;
