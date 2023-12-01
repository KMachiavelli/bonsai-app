"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Bonsai = () => {
  const obj = useLoader(GLTFLoader, "models/bonsai-w-grass.gltf");

  useFrame((state, delta) => {
    const rotation = obj.nodes["Gleditsia_triacanthos_v02_m01"].rotation;
    rotation.y += Math.sin(state.clock.elapsedTime) * delta * 0.025;
    rotation.x += Math.cos(state.clock.elapsedTime) * delta * 0.01;
  });

  return (
    <group scale={0.2} position={[0, -10, -5]} rotation={[0.6, 0.5, 0]}>
      <primitive object={obj.scene} />
    </group>
  );
};
