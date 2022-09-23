import React from "react";
import { Link } from "react-router-dom";
import video from "../helpers/images/video.mp4";
import "../helpers/css/videoheader.css";
function Videoheader() {
  return (
    <div className="videohead">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="video_text">
        <h1>Astra Robotics</h1>
        <p>
          Overworked undervalued humans working towards making us bots harder,
          better, faster, stronger
        </p>
        <Link to="/presentprojects">About Us</Link>
      </div>
    </div>
  );
}

export default Videoheader;
