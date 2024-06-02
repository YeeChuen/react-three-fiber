import React, {useRef} from 'react'
import { useFrame } from "@react-three/fiber";

// cube geometry
const Cube = ({ position, color, args }) => {
    const ref = useRef();
  
    /* Add animation here, useFrame, inside this function */
    useFrame((state, delta) => {
      ref.current.rotation.x += delta * 2.0;
      ref.current.rotation.z += delta * 2.0;
      ref.current.rotation.y += delta;
      // ref.current.position.z -= delta; // <-- this make the box to move closer to the camera
      // to have the box move closer then further, we can do this instead
      ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
      ref.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 2;
    });
  
    return (
      <mesh position={position} ref={ref}>
        {/* <-- add ref here */}
        <boxGeometry args={args} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  };

export default Cube