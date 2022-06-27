
import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { customizerCanvas, customizerMain, customizerContainer, customizerFlex, customizerControls } from './Customizer.module.css'
import { PerspectiveCamera, Ring, useHelper, Environment, Stars, Sky, Trail } from '@react-three/drei'
import { HexColorPicker } from "react-colorful";
import RingTextured from './RingTextured'



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
    // const [objectColor, setObjectColor] = useState("#27a1e3")

    // Lights
    // const [ambientLightIntensity, setAmbientLightIntensity] = useState(3)
    // const [ambientLightColor, setAmbientLightColor] = useState("#ffffff")


    const [gridToggle, setGridToggle] = useState(false)

    const [mesh1Toggle, setMesh1Toggle] = useState(true)
    const [mesh2Toggle, setMesh2Toggle] = useState(true)
    const [mesh3Toggle, setMesh3Toggle] = useState(true)
    const [mesh4Toggle, setMesh4Toggle] = useState(true)

    
    const [materialColor1, setMaterialColor1] = useState("#27a1e3")
    const [materialColor2, setMaterialColor2] = useState("#27a1e3")
    const [materialColor3, setMaterialColor3] = useState("#27a1e3")
    const [materialColor4, setMaterialColor4] = useState("#27a1e3")

    const [materialRoughness1, setMaterialRoughness1] = useState(.2)
    const [materialRoughness2, setMaterialRoughness2] = useState(.2)
    const [materialRoughness3, setMaterialRoughness3] = useState(.2)
    const [materialRoughness4, setMaterialRoughness4] = useState(.2)
    
    const [toggleTexture1, setToggleTexture1] = useState(true)
    const [toggleTexture2, setToggleTexture2] = useState(true)
    const [toggleTexture3, setToggleTexture3] = useState(true)
    const [toggleTexture4, setToggleTexture4] = useState(true)

    const [toggleMesh1Visibility, setToggleMesh1Visibility] = useState(true)
    const [toggleMesh2Visibility, setToggleMesh2Visibility] = useState(true)
    const [toggleMesh3Visibility, setToggleMesh3Visibility] = useState(true)
    const [toggleMesh4Visibility, setToggleMesh4Visibility] = useState(true)

    const [material1Metalness, setMaterial1Metalness] = useState(.8)
    const [material2Metalness, setMaterial2Metalness] = useState(.8)
    const [material3Metalness, setMaterial3Metalness] = useState(.8)
    const [material4Metalness, setMaterial4Metalness] = useState(.8)


    return (
        <div className={customizerContainer}>
            <div className={customizerMain}>
                <div className={customizerFlex}>
                    <div className={customizerCanvas}>
                        <Canvas>
                            <CameraController />
                            <PerspectiveCamera 
                                makeDefault fov={35} 
                                position={[3.5, 3.5, -3.5]} />
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
                            <Environment preset="studio" />
                            <Suspense>
                                
                                <RingTextured 
                                    
                                    rotation={[xRotation, yRotation, zRotation]}

                                    materialColor1={materialColor1}
                                    materialColor2={materialColor2}
                                    materialColor3={materialColor3}
                                    materialColor4={materialColor4}

                                    materialRoughness1={materialRoughness1}
                                    materialRoughness2={materialRoughness2}
                                    materialRoughness3={materialRoughness3}
                                    materialRoughness4={materialRoughness4}
                                    
                                    mesh1Visibility={mesh1Toggle}
                                    mesh2Visibility={mesh2Toggle}
                                    mesh3Visibility={mesh3Toggle}
                                    mesh4Visibility={mesh4Toggle}

                                    toggleTexture1={toggleTexture1}
                                    toggleTexture2={toggleTexture2}
                                    toggleTexture3={toggleTexture3}
                                    toggleTexture4={toggleTexture4}

                                    toggleMesh1Visibility={toggleMesh1Visibility}
                                    toggleMesh2Visibility={toggleMesh2Visibility}
                                    toggleMesh3Visibility={toggleMesh3Visibility}
                                    toggleMesh4Visibility={toggleMesh4Visibility}

                                    material1Metalness={material1Metalness}
                                    material2Metalness={material2Metalness}
                                    material3Metalness={material3Metalness}
                                    material4Metalness={material4Metalness}
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

                        {/* ambientLightIntensity
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="10" 
                            value={ambientLightIntensity} 
                            onChange={(e) => setAmbientLightIntensity(e.target.value)}
                            step=".1"
                        /><br />

                        ambientLightColor
                        <HexColorPicker color={ambientLightColor} onChange={setAmbientLightColor} /> */}
                        
                        <button
                            onClick={() => 
                            setToggleMesh1Visibility(!toggleMesh1Visibility)}>
                            Mesh 1 Visibility
                        </button><br />
                        <button
                            onClick={() => 
                            setToggleTexture1(!toggleTexture1)}>
                            Texture 1 Toggle
                        </button><br />
                        materialColor1
                        <HexColorPicker color={materialColor1} onChange={setMaterialColor1} />
                        maetrialRoughness1
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="1" 
                            value={materialRoughness1}
                            onChange={(e) => setMaterialRoughness1(e.target.value)}
                            step=".01"
                        /><br />
                        material1Metalness
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="1" 
                            value={material1Metalness}
                            onChange={(e) => setMaterial1Metalness(e.target.value)}
                            step=".01"
                        /><br />






                        <button
                            onClick={() => 
                            setToggleMesh2Visibility(!toggleMesh2Visibility)}>
                            Mesh 2 Visibility
                        </button><br />
                        <button
                            onClick={() => 
                            setToggleTexture2(!toggleTexture2)}>
                            Texture 2 Toggle
                        </button><br />
                        materialColor2
                        <HexColorPicker color={materialColor2} onChange={setMaterialColor2} />
                        maetrialRoughness2
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="1" 
                            value={materialRoughness2}
                            onChange={(e) => setMaterialRoughness2(e.target.value)}
                            step=".1"
                        /><br />
                        material2Metalness
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="1" 
                            value={material2Metalness}
                            onChange={(e) => setMaterial2Metalness(e.target.value)}
                            step=".01"
                        /><br />





                        <button
                            onClick={() => 
                            setToggleMesh3Visibility(!toggleMesh3Visibility)}>
                            Mesh 3 Visibility
                        </button><br />
                        <button
                            onClick={() => 
                            setToggleTexture3(!toggleTexture3)}>
                            Texture 3 Toggle
                        </button><br />
                        materialColor3
                        <HexColorPicker color={materialColor3} onChange={setMaterialColor3} />
                        maetrialRoughness3
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="1" 
                            value={materialRoughness3}
                            onChange={(e) => setMaterialRoughness3(e.target.value)}
                            step=".1"
                        /><br />
                        material3Metalness
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="1" 
                            value={material3Metalness}
                            onChange={(e) => setMaterial3Metalness(e.target.value)}
                            step=".01"
                        /><br />





                        <button
                            onClick={() => 
                            setToggleMesh4Visibility(!toggleMesh4Visibility)}>
                            Mesh 4 Visibility
                        </button><br />
                        <button
                            onClick={() => 
                            setToggleTexture4(!toggleTexture4)}>
                            Texture 4 Toggle
                        </button><br />
                        materialColor4
                        <HexColorPicker color={materialColor4} onChange={setMaterialColor4} />
                        maetrialRoughness4
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="1" 
                            value={materialRoughness4}
                            onChange={(e) => setMaterialRoughness4(e.target.value)}
                            step=".1"
                        /><br />
                        material4Metalness
                        <input 
                            id="typeinp" 
                            type="range" 
                            min="0" max="1" 
                            value={material4Metalness}
                            onChange={(e) => setMaterial4Metalness(e.target.value)}
                            step=".01"
                        /><br />
                    </div>
                </div>
            </div>

        </div>
    )
}
