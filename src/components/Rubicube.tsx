"use client";

import { useMemo , useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RoundedBox, Edges } from "@react-three/drei";

interface RubicCubeProps {
    scrollProgressRef: React.RefObject<number>;
    isPreloader: boolean;
}

interface Move{
    axis: THREE.Vector3;
    filter: (pos: THREE.Vector3) => boolean;
    angle: number;
}

export default function RubiksCube({scrollProgressRef, isPreloader}: RubicCubeProps) {

    // The 6 sticker colors (we don't need MeshStandardMaterial here, just the hex colors)
    const spacing = 1.01;
    const stickerColors = ["#ff0000", "#ff8800", "#ffffff", "#ffcc00", "#18b818", "#1f5ef2"];
    
    const moves: Move[] = useMemo(() => {
    const X = new THREE.Vector3(1, 0, 0);
    const Y = new THREE.Vector3(0, 1, 0);
    const Z = new THREE.Vector3(0, 0, 1);
    // Reusable move templates (U_ means U', R_ means R', etc.)
    const U  = { axis: Y, filter: (p: THREE.Vector3) => p.y > 0.5,  angle: -Math.PI / 2 };
    const U_ = { axis: Y, filter: (p: THREE.Vector3) => p.y > 0.5,  angle:  Math.PI / 2 };
    const D  = { axis: Y, filter: (p: THREE.Vector3) => p.y < -0.5, angle:  Math.PI / 2 };
    const D_ = { axis: Y, filter: (p: THREE.Vector3) => p.y < -0.5, angle: -Math.PI / 2 };
    const R  = { axis: X, filter: (p: THREE.Vector3) => p.x > 0.5,  angle: -Math.PI / 2 };
    const R_ = { axis: X, filter: (p: THREE.Vector3) => p.x > 0.5,  angle:  Math.PI / 2 };
    const L  = { axis: X, filter: (p: THREE.Vector3) => p.x < -0.5, angle:  Math.PI / 2 };
    const L_ = { axis: X, filter: (p: THREE.Vector3) => p.x < -0.5, angle: -Math.PI / 2 };
    const F  = { axis: Z, filter: (p: THREE.Vector3) => p.z > 0.5,  angle: -Math.PI / 2 };
    const F_ = { axis: Z, filter: (p: THREE.Vector3) => p.z > 0.5,  angle:  Math.PI / 2 };
    const B  = { axis: Z, filter: (p: THREE.Vector3) => p.z < -0.5, angle:  Math.PI / 2 };
    const B_ = { axis: Z, filter: (p: THREE.Vector3) => p.z < -0.5, angle: -Math.PI / 2 };
    // 24 completely randomized, non-canceling moves
    return [
      R,  U_, F,  L,  B_, D,  R_, U,
      L_, F_, D_, B,  R,  D,  L,  U_,
      F,  B_, R_, U,  D_, L_, F_, B
    ];
  }, []);

    const totalMoves = moves.length;

    // 1. References for the 27 cubie meshes and animation timers
    const cubieRefs = useRef<(THREE.Group | null)[]>([]);
    const currentT = useRef(0);
    const scrambleTimer = useRef(0);

    // 2. Build the 27 initial cubies on a (-1, 0, 1) grid
    const initialCubies = useMemo(() => {
        const cubes = [];
        let id = 0;
        for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
            cubes.push({
                id: id++,
                basePos: new THREE.Vector3(x, y, z),
                key: `cubie-${x}-${y}-${z}`,
            });
            }
        }
        }
        return cubes;
    }, []);

      // 3. Precompute discrete resting snapshots for all 27 cubies for each step (0 to 8)
    const restingPoses = useMemo(() => {
        const states: { pos: THREE.Vector3; quat: THREE.Quaternion }[][] = [];

        // State 0: Solved state (base positions and 0 rotation)
        states.push(
        initialCubies.map((c) => ({
            pos: c.basePos.clone(),
            quat: new THREE.Quaternion(),
        }))
        );

        // Apply each move sequentially to build subsequent resting snapshots
        for (let m = 0; m < moves.length; m++) {
        const prev = states[m];
        const move = moves[m];
        const next = prev.map((c) => ({
            pos: c.pos.clone(),
            quat: c.quat.clone(),
        }));

        const rotQuat = new THREE.Quaternion().setFromAxisAngle(move.axis, move.angle);

        for (let i = 0; i < next.length; i++) {
            if (move.filter(next[i].pos)) {
            // Rotate position and snap to integers (-1, 0, 1)
            next[i].pos.applyAxisAngle(move.axis, move.angle);
            next[i].pos.x = Math.round(next[i].pos.x);
            next[i].pos.y = Math.round(next[i].pos.y);
            next[i].pos.z = Math.round(next[i].pos.z);

            // Accumulate rotation
            next[i].quat.premultiply(rotQuat);
            }
        }
        states.push(next);
        }

        return states;
    }, [initialCubies, moves]);

      // 4. Temporary math objects (prevents Garbage Collection lag at 60-120 FPS)
    const tempPos = useMemo(() => new THREE.Vector3(), []);
    const tempQuat = useMemo(() => new THREE.Quaternion(), []);
    const rotQuat = useMemo(() => new THREE.Quaternion(), []);

    // 5. The Animation Loop (Preloader auto-scramble + Scroll-driven solve)
    useFrame((_, delta) => {
        let targetT = 0;

        if (isPreloader) {
        // Auto-scramble forward during the preloader (over 2.0 seconds)
        scrambleTimer.current += delta;
        targetT = Math.min(totalMoves, (scrambleTimer.current / 2.0) * totalMoves);
        currentT.current = targetT;
        } else {
        // Scroll-driven solve:
        // scroll = 0 (top)    => targetT = 8 (scrambled)
        // scroll = 1 (bottom) => targetT = 0 (solved)
        const scroll = Math.max(0, Math.min(1, scrollProgressRef.current ?? 0));
        targetT = totalMoves * (1 - scroll);

        // Smooth damping (lerp) so turns feel smooth and mechanical
        currentT.current = THREE.MathUtils.lerp(currentT.current, targetT, 0.1);
        }

        const t = Math.max(0, Math.min(totalMoves, currentT.current));
        const step = Math.min(Math.floor(t), totalMoves - 1);
        const fraction = t - step;

        const currentMove = moves[step];
        const angleThisFrame = currentMove ? currentMove.angle * fraction : 0;
        if (currentMove) {
        rotQuat.setFromAxisAngle(currentMove.axis, angleThisFrame);
        }

        // Update all 27 cubies
        for (let i = 0; i < 27; i++) {
        const cubieGroup = cubieRefs.current[i];
        if (!cubieGroup) continue;

        const basePose = restingPoses[step][i];

        if (currentMove && currentMove.filter(basePose.pos) && fraction > 0.0001) {
            // Rotating layer: spin by the partial fraction
            tempPos.copy(basePose.pos).applyAxisAngle(currentMove.axis, angleThisFrame);
            tempQuat.copy(basePose.quat).premultiply(rotQuat);
        } else {
            // Stationary layer: hold at resting snapshot
            tempPos.copy(basePose.pos);
            tempQuat.copy(basePose.quat);
        }

        // Apply visual spacing and update the 3D group
        cubieGroup.position.set(
            tempPos.x * spacing,
            tempPos.y * spacing,
            tempPos.z * spacing
        );
        cubieGroup.quaternion.copy(tempQuat);
        }
    });

        return (
        <group scale={[0.8, 0.8, 0.8]}>
        {initialCubies.map(({ key }, index) => (
            // The Black Plastic Core
            <group 
                key={key} 
                ref={(el) => {
                    cubieRefs.current[index] = el;
                }}
            >
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