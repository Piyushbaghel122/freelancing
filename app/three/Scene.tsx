"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, ContactShadows, OrbitControls, MeshTransmissionMaterial } from "@react-three/drei";

export default function Scene() { 
    return (
        <div className="w-full h-screen absolute inset-0 z-0 touch-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                
                <OrbitControls enableZoom={false} enablePan={false} />
                <group rotation={[0, 0.3, 0]}>
                    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
                        <mesh>
                            <torusKnotGeometry args={[0.8, 0.25, 200, 32]} />
                            <MeshTransmissionMaterial 
                                backside
                                samples={4}
                                thickness={0.5}
                                chromaticAberration={0.5}
                                anisotropy={0.1}
                                distortion={0.0}
                                distortionScale={0.3}
                                iridescence={1}
                                iridescenceIOR={1}
                                iridescenceThicknessRange={[0, 1400]}
                                color="#4f46e5"
                            />
                        </mesh>
                    </Float>
                </group>

                <ContactShadows position={[0, -1.5, 0]} opacity={0.7} scale={10} blur={2.5} far={4} color="#000000" />
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}