import { useRef, useState } from "react";

// local component import
import Cube from "./Cube";
import Sphere from "./Sphere";
import Torus from "./Torus";
import TorusKnot from "./TorusKnot";

function MyGeometryScene() {
  const [count, setCount] = useState(0);

  return (
    <>
        <directionalLight position={[0, 0, 2]} />
        <ambientLight intensity={0.5} />

        {/* Below is before animation, only about shape rendering  */}
        {/* <group position={[5,0,0]}>
        <Cube position={[2,2,0]} color = {"red"}args={[2,2,2]}/>
        <Cube position={[-2,2,0]} color = {"blue"}args={[2,2,2]}/>
        <Cube position={[2,-2,0]} color = {"green"}args={[2,2,2]}/>
        <Cube position={[-2,-2,0]} color = {"yellow"}args={[2,2,2]}/>
      </group> */}

        {/*  Cube geometry */}
        <Cube position={[2, 2, 0]} color={"yellow"} args={[1, 1, 1]} />

        {/*  Sphere geometry */}
        <Sphere position={[-2, 2, 0]} args={[1, 30, 30]} color={"blue"} />

        {/*  Torus geometry */}
        <Torus position={[2, -2, 0]} args={[1, 0.5, 30, 30]} color={"green"} />

        {/*  TorusKnot geometry */}
        <TorusKnot
          position={[-2, -2, 0]}
          args={[1, 0.1, 1000, 50]}
          color={"red"}
        />
    </>
  );
}

export default MyGeometryScene;
