import { useState, useEffect } from "react";
import categorieService from "../services/categories.service";
import useGeo from "../hooks/useGeo";
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import { Spinner } from "react-bootstrap";
// const CATEGORIES = ["Business Development", "Construction", "Customer Service", "Education", "Engineering", "Finance", "Healthcare", "Human Resources", "Information Technology", "Legal", "Manufacturing", "Marketing", "Operations", "Retail", "Sales", "Support", "Technical Support", "Other"];
const SearchBar = (props) => {
  const [search, setSearch] = useState("");
  const [location, setLocatizon] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [countryCode, setCountryCode] = useState("");
  const [_show, set_Show] = useState(false);
  const [close, setClose] = useState(false);
  const { _city, _country, _countryCode } = useGeo();

  const handleShow = () => set_Show(true);
  const handleClose = () => set_Show(false);



  useEffect(() => {
    categorieService.getCategories().then(res => {
      setCategories(res.data);
    });
    setCity(_city);
    setCountry(_country);
    setCountryCode(_countryCode);
    console.log(_city);
  }, [_city]);


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(search, location, category);
    props.searchCallback({ search, location, category });
  };

  const get_flag = (countryCode) => {
    return `https://flagicons.lipis.dev/flags/4x3/${countryCode.toLowerCase()}.svg`;
  };

  // async function requestCats() {
  //   await fetch(`http://localhost:3000/categories`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setCategories(result);
  //     })
  //     .catch(console.log);
  // }
  const [cities, setCities] = useState([]);
  const [show, setShow] = useState(false);
  const [_cities, set_Cities] = useState([]);
  const [loading, setLoading] = useState(false);
  const onChangeCity = async (value) => {
    setCity(value);
    if (_cities.length === 0 && loading == false) {
      setLoading(true);
      await axios.post(`https://countriesnow.space/api/v0.1/countries/cities`, {
        country: country,
      }).then((res) => {
        setLoading(false);
        set_Cities(res.data.data);
        //find elements in array that start with value
        const filtered = _cities.filter((item) => {
          return item.toLowerCase().startsWith(value.toLowerCase());
        }
        );
        setCities(filtered);
        setShow(true);
      });
    }
    const filtered = _cities.filter((item) => {
      return item.toLowerCase().startsWith(value.toLowerCase());
    }
    );
    setCities(filtered);
    if (value.length === 0) setCities([]);
    if (cities.find(city => city.toLowerCase() === value.toLowerCase())) {
      setCities([]);
      setShow(false);
    }
    setShow(true);
  };


  const [loading_country, setLoading_country] = useState(false);
  const [_countries, set_Countries] = useState([]);
  const [countries, setCountries] = useState([]);
  const onChangeCountry = async (value) => {
    setCountry(value);
    if (_countries.length === 0 && loading_country == false) {
      setLoading_country(true);
      // name, iso2, iso3, flag
      await axios.get(`https://countriesnow.space/api/v0.1/countries/flag/images`).then((res) => {
        setLoading_country(false);
        set_Countries(res.data.data);
        //find elements in array that start with value
        const filtered = _countries.filter((item) => {
          return item.name.toLowerCase().startsWith(value.toLowerCase());
        }
        );
        setCountries(filtered);
        setShow(true);
      });
    }
    const filtered = _countries.filter((item) => {
      return item.name.toLowerCase().startsWith(value.toLowerCase());
    }
    );
    setCountries(filtered);
    if (value.length === 0) setCountries([]);
    if (countries.find(country => country.name.toLowerCase() === value.toLowerCase())) {
      setCountries([]);
      setShow(false);
    }
    setShow(true);
  }

  const changeContry = (country) => {
    setCountry(country.name);
    setCountryCode(country.iso2);
    handleClose();
    set_Cities([]);
    setCities([]);
    setShow(false);
    // https://countriesnow.space/api/v0.1/countries/capital

     axios.post(`https://countriesnow.space/api/v0.1/countries/capital`, {
        country: country.name,
        }).then((res) => {
            setCity(res.data.data.capital);
            }
        );
        // onChangeCity();
    }




  return (
    <div className="pxp-hero-form pxp-hero-form-round pxp-large pxp-has-border mt-3 mt-lg-4">
      <form onSubmit={handleSearchSubmit} className="row gx-3 align-items-center" >
        <div className="col-12 col-lg">
          <div className="input-group mb-lg-s0">
            <span className="input-group-text">
              <span className="fa fa-search"></span>
            </span>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Job Title or Keyword"
            />
          </div>
        </div>
        <div className="col-12 col-lg pxp-has-left-border">
          <div className="input-group mb-3 mb-lg-0">
            <span className="input-group-text">
              {/* flag */}
              <button type="button"
                onClick={handleShow}
                className="btn btn-secondary btn-circle btn-sm d-block p-0"
                style={{ backgroundImage: `url(${get_flag(countryCode)})`, width: '32px', height: '32px', backgroundPosition: 'center' }}>
                <span className="sr-only">{country}</span>
              </button>

            </span>
            <input
              type="text"
              className="form-control"
              onChange={(e) => onChangeCity(e.target.value)}
              value={city}
              placeholder="Location"
            />
            <span className="auto-complete">
              {show &&
                <ul className="list-group">
                  {
                    cities.map((city) => {
                      return (
                        <li key="city" className="list-group-item" key={city} onClick={() => onChangeCity(city)}>
                          <span className="pxp-autocomplete-city">{city}</span>
                        </li>
                      )
                    })
                  }
                </ul>
              }
            </span>

          </div>
        </div>
        <div className="col-12 col-lg pxp-has-left-border">
          <div className="input-group mb-3 mb-lg-0">
            <span className="input-group-text">
              <span className="fa fa-folder-o"></span>
            </span>
            <select
              className="form-select"
              onBlur={(e) => setCategory(e.target.value)}
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="" key="">
                All categories
              </option>
              {categories ? categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                );
              }) : null}
            </select>
          </div>
        </div>
        <div className="col-12 col-lg-auto">
          <button type="submit">Find Jobs</button>
        </div>
      </form>
      <Modal show={_show} onHide={handleClose} className="modal fade pxp-user-modal" id="pxp-signin-modal">
        <Modal.Header closeButton>
          <Modal.Title>
            <span style={{lineHeight: "3"}}>
            Change Country
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className="form-control" placeholder="Search" onChange={(e) => onChangeCountry(e.target.value)} value={country} />
          <ul className="row p-0">
            {
              countries.map(({ name, iso2, iso3, flag }) => {
                return (
                  <div className="col-4 "  key={iso2}>
                    <button className="btn btn-secondary d-flex my-2 p-2" 
                    onClick={() => {changeContry({name, iso2, iso3, flag})}}
                    style={{lineHeight:"2", borderRadius:"100px"}} >
                        <span className="d-block " 
                        
                        style={{borderRadius:"50%", backgroundImage: `url(${flag})`, width: '32px', height: '32px', backgroundPosition: 'center', backgroundSize :"contain" }}>
                        </span>
                        <span style={{margin:"0 8px"}}>{name}</span>
                    </button>

                  </div>
                )
              })
            }
          </ul>

        </Modal.Body>

      </Modal>
    </div>
  );
};

export default SearchBar;
