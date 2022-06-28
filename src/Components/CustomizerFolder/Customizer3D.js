
import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { 
    customizerCanvas, 
    customizerMain, 
    customizerContainer, 
    customizerFlex, 
    customizerControls, 
    rotationResetButton, 
    range, 
    uiRotation,
    uiGlobalControls,
    uiMeshControls,
    uiPremadeTextureSelectors,
    uiPremadeTextureButton
        } from './Customizer.module.css'
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
    const [ambientLightIntensity, setAmbientLightIntensity] = useState(3)
    const [ambientLightColor, setAmbientLightColor] = useState("#ffffff")


    const [gridToggle, setGridToggle] = useState(false)

    const [mesh1Toggle, setMesh1Toggle] = useState(true)
    const [mesh2Toggle, setMesh2Toggle] = useState(true)
    const [mesh3Toggle, setMesh3Toggle] = useState(true)
    const [mesh4Toggle, setMesh4Toggle] = useState(true)

    
    const [materialColor1, setMaterialColor1] = useState("#27a1e3")
    const [materialColor2, setMaterialColor2] = useState("#27a1e3")
    const [materialColor3, setMaterialColor3] = useState("#ffffff")
    const [materialColor4, setMaterialColor4] = useState("#27a1e3")

    const [materialRoughness1, setMaterialRoughness1] = useState(0)
    const [materialRoughness2, setMaterialRoughness2] = useState(0)
    const [materialRoughness3, setMaterialRoughness3] = useState(.4)
    const [materialRoughness4, setMaterialRoughness4] = useState(0)
    
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

    const visible = "VISIBLE"
    const hidden = "HIDDEN"
    

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
                            
                            <mesh 
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
                                
                                {/* <boxGeometry 
                                args={[5, 5, 5]} //SETS SIZE
                                />
                                <meshStandardMaterial 
                                    color={objectColor}
                                    roughness={roughness}
                                    metalness={metalness}
                                /> */}

                            </mesh>
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
                        <div className={uiRotation}>
                            <label>
                                X
                            </label>
                            <input 
                                id="typeinp" 
                                type="range" 
                                min="0" max="11" 
                                value={xRotation} // sets the slider to the default (0) on load
                                onChange={(e) => setXRotation(e.target.value)}
                                step=".01" // smaller = smoother
                                className={range}
                            />
                            <button
                                className={rotationResetButton}
                                onClick={() => 
                                setXRotation(0)}>
                                reset
                            </button><br />
                        </div>
                        <div className={uiRotation}>
                            Y
                            <input 
                                className={range}
                                id="typeinp" 
                                type="range" 
                                min="0" max="11" 
                                value={yRotation}
                                onChange={(e) => setYRotation(e.target.value)}
                                step=".01"
                            />
                            <button
                                className={rotationResetButton}
                                onClick={() => 
                                setYRotation(0)}>
                                reset
                            </button><br />
                        </div>
                        <div className={uiRotation}>
                            Z
                            <input 
                                className={range}
                                id="typeinp" 
                                type="range" 
                                min="0" max="11" 
                                value={zRotation}
                                onChange={(e) => setZRotation(e.target.value)}
                                step=".01"
                            />
                            <button
                                className={rotationResetButton}
                                onClick={() => 
                                setZRotation(0)}>
                                reset
                            </button><br />
                        </div>

                        
                        <div className={uiMeshControls}>
                            <div className={uiPremadeTextureSelectors}>  
                                <button
                                    className={uiPremadeTextureButton}
                                    onClick={() => 
                                    setToggleTexture1(!toggleTexture1)}>
                                    Texture 1
                                </button>
                                <button
                                    className={uiPremadeTextureButton}
                                    onClick={() => 
                                    setToggleTexture1(!toggleTexture1)}>
                                    Texture 2
                                </button>
                                <button
                                    className={uiPremadeTextureButton}
                                    onClick={() => 
                                    setToggleTexture1(!toggleTexture1)}>
                                    Texture 3
                                </button>
                                <button
                                    className={uiPremadeTextureButton}
                                    onClick={() => 
                                    setToggleTexture1(!toggleTexture1)}>
                                    Texture 4
                                </button>
                            </div>
                            
                            
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
                                className={rotationResetButton}
                                onClick={() => 
                                setToggleMesh1Visibility(!toggleMesh1Visibility)}>
                                    {toggleMesh1Visibility ? <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 31.35q3.5 0 5.925-2.45T32.35 23q0-3.5-2.45-5.925T24 14.65q-3.5 0-5.925 2.45T15.65 23q0 3.5 2.45 5.925T24 31.35Zm0-3.55q-2 0-3.4-1.425T19.2 23q0-2 1.425-3.4T24 18.2q2 0 3.4 1.425T28.8 23q0 2-1.425 3.4T24 27.8ZM24 39q-7.55 0-13.725-4.45T1.05 23q3.05-7.1 9.225-11.55Q16.45 7 24 7t13.725 4.45Q43.9 15.9 46.95 23q-3.05 7.1-9.225 11.55Q31.55 39 24 39Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m40.3 45-7.65-7.55q-1.75.7-3.975 1.125Q26.45 39 24 39q-7.4 0-13.65-4.2T1.05 23q.85-2.6 2.75-5.175 1.9-2.575 4.35-4.975L2 6.85l2.4-2.5L42.55 42.5ZM24 31.35q.6 0 1.225-.15.625-.15 1.025-.3L16 20.75q-.1.5-.225 1.1-.125.6-.125 1.15 0 3.55 2.45 5.95 2.45 2.4 5.9 2.4Zm15 2.4-7.45-7.45q.4-.6.6-1.55.2-.95.2-1.75 0-3.5-2.425-5.925T24 14.65q-.85 0-1.65.175-.8.175-1.65.575l-6.4-6.45q1.7-.7 4.525-1.325T24.25 7q7.2 0 13.425 4.2Q43.9 15.4 46.95 23q-1.2 3.3-3.3 6-2.1 2.7-4.65 4.75ZM27.8 22.5l-3.65-3.6q.6-.4 1.475-.325.875.075 1.575.575.65.65.875 1.425.225.775-.275 1.925Z"/></svg>}
                                
                            </button><br />
                        </div>






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
                        <div className={uiGlobalControls}>
                            <button
                                onClick={() => 
                                setGridToggle(!gridToggle)}>
                                Grid Toggle
                            </button>

                            Ambient Light Intensity
                            <input 
                                id="typeinp" 
                                type="range" 
                                min="0" max="20" 
                                value={ambientLightIntensity} 
                                onChange={(e) => setAmbientLightIntensity(e.target.value)}
                                step=".1"
                            /><br />

                            Ambient Light Color
                            <HexColorPicker color={ambientLightColor} onChange={setAmbientLightColor} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
