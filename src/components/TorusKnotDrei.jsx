import React from "react";
import {OrbitControls} from "@react-three/drei"

// trying out DREI
// use mouse to interact with shapes here using drei
const TorusKnotDrei = ({ position, color, args }) => {
  return (
    <mesh position={position}>
      {/* <-- add ref here */}
      <torusKnotGeometry args={args} />
      <meshStandardMaterial color={color} />
      <OrbitControls /> {/* <-- this should be wrap by Canvas */}
    </mesh>
  );
};

export default TorusKnotDrei;
