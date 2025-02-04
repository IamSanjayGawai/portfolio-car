// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

// const Model = () => {
//   const { scene } = useGLTF("/porsche/scene.gltf");
  
//   // Ensure materials respond properly to lighting
//   scene.traverse((child) => {
//     if (child.isMesh) {
//       child.material.metalness = 1; // Reflective metal
//       child.material.roughness = 0.3; // Slight roughness for reflections
//     }
//   });

//   return <primitive object={scene} />;
// };

// const CarModel = () => {
//   return (
//     <Canvas shadows camera={{ position: [5, 2, 10], fov: 50 }}>
//       {/* Environment Map for Realistic Reflections */}
//       <Environment preset="city" />

//       {/* Ambient Light - Base lighting */}
//       <ambientLight intensity={0.8} />

//       {/* Directional Light - Sun-like light */}
//       <directionalLight position={[5, 5, 5]} intensity={2} castShadow />

//       {/* Spot Light - Extra highlights */}
//       <spotLight position={[0, 10, 0]} angle={0.3} intensity={1.5} castShadow />

//       <Model />
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default CarModel;



import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/porsche/scene.gltf");

  // Ensure materials respond properly to lighting
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 1; // Reflective metal
      child.material.roughness = 0.3; // Slight roughness for reflections
    }
  });

  // Scale the car model and rotate it to face the right side
  scene.scale.set(1, 1, 1); // Increase the size (adjust the factor to suit your needs)
  scene.rotation.y = Math.PI / 1.5; // Rotate the car 90 degrees to the right

  return <primitive object={scene} />;
};

const CarModel = () => {
  return (
    <Canvas shadows camera={{ position: [5,2, 10], fov: 25 }}>
      {/* Environment Map for Realistic Reflections */}
      <Environment preset="city" />

      {/* Ambient Light - Base lighting */}
      <ambientLight intensity={0.8} />

      {/* Directional Light - Sun-like light */}
      <directionalLight position={[5, 5, 5]} intensity={2} castShadow />

      {/* Spot Light - Extra highlights */}
      <spotLight position={[0, 10, 0]} angle={0.3} intensity={1.5} castShadow />

      <Model />
      
      {/* Disable rotation with OrbitControls */}
      <OrbitControls enableRotate={false} />
    </Canvas>
  );
};

export default CarModel;
