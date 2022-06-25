
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


export default function Customizer3D(props) {



    // Updating rotation of object according to button presses
    // Not satisfied at all with the implementation
    // It's not smooth and feels awful to use.
    // Also didn't include a minus set cause I'll be redoing it and didn't wanna pollute the code more than this for now.
    const [xRotation, setXRotation] = useState(0)
    const rotateX = () => {
        setXRotation((prev) => {
            return prev + .5
        })
    }

    const [zRotation, setZRotation] = useState(0)
    const rotateZ = () => {
        setZRotation((prev) => {
            return prev + .5
        })
    }

    const [yRotation, setYRotation] = useState(0)
    const rotateY = () => {
        setYRotation((prev) => {
            return prev + .5
        })
    }

    console.log(xRotation)

    return (
        <div className={customizerCanvas}>
            {/* <h1>threacttttt</h1> */}
            
            {/* <HexColorPicker color={color} onChange={setColor} /> */}
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
                    rotation={[xRotation, yRotation, zRotation]}
                    // rotation-x={cubeRotation2} 
                    // rotation-y={Math.PI * 0.25}
                    // rotation-y={cubeRotation}
                >
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <boxGeometry args={[5, 5, 5]} />
                    {/* <sphereGeometry args={[-10, -5, -5]} /> */}

                    <meshStandardMaterial 
                    color={props.color}
                    roughness={.1}
                    />


                    
                </mesh>
                
            </Canvas>


            <button
                onClick={rotateY}
            >Rotate X</button>
            <button
                onClick={rotateX}
            >Rotate X</button>
            <button
                onClick={rotateZ}
            >Rotate Z</button>

            <input 
                id="typeinp" 
                type="range" 
                min="0" max="11" 
                // value={value} 
                // onChange={rotateX}

                value={xRotation}
                onChange={(e) => setXRotation(e.target.value)}
                step=".1"
            />

            <input 
                id="typeinp" 
                type="range" 
                min="0" max="11" 
                // value={value} 
                // onChange={rotateX}

                value={yRotation}
                onChange={(e) => setYRotation(e.target.value)}
                step=".1"
            />

            <input 
                id="typeinp" 
                type="range" 
                min="0" max="11" 
                // value={value} 
                // onChange={rotateX}

                value={zRotation}
                onChange={(e) => setZRotation(e.target.value)}
                step=".1"
            />

        </div>
    )
}
