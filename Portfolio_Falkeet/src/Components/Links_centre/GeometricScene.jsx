import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function OctahedronGroup() {
  const groupRef = useRef()
  const octaRef = useRef()

  useFrame(({ clock, mouse }) => {
    const elapsedTime = clock.getElapsedTime()
    
    // Rotate the entire group
    groupRef.current.rotation.y = elapsedTime * 0.5
    
    // Add subtle movement based on mouse position
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.y * 0.5,
      0.1
    )
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      mouse.x * 0.5,
      0.1
    )
  })

  return (
    <group ref={groupRef}>
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
        {/* Main octahedron */}
        <mesh ref={octaRef} position={[0, 0, 0]} scale={2}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshPhongMaterial
            color="#88c0d0"
            shininess={100}
            wireframe={true}
          />
        </mesh>

        {/* Inner octahedron */}
        <mesh scale={1.2} position={[0, 0, 0]}>
          <octahedronGeometry args={[1.5, 0]} />
          <MeshDistortMaterial
            color="#5e81ac"
            speed={2}
            distort={0.3}
            radius={1}
          />
        </mesh>

        {/* Orbiting spheres */}
        {[...Array(3)].map((_, i) => (
          <Float
            key={i}
            speed={1}
            rotationIntensity={1}
            floatIntensity={2}
            position={[
              Math.cos(i * (Math.PI * 2) / 3) * 4,
              Math.sin(i * (Math.PI * 2) / 3) * 4,
              0
            ]}
          >
            <mesh>
              <sphereGeometry args={[0.3, 32, 32]} />
              <meshPhongMaterial
                color="#d8dee9"
                shininess={100}
              />
            </mesh>
          </Float>
        ))}

        {/* Particles */}
        {[...Array(40)].map((_, i) => (
          <mesh
            key={i}
            position={[
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 8,
            ]}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial
              color="#d8dee9"
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </Float>
    </group>
  )
}

export function GeometricScene() {
  return (
    <div className="geometric-scene">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <OctahedronGroup />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
