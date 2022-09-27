import React from "react";
import { Link } from "react-router-dom";
import video from "../helpers/images/video.webm";
import "../helpers/css/videoheader.css";
function Videoheader() {
  return (
    <div className="videohead">
      <video autoPlay  muted class="video-parent">
        <source src={video} type="video/webm" />
      </video>
      <div className="video_text">
      </div>
    </div>
  );
}

export default Videoheader;
