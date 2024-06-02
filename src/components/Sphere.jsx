import React from 'react'

// sphere geometry
const Sphere = ({ position, color, args }) => {
    return (
      <mesh position={position}>
        {/* <-- add ref here */}
        <sphereGeometry args={args} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  };

export default Sphere