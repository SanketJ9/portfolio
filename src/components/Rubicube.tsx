"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RoundedBox, Edges, OrbitControls } from "@react-three/drei";

export default function RubiksCube() {
  const groupRef = useRef<THREE.Group>(null);


    // The 6 sticker colors (we don't need MeshStandardMaterial here, just the hex colors)
    const stickerColors = ["#ff0000", "#ff8800", "#ffffff", "#d7b611", "#18b818", "#1f5ef2"];

    const spacing = 1.01;
    
    const cubies = useMemo(() => {
        const cubes = [];
        for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
            cubes.push({
                position: [x * spacing, y * spacing, z * spacing] as [number, number, number],
                key: `cubie-${x}-${y}-${z}`
            });
            }
        }
        }
        return cubes;
    }, []);

    return (
        <group ref={groupRef} scale={[0.8, 0.8, 0.8]}>
        {cubies.map(({ position, key }) => (
            // The Black Plastic Core
            <group key={key} position={position}>
            <RoundedBox args={[1, 1, 1]} radius={0.1} smoothness={4}>
                <meshStandardMaterial color="#f3f4f6" roughness={0.8} />
                <Edges color="black" linewidth={1} />
            </RoundedBox>

            {/* Right Sticker */}
            <mesh position={[0.51, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <planeGeometry args={[0.8, 0.8]} />
                <meshStandardMaterial color={stickerColors[0]} />
            </mesh>

            {/* Left Sticker */}
            <mesh position={[-0.51, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <planeGeometry args={[0.8, 0.8]} />
                <meshStandardMaterial color={stickerColors[1]} />
            </mesh>

            {/* Top Sticker */}
            <mesh position={[0, 0.51, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0.8, 0.8]} />
                <meshStandardMaterial color={stickerColors[2]} />
            </mesh>

            {/* Bottom Sticker */}
            <mesh position={[0, -0.51, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <planeGeometry args={[0.8, 0.8]} />
                <meshStandardMaterial color={stickerColors[3]} />
            </mesh>

            {/* Front Sticker */}
            <mesh position={[0, 0, 0.51]} rotation={[0, 0, 0]}>
                <planeGeometry args={[0.8, 0.8]} />
                <meshStandardMaterial color={stickerColors[4]} />
            </mesh>

            {/* Back Sticker */}
            <mesh position={[0, 0, -0.51]} rotation={[0, Math.PI, 0]}>
                <planeGeometry args={[0.8, 0.8]} />
                <meshStandardMaterial color={stickerColors[5]} />
            </mesh>
            </group>
        ))}
        </group>
    );
}   