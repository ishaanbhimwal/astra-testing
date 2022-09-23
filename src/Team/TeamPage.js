import React from "react";
import Footer from "../Footer";
import "../helpers/css/Team.css";
import Member from "./Member";

import TeamPageHeader from "./TeamPageHeader";

const teampageText = {
  normalText: "Introducing the",
  emphasisText: "Team",
};

export default function TeamPage() {
  /*
      <footer className="cred">
        <a href="https://dribbble.com/shots/2134672-Card-animation">
          Inspiration from Alex Cican on Dribble
          <i className="fa fa-share"></i>
        </a>
      </footer> 
  */
  return (
    <>
      <TeamPageHeader {...teampageText} />
      <div className="team_alt_parent">
        <div className="team_alt_div1">
         <Member id={0}/>
        </div>
        <div className="team_alt_div2">
        <Member id={1}/>
        </div>
        <div className="team_alt_div3">
        <Member id={2}/>
        </div>
        <div className="team_alt_div4">
        <Member id={3}/>
        </div>
        <div className="team_alt_div5">
        <Member id={4}/>
        </div>
        <div className="team_alt_div6">
        <Member id={5}/>
        </div>
        <div className="team_alt_div7">
        <Member id={6}/>
        </div>
        <div className="team_alt_div8">
        <Member id={7}/>
        </div>
        <div className="team_alt_div9">
        <Member id={8}/>
        </div>
        <div className="team_alt_div10">
        <Member id={9}/>
        </div>
        <div className="team_alt_div11">
        <Member id={10}/>
        </div>
        <div className="team_alt_div12">
        <Member id={11}/>
        </div>
        <div className="team_alt_div13">
        <Member id={12}/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
