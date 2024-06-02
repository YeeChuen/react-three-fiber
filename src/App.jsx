import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { createRoot } from "react-dom/client";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { DirectionalLight, SphereGeometry } from "three/src/Three.js";

// local component import
import Cube from "./components/Cube";
import Sphere from "./components/Sphere";
import Torus from "./components/Torus";
import TorusKnot from "./components/TorusKnot";
import InteractCube from "./components/InteractCube";
import TorusKnotDrei from "./components/TorusKnotDrei";
import MyGeometryScene from "./components/MyGeometryScene"

import { OrbitControls } from "@react-three/drei"; // <-- this is better than using TorusKnotDrei
import TorusKnotWobble from "./components/TorusKnotWobble";
import MyInteractiveScene from "./components/MyInteractiveScene";
import MyLightScene from "./components/MyLightScene";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Interactive geometry</h1>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <MyInteractiveScene/>
      </Canvas>

      <h1 style={{ color: "white" }}>Shapes</h1>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <MyGeometryScene/>
      </Canvas>
      
      <h1 style={{ color: "white" }}>Shapes with light direction information</h1>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <MyLightScene/>
      </Canvas>
    </div>
  );
}

export default App;
