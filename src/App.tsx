import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./App.css";

function App() {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        background: "#f0f8ff",
      }}
      camera={{
        fov: 75,
        near: 0.1,
        far: 200,
        position: [10, 4, 10],
      }}
    >
      <OrbitControls makeDefault />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial wireframe />
      </mesh>
    </Canvas>
  );
}

export default App;
