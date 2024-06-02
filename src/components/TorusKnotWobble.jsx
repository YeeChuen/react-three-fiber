import React from "react";
import {MeshWobbleMaterial} from "@react-three/drei"

// trying out DREI
// use mouse to interact with shapes here using drei
const TorusKnotWobble = ({ position, color, args }) => {
  return (
    <mesh position={position}>
      {/* <-- add ref here */}
      <torusKnotGeometry args={args} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial factor={10} speed={10}/>
    </mesh>
  );
};

export default TorusKnotWobble;
