import React from "react";
import "./helpers/css/fourOhfour.css";
import { Link } from 'react-router-dom';
import error from "./helpers/images/Error.png";

function FourOhFour() {
  return (
    <div className="four-oh-four">
      <div className="bg">
        <img className="error" src={error} alt="error" />
      </div>
      <div className="textlink-404">
        <Link to='/' className="btn-primary">    
          Home
        </Link>
        <Link to='/about-us' className="btn-primary">
          About Us
        </Link>
        <Link to='/presentprojects' className="btn-primary">
          Project
        </Link>
        <Link to='/sponsorship' className="btn-primary">
          Sponsorship
        </Link>
        <Link to='/team' className="btn-primary">
          Team
        </Link>
        <Link to='/contact-us' className="btn-primary">
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default FourOhFour;
