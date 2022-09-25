import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import doggo from "../helpers/models/doggo.gltf"

export default function Model(props) {
  const { nodes, materials } = useGLTF(doggo);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.doggo.geometry}
        material={nodes.doggo.material}
      />
    </group>
  );
}

useGLTF.preload(doggo);