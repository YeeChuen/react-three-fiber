import React from 'react'

// torus geometry
const Torus = ({ position, color, args }) => {
    return (
      <mesh position={position}>
        {/* <-- add ref here */}
        <torusGeometry args={args} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  };

export default Torus