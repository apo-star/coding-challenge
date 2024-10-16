import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  GizmoHelper,
  GizmoViewport,
  TransformControls,
} from "@react-three/drei";
import { useModel } from "../store/useModel";
import { useRef } from "react";
import { useModelProperty } from "../store/store";

export const Scene = () => {
  const { model } = useModel();
  const controlsRef = useRef();
  const { setModelPosition, setModelRotation } = useModelProperty([
    "setModelPosition",
    "setModelRotation",
  ]);

  return (
    <Canvas
      style={{
        width: "80vw",
        height: "100vh",
        background: "#1e1e1e",
      }}
      camera={{
        fov: 75,
        near: 0.1,
        far: 200,
        position: [10, 4, 10],
      }}
    >
      <ambientLight intensity={0.5} />
      <OrbitControls makeDefault />

      {model ? (
        <TransformControls
          ref={controlsRef}
          mode="translate"
          enabled={true}
          onChange={() => {
            const positionX =
              controlsRef.current.positionStart.x +
              controlsRef.current.offset.x;
            const positionY =
              controlsRef.current.positionStart.y +
              controlsRef.current.offset.y;
            const positionZ =
              controlsRef.current.positionStart.z +
              controlsRef.current.offset.z;
            console.log("controlsRef.current", controlsRef.current);

            setModelPosition([positionX, positionY, positionZ]);
          }}
        >
          <primitive object={model} />
        </TransformControls>
      ) : (
        <mesh>
          <sphereGeometry />
          <meshNormalMaterial wireframe />
        </mesh>
      )}
      <gridHelper args={[100, 100, "green", "gray"]} />
      <GizmoHelper alignment="top-right">
        <GizmoViewport />
      </GizmoHelper>
    </Canvas>
  );
};