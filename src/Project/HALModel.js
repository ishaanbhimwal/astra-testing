import React, { useRef, useState} from "react";
import { useGLTF } from "@react-three/drei";
import HAL from "../helpers/models/hal.gltf"
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF(HAL);
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
        geometry={nodes.Suzanne.geometry}
        ref={boxRef} rotation-x={Math.PI * 0.25}
        scale={0.2}
      >
        <meshStandardMaterial color={'#2f3241'} />
    </mesh>
    </group>
  );
}

useGLTF.preload(HAL);
