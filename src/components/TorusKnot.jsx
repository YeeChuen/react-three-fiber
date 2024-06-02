import React from 'react'

// torusknot geometry
const TorusKnot = ({ position, color, args }) => {
    return (
      <mesh position={position}>
        {/* <-- add ref here */}
        <torusKnotGeometry args={args} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  };

export default TorusKnot