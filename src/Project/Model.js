import React, { useRef, useState} from "react";
import { useGLTF } from "@react-three/drei";
import doggo from "../helpers/models/doggo.gltf"
import { useFrame } from "@react-three/fiber";
import { Color, MeshBasicMaterial } from "three";

export default function Model(props) {
  const { nodes, materials } = useGLTF(doggo);
  const boxRef = useRef();

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => {
    boxRef.current.rotation.y += 0.001;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.doggo.geometry}
        ref={boxRef} rotation-x={Math.PI * 0.25}
      >
        <meshStandardMaterial color={'#2f3241'} />
      </mesh>
    </group>
  );
}

useGLTF.preload(doggo);