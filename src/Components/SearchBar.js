import { useState, useEffect } from "react";

// const CATEGORIES = ["Business Development", "Construction", "Customer Service", "Education", "Engineering", "Finance", "Healthcare", "Human Resources", "Information Technology", "Legal", "Manufacturing", "Marketing", "Operations", "Retail", "Sales", "Support", "Technical Support", "Other"];

const SearchBar = () => {
    const [search, setSearch] = useState("Senior Editor");
    const [location, setLocatizon] = useState("Seattle, WA");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        requestCats();
    }, []);

    async function requestCats() {
        const response = await fetch("/api/categories");
        const data = await response.json();
        console.log(data);
        setCategories(data);
    }

    return (
                  <div className="pxp-hero-form pxp-hero-form-round pxp-large pxp-has-border mt-3 mt-lg-4">
                  <form className="row gx-3 align-items-center">
                      <div className="col-12 col-lg">
                          <div className="input-group mb-3 mb-lg-s0">
                              <span className="input-group-text"><span className="fa fa-search"></span></span>
                              <input type="text" className="form-control" onChange={e => setSearch(e.target.value)} value={search} placeholder="Job Title or Keyword"/>
                          </div>
                      </div>
                      <div className="col-12 col-lg pxp-has-left-border">
                          <div className="input-group mb-3 mb-lg-0">
                              <span className="input-group-text"><span className="fa fa-globe"></span></span>
                              <input type="text" className="form-control" onChange={e => setLocatizon(e.target.value)} value={location} placeholder="Location"/>
                          </div>
                      </div>
                      <div className="col-12 col-lg pxp-has-left-border">
                          <div className="input-group mb-3 mb-lg-0">
                              <span className="input-group-text"><span className="fa fa-folder-o"></span></span>
                              <select className="form-select" onBlur={e => setCategory(e.target.value)} onChange={e => setCategory(e.target.value)} value={category}>
                                  <option value="" key="">All categories</option>
                                  {
                                        categories.map(category => {
                                            return <option key={category} value={category}>{category}</option>
                                        }
                                        )
                                    }
                              </select>
                          </div>
                      </div>
                      <div className="col-12 col-lg-auto">
                          <button>Find Jobs</button>
                      </div>
                  </form>
              </div>
    );
  };
  
  export default SearchBar;
  