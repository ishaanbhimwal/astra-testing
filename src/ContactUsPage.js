import React from "react";
import logo from "./helpers/images/astra_logo.webp";
// import insta from "./helpers/images/insta_logo.png";
import yt from "./helpers/images/yt.svg";
import ig from "./helpers/images/ig.svg";
import li from "./helpers/images/li.svg";
import "./helpers/css/ContactUs.css";

/* This page needs to be formatted for mobile screen */

function ContactUsPage() {
  return (
    <div className="contactus_parent contactus_parent_grid">
      <div className="contactus_div1">
        <div className="contact_logo">
          <img src={logo} alt="astra logo" />
        </div>
      </div>
      <div className="contactus_div2">
        <div className="contactus_info">
          <h2>Address</h2>
          <p>Mysore Road, RV Vidyanikethan Post,</p>
          <p>Bengaluru-560059, Karnataka,</p>
          <p>India</p>
          <h2>Phone Number</h2>
          <p>Shashank: +91 76758 73584</p>
          <p>Kiran: +91 96208 48507</p>
        </div>
      </div>
      <div className="contactus_div3">
        <div className="contactus_info">
          <h2>Email</h2>
          <p>
            <a href="mailto:teamastra@rvce.edu.in?">teamastra@rvce.edu.in</a>
          </p>
        </div>
      </div>
      <div className="contactus_div4">
        <div className="contactus_info">
          <h2>Follow us on social media</h2>
          <div className="social-menu">
            <ul>
              <li>
                <a href="https://www.instagram.com/astra_robotics/">
                  <img src={ig} alt="Instagram handle" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/astra-robotics/">
                  <img src={li} alt="LinkedIn handle" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCKbeaYMw6fCF2u4iXOdOfJg">
                  <img src={yt} alt="Youtube handle" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
