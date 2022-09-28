import React from "react";
import video from "../helpers/images/video.webm";
import "../helpers/css/videoheader.css";
import scroll from  "../helpers/images/scroll.png"
import {useEffect} from 'react';
import $ from 'jquery';

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);


function Videoheader() {
  useEffect(() => {
    async function makeRequest() {
      await delay(10000);
      let scroll = document.getElementsByClassName("scroll_image")[0]
      $(scroll).fadeIn(2000)
    }

    makeRequest();
  });
  return (
    <div className="videohead">
      <video autoPlay muted class="video-parent">
        <source src={video} type="video/webm" />
      </video>
      <div className="scroll_image">
        <img src={scroll}></img>
      </div>
    </div>
  );
}

export default Videoheader;
