import { MeshTransmissionMaterial, Text, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react'
import * as THREE from 'three';


const Model = () => {
    const { viewport } = useThree();
    const { nodes, materials } = useGLTF('/models/donut.glb');
    const donut1 = useRef<THREE.Mesh>(null);
    const donut2 = useRef<THREE.Mesh>(null);

    const Torus = nodes.Torus as THREE.Mesh
    const Torus001 = nodes.Torus001 as THREE.Mesh

    useFrame(({ clock }) => {
        if (!donut1.current) return
        // donut1.current.rotation.y = clock.getElapsedTime() * 0.5
        donut1.current.rotation.x = clock.getElapsedTime() * 0.5
        donut1.current.rotation.z = clock.getElapsedTime() * 0.5
        // donut2.current.rotation.x = clock.getElapsedTime() * 0.5
        // donut2.current.rotation.z = clock.getElapsedTime() * 0.5
    })

    const materialProps = {
        thickness: 0.2,
        roughness: 0,
        transmission: 1,      
        ior: 1.5,           
        chromaticAberration: 0.02,
        backside: true,
        transparent: true,
        opacity: 0.7,
    }

    return (
        <group dispose={null} scale={viewport.width / 10}>
            <Text scale={4} position={[0, 0, -1]} color={'black'}>
                Donut!
            </Text>
            <mesh ref={donut1}
                geometry={Torus.geometry}

            >
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
        </group>
    )
}
useGLTF.preload('/models/donut.glb')

export default Model
