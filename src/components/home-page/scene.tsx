"use client";
import { Canvas } from "@react-three/fiber";
import { Bonsai } from "./bonsai";
import { Suspense, useEffect, useRef } from "react";
import { CircleLoader } from "react-spinners";

export const Scene = () => {
  return (
    <Suspense fallback={<CircleLoader className="absolute top-50 left-50" />}>
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