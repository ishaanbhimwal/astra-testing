import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import doggo from "../helpers/models/doggo.gltf";
import { useFrame } from "@react-three/fiber";

export default function DoggoModel(props) {
  const { nodes, materials } = useGLTF(doggo);
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.001;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.doggo.geometry}
        ref={boxRef}
        rotation-x={Math.PI * 0.1}
      >
        <meshStandardMaterial color={"#2f3241"} />
      </mesh>
    </group>
  );
}

useGLTF.preload(doggo);
