import "../helpers/css/projects.css";
import Footer from "../Footer.js";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Suspense } from 'react'
import { useEffect } from "react";
import { Canvas, useThree } from '@react-three/fiber'
import "../helpers/css/DoggoVisualizer.css"
import { Html, useProgress } from '@react-three/drei'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Model from './Model'

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

const headers = [
  { title: "Doggo", id: 3 },
  { title: "High-speed Autonomous Logistics", id: 4 },
];
const paras = [
  {
    title: "Doggo",
    content:
      " We participate every year in The University Rover Challenge(URC) which is an annual international competition hosted by the Mars Society for university and college teams to fabricate a prototype Mars Rover, which will then be subjected to a series of tasks and challenges.The competition pushes the teams to the extreme limits of engineering, management and proactively work towards the motto of the challenge 'Think, Design and Engineer'",
    id: 5,
  },
  {
    title: "HAL",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    id: 6,
  },
];

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

const Fibonacci = (props) => {
  return (
    <div className="fibonacci_parent">
    </div>
  )};


function PresentProjectPage() {
  // store swiper instances
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [thirdSwiper, setThirdSwiper] = useState(null);

  return (
    <>
      <div className="projectslide_parent">

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
            controller={{
              control: [firstSwiper, controlledSwiper, firstSwiper],
            }}
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

        <div className="projectslide_div_image">
        <Canvas className="model_visualizer_canvas">
          <ambientLight/>
          <pointLight position={[10, 10, 10]} intensity={2}/>
          <pointLight position={[10, -10, 10]} intensity={2}/>
          <pointLight position={[-10, 0, 10]} intensity={2}/>
          <pointLight position={[0, 0, -10]} intensity={2}/>
          <CameraController />
          <Suspense fallback={Loader}>
          <Model scale={[10,10,10]} position={[0,0,0]}/>
        </Suspense>
      </Canvas>
      </div>
      </div>

      <div>
        <div className="spacer"></div>
        <Footer />
      </div>
    </>
  );
}

export default PresentProjectPage;
