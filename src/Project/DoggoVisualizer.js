import { Suspense } from 'react'
import React, { useEffect } from "react";
import { Canvas, useThree } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Html, useProgress } from '@react-three/drei'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Model from './Model'

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
  

export default function DoggoVisualizer() {
  return (
    <div className="App">
      <Canvas style={{ width: "100vw", height: "100vh" }}>
      <CameraController />
        <Suspense fallback={Loader}>
          <Model scale={[10,10,10]} position={[0,0,0]}/>
           <Environment preset="warehouse" background />
        </Suspense>
      </Canvas>
    </div>
  )
}