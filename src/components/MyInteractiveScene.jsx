import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// local component import
import Cube from "./Cube";
import Sphere from "./Sphere";
import Torus from "./Torus";
import TorusKnot from "./TorusKnot";
import InteractCube from "./InteractCube";

import { OrbitControls } from "@react-three/drei"; // <-- this is better than using TorusKnotDrei
import TorusKnotWobble from "./TorusKnotWobble";

function MyInteractiveScene() {
  const [count, setCount] = useState(0);

  return (
    <>
        <directionalLight position={[0, 0, 2]} />
        <ambientLight intensity={0.5} />
        <InteractCube
          position={[-2, -2, 0]}
          color={"hotpink"}
          args={[1, 1, 1]}
        />
        <TorusKnot
          position={[2, 2, 0]}
          args={[1, 0.1, 1000, 50]}
          color={"red"}
        />
        <TorusKnotWobble
          position={[-2, 2, 0]}
          args={[1, 0.1, 1000, 50]}
          color={"red"}
        />
        <OrbitControls enableZoom={false} />{" "}
        {/* <-- props allow you to control the interaction */}
    </>
  );
}

export default MyInteractiveScene;
