'use client'

import { Canvas } from "@react-three/fiber"
import Model from "./Model"
import * as THREE from "three"
import { Environment } from "@react-three/drei"


const Scene = () => {
    return (
        <Canvas>
           <ambientLight intensity={2} position={[0, 3, 2]}/>
            <Environment preset="dawn" />
            <Model />
        </Canvas>
    )
}

export default Scene