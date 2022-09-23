import "../helpers/css/projects.css";
import Footer from "../Footer.js";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import {
  Keyboard,
  Pagination,
  Controller,
  Autoplay,
  Navigation,
  Mousewheel,
} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
//import "swiper/css/navigation";
//import "swiper/css/effect-fade";

import doggo from "../helpers/images/doggo.PNG";
import HAL from "../helpers/images/HAL.PNG";
const pics = [
  { img: doggo, id: 1 },
  { img: HAL, id: 2 },
  { img: doggo, id: 3 },
];
const headers = [
  { title: "Doggo", id: 4 },
  { title: "High-speed Autonomous Logistics", id: 5 },
  { title: "Doggo", id: 6 },
];
const paras = [
  {
    title: "Doggo",
    content:
      " We participate every year in The University Rover Challange(URC) which is an annual international competetion hosted by the Mars Society for university and college teams to fabricate a prototype Mars Rover, which will then be subjected to a series of tasks and challenges.The competition pushes the teams to the extreme limits of engineering, management and proactively work towards the motto of the challenge 'Think, Design and Engineer'",
    id: 7,
  },
  {
    title: "HAL",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: 8,
  },
  {
    title: "HAL",
    content:
      " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
    id: 9,
  },
];

const Fibonacci = (props) => {
  return (
    <div
      className="fibonacci_parent"
      style={{
        backgroundImage: `url(${props.bg_url})`,
      }}
    >
      <div className="fibonacci_div1"> </div>
      <div className="fibonacci_div2"> </div>
      <div className="fibonacci_div3"> </div>
      <div className="fibonacci_div4"> </div>
      <div className="fibonacci_div5"> </div>
      <div className="fibonacci_div6"> </div>
      <div className="fibonacci_div7"> </div>
    </div>
  );
};

function PresentProjectPage() {
  // store swiper instances
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [thirdSwiper, setThirdSwiper] = useState(null);

  return (
    <>
      <div className="projectslide_parent">
        <div className="projectslide_div_image">
          <Swiper
            slidesPerView={1}
            spaceBetween={100}
            keyboard={{
              enabled: false,
            }}
            direction={"vertical"}
            modules={[Controller,]}
            onSwiper={setFirstSwiper}
            controller={{control: [thirdSwiper, controlledSwiper, thirdSwiper]}}
            className="projectslide_fibonacci_holder"
          >
            {pics.map((pic) => (
              <SwiperSlide key={pic.id}>
                <Fibonacci bg_url={pic.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="projectslide_div_title">
          <Swiper
            slidesPerView={1}
            spaceBetween={500}
            direction={"vertical"}
            modules={[Controller, Pagination]}
            onSwiper={setControlledSwiper}
            className="projectslide_div_description"
          >
            {headers.map((para) => (
              <SwiperSlide key={para.id}>{para.title}</SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="projectslide_div_description">
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            keyboard={{
              enabled: true,
            }}
            direction={"vertical"}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            
            autoplay={true}
            modules={[Controller, Keyboard, Pagination, Autoplay]}
            onSwiper={setThirdSwiper}
            controller={{control: [firstSwiper, controlledSwiper, firstSwiper] }}
            className="projectslide_description"
          >
            {paras.map((para) => (
              <SwiperSlide key={para.id}>
                <div>
                <h1>{para.title}</h1>
                <p>{para.content}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
          <div className="spacer"></div>
          <Footer />
      </div>
    </>
  );
};


export default PresentProjectPage;
