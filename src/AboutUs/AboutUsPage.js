import React from "react";
import Statistics from "./Stats_Prajwal";
//import VisionMission from "./VisionMision";
import TeamPageHeader from "../Team/TeamPageHeader";
import Grids from "./Acheivements_Nisarga";
import Footer from "../Footer";

import "../helpers/css/aboutUs.css";

const aboutpageText = {
  normalText: "About",
  emphasisText: "us",
};

function AboutPage() {
  return (
    <div>
      <TeamPageHeader {...aboutpageText} />
      <div className="about-astra">
        <h1>About Astra</h1>
        <p>
          Astra Robotics is one of its kind interdisciplinary student technical
          team of RV College of Engineering, Bengaluru. We work towards
          providing innovative solutions to the day to day problems of society
          through our continuous and dedicated work in the field of robotics and
          automation.We firmly believe that automation and innovation are the
          keys to a better and efficient future. </p>
          <p>We, being a student club, take
          immense pride in the fact that we belong to the prestigious IEEE
          chapter of RVCE. This gives us access to the elite resources of IEEE
          which includes publications, conferences, competitions, professional
          and educational activities among many others. Our goal is to transform
          members of our chapter into leaders in the industry. We participate in
          recognized competitions and tech-fests hosted by top technical
          institutes as well as by industry stalwarts. Our members have done us
          proud at all these events and brought laurels to our college, thereby
          elevating our technical standards and knowhow. At Astra Robotics , we
          do realize the importance of sharing the knowledge and experience we
          gain with the student community by means of numerous workshops
          conducted all around the city on various topics that are of current
          and future relevance in field of robotics and automation.
        </p>
      </div>
      <div className="about-astra">
        <h1>Our Vision</h1>
        <p>
          We believe robots can make the world a better place to live in.
          Knowledge has no value unless you share it. We conduct various
          workshops to help people understand the importance of Robotics and
          Automation. We aim to compete in multiple competitions and provide the
          best solutions to real world problems.
        </p>
      </div>
      <div className="contains-stats">
        <Statistics />
      </div>
      <div>
        <Grids />
      </div>
      <Footer/>
    </div>
  );
}

export default AboutPage;
