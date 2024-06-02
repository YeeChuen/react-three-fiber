import { useRef, useState } from "react";

// local component import
import Cube from "./Cube";
import Sphere from "./Sphere";
import Torus from "./Torus";
import TorusKnot from "./TorusKnot";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from "three";

import { OrbitControls } from "@react-three/drei";

function MyLightScene() {
  const [count, setCount] = useState(0);

  const directionalLight = useRef();

  // helper, to help you see where the light source is coming from.
  useHelper(directionalLight, DirectionalLightHelper, 0.5, "white")

  return (
    <>
        <directionalLight position={[0, 1, 2]} ref={directionalLight}/>
        <ambientLight intensity={0.5} />

        {/* Below is before animation, only about shape rendering  */}
        {/* <group position={[5,0,0]}>
        <Cube position={[2,2,0]} color = {"red"}args={[2,2,2]}/>
        <Cube position={[-2,2,0]} color = {"blue"}args={[2,2,2]}/>
        <Cube position={[2,-2,0]} color = {"green"}args={[2,2,2]}/>
        <Cube position={[-2,-2,0]} color = {"yellow"}args={[2,2,2]}/>
      </group> */}

        {/*  Cube geometry */}
        <Cube position={[2, 2, 0]} color={"white"} args={[1, 1, 1]} />
        <OrbitControls enableZoom={false}/>
    </>
  );
}

export default MyLightScene;
