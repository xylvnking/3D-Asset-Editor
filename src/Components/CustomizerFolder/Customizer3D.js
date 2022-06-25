
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { customizerCanvas } from './Customizer.module.css'
import { PerspectiveCamera } from '@react-three/drei'

//this will probably go in wrapper/parent component
import { HexColorPicker } from "react-colorful";





const CameraController = () => {
    const { camera, gl } = useThree();
    useEffect(
      () => {
        const controls = new OrbitControls(camera, gl.domElement);
  
        controls.minDistance = 1;
        controls.maxDistance = 100;
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  };


export default function Customizer3D(props) {

    //Object rotation being set with sliders
    const [xRotation, setXRotation] = useState(0) //0-11

    const [zRotation, setZRotation] = useState(0) //0-11

    const [yRotation, setYRotation] = useState(0) //0-11

    // Material Properties
    const [roughness, setRoughness] = useState(.2) // 0-1
    const [metalness, setMetalness] = useState(.7) // 0-1

    // Lights
    const [ambientLightIntensity, setAmbientLightIntensity] = useState(0)
    const [ambientLightColor, setAmbientLightColor] = useState("#000000")


    return (
        <div className={customizerCanvas}>
            {/* <h1>threacttttt</h1> */}
            
            {/* <HexColorPicker color={color} onChange={setColor} /> */}
            <Canvas>
                <CameraController />

                <PerspectiveCamera 
                    makeDefault fov={30} 
                    position={[-10, 10, 10]} 
                />

                <gridHelper args={[20,30]}/>

                <mesh
                    // rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}
                    rotation={[xRotation, yRotation, zRotation]}
                    >


                    <ambientLight 
                        intensity={ambientLightIntensity}
                        color={ambientLightColor}
                    />


                    <pointLight position={[10, 10, 10]} />
                    <boxGeometry 
                    args={[5, 5, 5]} //SETS SIZE
                    />
                    {/* <sphereGeometry args={[-10, -5, -5]} /> */}

                    <meshStandardMaterial 
                        color={props.color}
                        roughness={roughness}
                        metalness={metalness}
                    />


                    
                </mesh>
                
            </Canvas>

            x Rotation
            <input 
                id="typeinp" 
                type="range" 
                min="0" max="11" 
                value={xRotation} // sets the slider to the default (0) on load
                onChange={(e) => setXRotation(e.target.value)}
                step=".01" // smaller = smoother
            />
            Y Rotation
            <input 
                id="typeinp" 
                type="range" 
                min="0" max="11" 
                value={yRotation}
                onChange={(e) => setYRotation(e.target.value)}
                step=".01"
            />
            Z Rotation
            <input 
                id="typeinp" 
                type="range" 
                min="0" max="11" 
                value={zRotation}
                onChange={(e) => setZRotation(e.target.value)}
                step=".01"
            />

            roughness
            <input 
                id="typeinp" 
                type="range" 
                min="0" max="1" 
                value={roughness}
                onChange={(e) => setRoughness(e.target.value)}
                step=".1"
            />

            metalness
            <input 
                id="typeinp" 
                type="range" 
                min="0" max="1" 
                value={metalness} 
                onChange={(e) => setMetalness(e.target.value)}
                step=".1"
            />

            ambientLightIntensity
            <input 
                id="typeinp" 
                type="range" 
                min="0" max="25" 
                value={ambientLightIntensity} 
                onChange={(e) => setAmbientLightIntensity(e.target.value)}
                step=".1"
            />

            ambientLightColor
            <HexColorPicker color={ambientLightColor} onChange={setAmbientLightColor} />

        </div>
    )
}
