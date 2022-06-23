
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { customizerCanvas } from './Customizer.module.css'

const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
  
        controls.minDistance = 3;
        controls.maxDistance = 20;
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  };


export default function Customizer3D() {
    return (
        <div className={customizerCanvas}>
            <h1>threacttttt</h1>
            <Canvas>
                <CameraController />
                <mesh>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <boxGeometry args={[5, 5, 5]} />
                    <meshStandardMaterial color={"#7BEDFA"}/>
                </mesh>
            </Canvas>
        </div>
    )
}
