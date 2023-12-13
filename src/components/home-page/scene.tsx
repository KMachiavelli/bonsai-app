"use client";
import { Canvas } from "@react-three/fiber";
import { Bonsai } from "./bonsai";
import { Suspense } from "react";
import { FullScreenLoader } from "../shared/full-screen-loader";

export const Scene = () => {
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <Canvas camera={{ position: [0, 20, -15] }} className="!absolute">
        <perspectiveCamera />
        <ambientLight position={[10, -10, -10]} intensity={0.3} />
        <directionalLight position={[-10, 10, -10]} intensity={3.5} />
        <directionalLight position={[0, -25, 10]} intensity={0.05} />
        {/* <hemisphereLight position={[0, 20, 20]} intensity={1} /> */}
        {/* <OrbitControls /> */}
        <Bonsai />
      </Canvas>
    </Suspense>
  );
};
