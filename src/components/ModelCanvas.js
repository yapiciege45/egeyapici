"use client"; // Eğer Next.js 13+ App Router kullanıyorsan

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import React, { Suspense } from "react";

function Model() {
  const gltf = useGLTF("/models/model.glb");
  return <primitive object={gltf.scene} scale={1.5} />;
}

export default function ModelCanvas() {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        position: "relative",
        zIndex: 10,
        marginTop: 40,
      }}
    >
      <Canvas camera={{ position: [0, 2, 30], fov: 25 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enablePan={true} enableRotate={true} />
      </Canvas>
    </div>
  );
}
