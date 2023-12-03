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
        <ambientLight position={[0, 0, -10]} intensity={1.1} />
        <directionalLight position={[0, 10, 10]} intensity={1.2} />
        <directionalLight position={[0, 10, 10]} intensity={1.2} />
        {/* <hemisphereLight position={[0, 0, -10]} intensity={1} /> */}
        {/* <OrbitControls /> */}
        <Bonsai />
      </Canvas>
    </Suspense>
  );
};
