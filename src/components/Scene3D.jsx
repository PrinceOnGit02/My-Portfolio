import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars } from "@react-three/drei";
import { useRef } from "react";

function FloatingShape() {
  const mesh = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (mesh.current) {
      mesh.current.rotation.x = time * 0.25;
      mesh.current.rotation.y = time * 0.35;

      mesh.current.position.x = state.pointer.x * 0.5;
      mesh.current.position.y = state.pointer.y * 0.5;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1.5}
      floatIntensity={2}
    >
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.5, 2]} />

        <meshStandardMaterial
          color="#00ffff"
          wireframe
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={1} />

      <pointLight
        position={[5, 5, 5]}
        intensity={100}
      />

      <pointLight
        position={[-5, -5, -5]}
        intensity={50}
      />

      <Stars
        radius={50}
        depth={30}
        count={1500}
        factor={3}
        saturation={0}
        fade
        speed={1}
      />

      <FloatingShape />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}