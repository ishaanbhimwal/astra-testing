import React from "react";
import video from "../helpers/images/video.webm";
import "../helpers/css/videoheader.css";
function Videoheader() {
  return (
    <div className="videohead">
      <video autoPlay muted class="video-parent">
        <source src={video} type="video/webm" />
      </video>
    </div>
  );
}

export default Videoheader;
