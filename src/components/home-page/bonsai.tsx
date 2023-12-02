"use client";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { MeshLambertMaterial, TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Bonsai = () => {
  const obj = useLoader(GLTFLoader, "models/bonsai-w-grass.gltf");
  const texture = useLoader(TextureLoader, "texture.jpg");

  useFrame((state, delta) => {
    const rotation = obj.nodes["Gleditsia_triacanthos_v02_m01"].rotation;
    rotation.y += Math.sin(state.clock.elapsedTime) * delta * 0.025;
    rotation.x += Math.cos(state.clock.elapsedTime) * delta * 0.01;
  });

  useEffect(() => {
    (obj.nodes["pot"] as any).material = new MeshLambertMaterial({
      map: texture,
    });
  }, []);

  return (
    <group scale={0.2} position={[0, -10, -5]} rotation={[0.65, 0.5, 0]}>
      <primitive
        object={obj.scene}
        material={new MeshLambertMaterial({ color: "blue" })}
      />
    </group>
  );
};
