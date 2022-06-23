
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { customizerCanvas } from './Customizer.module.css'
import { PerspectiveCamera } from '@react-three/drei'




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

    const [cubeRotation, setCubeRotation] = useState(100)

    const rotateCube = () => {
        setCubeRotation((prev) => {
            return cubeRotation + 45
        })
    }

    const [cubeRotation2, setCubeRotation2] = useState(100)

    const rotateCube2 = () => {
        setCubeRotation2((prev) => {
            return cubeRotation2 + 45
        })
    }

    const [objectColor, setObjectColor] = useState("#00ffb3")


    return (
        <div className={customizerCanvas}>
            {/* <h1>threacttttt</h1> */}
            
            <Canvas>
                <CameraController />
                {/* <PerspectiveCamera 
                makeDefault
                near={1}
                far={1000}
                position={[0, 0, 12.5]}
                rotateY={[50]}

                /> */}

                <gridHelper args={[20,30]}/>

                <mesh
                    // rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}
                    
                    rotation-x={cubeRotation2} 
                    // rotation-y={Math.PI * 0.25}
                    rotation-y={cubeRotation}
                >
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <boxGeometry args={[5, 5, 5]} />
                    {/* <sphereGeometry args={[-10, -5, -5]} /> */}
                    <meshStandardMaterial color={objectColor}/>
                    
                </mesh>
                
            </Canvas>
                <button
                onClick={rotateCube}
                // style={width: 300px}
                >Rotate Y</button>
                <button
                onClick={rotateCube2}
                // style={width: 300px}
                >Rotate X</button>
        </div>
    )
}
