import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./helpers/css/Navbar.css";
import "./helpers/css/navbarMobile.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dropdown from "./Homepage/Dropdown";
import HomePage from "./Homepage/HomePage.js";
import AboutUsPage from "./AboutUs/AboutUsPage.js";
import TeamPage from "./Team/TeamPage.js";
import ContactUsPage from "./ContactUsPage.js";
import PastProjectPage from "./Project/PastProjectPage.js";
import PresentProjectPage from "./Project/PresentProjectPage.js";
import SponsorshipPage from "./Sponsorship/SponsorshipPage";
import FourOhFour from "./FourOhFour";
import AstraLogo from "./helpers/images/astra_logo_white.png";
//import DoggoVisualizer from "./Project/DoggoVisualizer";

function Navbar2() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const openDropdown_mobileMode = () => {
    /*on click open dropdown only in mobile mode*/
    if (window.innerWidth < 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  const onMobileNavbarClick = () => {
    document.getElementById("active").click()
  };

  return (
    <>
      <Router>
        <div className="mobile-navbar">
          {/*This part is hidden when in large screens*/}
          <input type="checkbox" id="active" />
          <label htmlFor="active" className="mobile_menu-btn">
            <span></span>
          </label>
          <label htmlFor="active" className="mobile_close"></label>
          <div className="mobile_wrapper">
            <ul>
              <li>
                <Link to="" className="nav-links" onClick={onMobileNavbarClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/presentprojects" className="nav-links" onClick={onMobileNavbarClick}>
                  Present Projects
                </Link>
              </li>
              <li>
                <Link to="/pastprojects" className="nav-links" onClick={onMobileNavbarClick}>
                  Past Projects
                </Link>
              </li>
              <li>
                <Link to="/team" className="nav-links" onClick={onMobileNavbarClick}>
                  Team
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="nav-links" onClick={onMobileNavbarClick}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sponsorship" className="nav-links" onClick={onMobileNavbarClick}>
                  Sponsorships
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="nav-links" onClick={onMobileNavbarClick}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <nav className="navbar">
            {/*This part is hidden when in mobile screens*/}
            <img src={AstraLogo} alt="" width={55} height={50} />
            <Link to="" className="navbar-name" onClick={closeMobileMenu}>
              Astra
              <i className="fa fa-firstdraft" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="" className="nav-links">
                  Home
                </Link>
              </li>
              <li
                className="nav-item hide-on-mobile"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <p className="nav-links" onClick={openDropdown_mobileMode}>
                  Projects <i className="fa fa-caret-down" />
                  <li>{dropdown && <Dropdown />}</li>
                </p>
              </li>
              <li className="nav-item show-on-mobile">
                <Link to="/presentprojects" className="nav-links">
                  Present Projects
                </Link>
              </li>
              <li className="nav-item show-on-mobile">
                <Link to="/pastprojects" className="nav-links">
                  Past Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/team" className="nav-links">
                  Team
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about-us" className="nav-links">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sponsorship" className="nav-links">
                  Sponsorships
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-links">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="" element={<HomePage />} />
          <Route exact path="/sponsorship" element={<SponsorshipPage />} />
          <Route exact path="/presentprojects/*" element={<PresentProjectPage />}/>
          <Route exact path="/pastprojects" element={<PastProjectPage />} />
          {/* <Route exact path="/DoggoVisualizer" element={<DoggoVisualizer />} /> */}
          <Route exact path="/team" element={<TeamPage />} />
          <Route exact path="/contact-us" element={<ContactUsPage />} />
          <Route exact path="/about-us" element={<AboutUsPage />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default Navbar2;
