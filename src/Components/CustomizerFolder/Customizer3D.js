
import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { customizerCanvas, customizerMain, customizerContainer, customizerFlex, customizerControls } from './Customizer.module.css'
import { PerspectiveCamera, Ring, useHelper, Environment, Stars, Sky, Trail } from '@react-three/drei'

//this will probably go in wrapper/parent component
import { HexColorPicker } from "react-colorful";

// importing gltf
import RingTextured from './RingTextured'



/*

TO DO:

- set up lighting rigs

- should this all be passed in as props? so that the controls component can receive/control them too?
    - would it be better to have controls here too? just so it's one self-contained component?



*/


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
    const [objectColor, setObjectColor] = useState("#27a1e3")

    // Lights
    const [ambientLightIntensity, setAmbientLightIntensity] = useState(3)
    const [ambientLightColor, setAmbientLightColor] = useState("#ffffff")


    const [gridToggle, setGridToggle] = useState(false)

    const [mesh1Toggle, setMesh1Toggle] = useState(true)
    const [mesh2Toggle, setMesh2Toggle] = useState(true)
    const [mesh3Toggle, setMesh3Toggle] = useState(true)
    const [mesh4Toggle, setMesh4Toggle] = useState(true)
    
    


    return (
        <div className={customizerContainer}>
            <div className={customizerMain}>
                <div className={customizerFlex}>
                    <div className={customizerCanvas}>
                        <Canvas>
                            <CameraController />
                            <PerspectiveCamera 
                                makeDefault fov={35} 
                                // position={[-5, 2, -5]} 
                                position={[3.5, 3.5, -3.5]} 
                            />
                            
                            <gridHelper 
                            args={[20,30]}
                            visible={gridToggle}/>
                            
                            {/* <mesh 
                            rotation={[xRotation, yRotation, zRotation]}
                                
                            >
                                <ambientLight 
                                    intensity={ambientLightIntensity}
                                    color={ambientLightColor}
                                />
                                <pointLight 
                                    
                                    intensity={5}
                                    position={[10, 10, 10]} 
                                />
                                
                                <boxGeometry 
                                args={[5, 5, 5]} //SETS SIZE
                                />
                                <meshStandardMaterial 
                                    color={objectColor}
                                    roughness={roughness}
                                    metalness={metalness}
                                />

                            </mesh> */}
                            <Suspense>
                                
                                <RingTextured 
                                    
                                    rotation={[xRotation, yRotation, zRotation]}

                                    mesh1Visibility={mesh1Toggle}
                                    mesh2Visibility={mesh2Toggle}
                                    mesh3Visibility={mesh3Toggle}
                                    mesh4Visibility={mesh4Toggle}
                                    />
                                
                                <Environment 
                                preset="studio"
                                />
                                {/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} /> */}
                                {/* <Sky distance={45000} sunPosition={[0, 12, 0]} inclination={.1} azimuth={1} {...props} /> */}
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className={customizerControls}>
                        x Rotation
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="11" 
                            value={xRotation} // sets the slider to the default (0) on load
                            onChange={(e) => setXRotation(e.target.value)}
                            step=".01" // smaller = smoother
                        />
                        <button
                            onClick={() => 
                            setXRotation(0)}>
                            Reset X Rotation
                        </button><br />
                        Y Rotation
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="11" 
                            value={yRotation}
                            onChange={(e) => setYRotation(e.target.value)}
                            step=".01"
                        />
                        <button
                            onClick={() => 
                            setYRotation(0)}>
                            Reset Y Rotation
                        </button><br />
                        Z Rotation
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="11" 
                            value={zRotation}
                            onChange={(e) => setZRotation(e.target.value)}
                            step=".01"
                        />
                        <button
                            onClick={() => 
                            setZRotation(0)}>
                            Reset Z Rotation
                        </button><br />

                        <button
                            onClick={() => 
                            setGridToggle(!gridToggle)}>
                            Grid Toggle
                        </button><br />

                        <button
                            onClick={() => 
                            setMesh1Toggle(!mesh1Toggle)}>
                            Mesh1 Toggle
                        </button><br />

                        <button
                            onClick={() => 
                            setMesh2Toggle(!mesh2Toggle)}>
                            Mesh2 Toggle
                        </button><br />

                        <button
                            onClick={() => 
                            setMesh3Toggle(!mesh3Toggle)}>
                            Mesh3 Toggle
                        </button><br />

                        <button
                            onClick={() => 
                            setMesh4Toggle(!mesh4Toggle)}>
                            Mesh4 Toggle
                        </button><br />

                        roughness
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="1" 
                            value={roughness}
                            onChange={(e) => setRoughness(e.target.value)}
                            step=".1"
                        /><br />

                        metalness
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="1" 
                            value={metalness} 
                            onChange={(e) => setMetalness(e.target.value)}
                            step=".1"
                        /><br />

                        ambientLightIntensity
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="10" 
                            value={ambientLightIntensity} 
                            onChange={(e) => setAmbientLightIntensity(e.target.value)}
                            step=".1"
                        /><br />

                        ambientLightColor
                        <HexColorPicker color={ambientLightColor} onChange={setAmbientLightColor} />

                        objectColor
                        <HexColorPicker color={objectColor} onChange={setObjectColor} />
                    </div>
                </div>
            </div>

        </div>
    )
}
