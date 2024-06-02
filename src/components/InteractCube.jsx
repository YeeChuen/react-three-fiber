import React, {useRef, useState} from 'react'
import { useFrame } from "@react-three/fiber";

// This cube will interact when cursor is hovered to it.
function InteractCube({position, args, color}) {
    const ref = useRef();

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    useFrame((state, delta) => {
        const speed = (isHovered) ? 1 : 3;
        ref.current.rotation.y += delta * speed;
    })

  return (
    /* to add interactive geometry, we can use the following props:
            -> onPointerEnter={listener}
              when mouse enter
                ** we need to use stopPropagation to ensure thet
                  the event is contain to the mesh only.
            -> onPointerLeave={listener}
              when mouse leaves
      */
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
      onClick={() => {
        setIsClicked(!isClicked)
      }}
      scale={isClicked ? 2 : 1}
    >
      {/* <-- add ref here */}
      <boxGeometry args={args} />
      <meshStandardMaterial color={(isHovered) ? "white" : color} />
    </mesh>
  )
}

export default InteractCube