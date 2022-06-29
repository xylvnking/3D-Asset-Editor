
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
    uiMeshSelectors,
    uiMeshSelector,
    uiMaterialControls,
    uiHexColorPicker,
    uiMaterialPropertyControls,
    uiVisibilityIcon,
    uiMeshSelectorPressed,
    hide
    
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

    const [wireframeToggle1, setWireFrameToggle1] = useState(false)
    const [wireframeToggle2, setWireFrameToggle2] = useState(false)
    const [wireframeToggle3, setWireFrameToggle3] = useState(false)
    const [wireframeToggle4, setWireFrameToggle4] = useState(false)

    const [toggleMesh1Controls, setToggleMesh1Controls] = useState(true)
    const [toggleMesh2Controls, setToggleMesh2Controls] = useState(true)
    const [toggleMesh3Controls, setToggleMesh3Controls] = useState(true)
    const [toggleMesh4Controls, setToggleMesh4Controls] = useState(true)

    // const visible = "VISIBLE"
    // const hidden = "HIDDEN"

    
    

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

                                    wireframeToggle1={wireframeToggle1}
                                    wireframeToggle2={wireframeToggle2}
                                    wireframeToggle3={wireframeToggle3}
                                    wireframeToggle4={wireframeToggle3}
                                    />
                                
                                {/* <Stars radius={5} depth={50} count={5000} factor={4} saturation={0} fade speed={1} /> */}
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
                            <div 
                            // className={uiPremadeTextureSelectors}
                            className={uiMeshSelectors}
                            >  
                                <button
                                    // className={toggleMesh1Controls ? uiPremadeTextureButton : uiPremadeTextureButtonPressed}
                                    className={toggleMesh1Controls ? uiMeshSelectorPressed : uiMeshSelector}
                                    style={{backgroundColor: materialColor1}}
                                    // className={uiMeshSelector}
                                    onClick={() => 
                                    setToggleMesh1Controls(!toggleMesh1Controls)}>
                                    Mesh 1
                                </button>
                                <button
                                    className={toggleMesh2Controls ? uiMeshSelectorPressed : uiMeshSelector}
                                    style={{backgroundColor: materialColor2}}

                                    onClick={() => 
                                    setToggleMesh2Controls(!toggleMesh2Controls)}>
                                    Mesh 2
                                </button>
                                <button
                                    className={toggleTexture3 ? uiMeshSelector : uiMeshSelectorPressed}
                                    onClick={() => 
                                    setToggleTexture3(!toggleTexture3)}>
                                    Texture 3
                                </button>
                                <button
                                    className={toggleTexture4 ? uiMeshSelector : uiMeshSelectorPressed}
                                    onClick={() => 
                                    setToggleTexture4(!toggleTexture4)}>
                                    Texture 4
                                </button>
                                
                            </div>

                            {/* MESH 1 CONTROLS */}

                            <div 
                            className={toggleMesh1Controls ? uiMaterialControls : hide}
                            style={{borderColor: materialColor1}}>
                                <HexColorPicker 
                                    color={materialColor1} 
                                    onChange={setMaterialColor1} 
                                    className={uiHexColorPicker}
                                    onMouseDown={() => setToggleTexture1(true)}
                                    
                                    />

                                <div className={toggleMesh1Controls ? uiMaterialPropertyControls : hide}>
                                    roughness
                                    <input 
                                        className={range}
                                        id="typeinp" 
                                        type="range" 
                                        min="0" max="1" 
                                        value={materialRoughness1}
                                        onChange={(e) => setMaterialRoughness1(e.target.value)}
                                        step=".01"
                                    /><br />
                                    metalness
                                    <input 
                                        className={range}
                                        id="typeinp" 
                                        type="range" 
                                        min="0" max="1" 
                                        value={material1Metalness}
                                        onChange={(e) => setMaterial1Metalness(e.target.value)}
                                        step=".01"
                                    /><br />
                                    
                                    <div className={uiVisibilityIcon}>
                                        <button 
                                            // type="checkbox" 
                                            className={rotationResetButton}
                                            // value={wireframeToggle1}
                                            id="wireframeToggle"
                                            style={{padding: "0px", paddingRight: "15px", marginTop: ".5rem"}}
                                            // onClick={() => 
                                            //     toggleWireframeAlsoTextureOff()}
                                            onClick={() => 
                                                setWireFrameToggle1(!wireframeToggle1)}
                                                >
                                                {wireframeToggle1 ? <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M23.95 45.05q-4.3 0-8.15-1.675-3.85-1.675-6.675-4.525Q6.3 36 4.625 32.175 2.95 28.35 2.95 24q0-4.3 1.675-8.15Q6.3 12 9.125 9.15T15.8 4.6q3.85-1.7 8.15-1.7 4.35 0 8.225 1.7t6.7 4.55Q41.7 12 43.4 15.85q1.7 3.85 1.7 8.15 0 4.35-1.7 8.175Q41.7 36 38.875 38.85q-2.825 2.85-6.7 4.525Q28.3 45.05 23.95 45.05Zm9.95-25.3 3.45-1.2.85-3.2q-1.65-2.55-4.1-4.4-2.45-1.85-5.5-2.8l-3.25 2.15v3.45Zm-19.75 0 8.55-6V10.3l-3.25-2.15q-3.05.95-5.475 2.8-2.425 1.85-4.125 4.4l1.1 3.2ZM11.5 35.2l3-.35 1.95-3.25-3-9.25-3.55-1.2-2.4 1.95q0 3.5.8 6.375t3.2 5.725ZM24 40.65q1.3 0 2.625-.275T29.5 39.8l1.6-3.6-1.65-2.75H18.6L17 36.2l1.65 3.6q1.25.3 2.65.575 1.4.275 2.7.275Zm-5.2-9.95H29l2.95-8.9L24 16.05l-8.1 5.75Zm17.75 4.5q2.35-2.85 3.15-5.725.8-2.875.8-6.375l-2.35-1.65-3.55.9-2.95 9.25 1.85 3.25Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 45.05q-4.35 0-8.2-1.625-3.85-1.625-6.725-4.5Q6.2 36.05 4.575 32.2 2.95 28.35 2.95 24t1.625-8.2q1.625-3.85 4.5-6.725Q11.95 6.2 15.8 4.55q3.85-1.65 8.15-1.65 4.4 0 8.275 1.65t6.725 4.525q2.85 2.875 4.5 6.725 1.65 3.85 1.65 8.25 0 4.3-1.65 8.15-1.65 3.85-4.525 6.725-2.875 2.875-6.725 4.5-3.85 1.625-8.2 1.625Z"/></svg>}
                                        </button>
                                        <button
                                            className={rotationResetButton}
                                            style={{padding: "0px", paddingRight: "15px", marginTop: ".5rem"}}
                                            onClick={() => 
                                            setToggleMesh1Visibility(!toggleMesh1Visibility)}>
                                                {toggleMesh1Visibility ? <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 31.35q3.5 0 5.925-2.45T32.35 23q0-3.5-2.45-5.925T24 14.65q-3.5 0-5.925 2.45T15.65 23q0 3.5 2.45 5.925T24 31.35Zm0-3.55q-2 0-3.4-1.425T19.2 23q0-2 1.425-3.4T24 18.2q2 0 3.4 1.425T28.8 23q0 2-1.425 3.4T24 27.8ZM24 39q-7.55 0-13.725-4.45T1.05 23q3.05-7.1 9.225-11.55Q16.45 7 24 7t13.725 4.45Q43.9 15.9 46.95 23q-3.05 7.1-9.225 11.55Q31.55 39 24 39Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m40.3 45-7.65-7.55q-1.75.7-3.975 1.125Q26.45 39 24 39q-7.4 0-13.65-4.2T1.05 23q.85-2.6 2.75-5.175 1.9-2.575 4.35-4.975L2 6.85l2.4-2.5L42.55 42.5ZM24 31.35q.6 0 1.225-.15.625-.15 1.025-.3L16 20.75q-.1.5-.225 1.1-.125.6-.125 1.15 0 3.55 2.45 5.95 2.45 2.4 5.9 2.4Zm15 2.4-7.45-7.45q.4-.6.6-1.55.2-.95.2-1.75 0-3.5-2.425-5.925T24 14.65q-.85 0-1.65.175-.8.175-1.65.575l-6.4-6.45q1.7-.7 4.525-1.325T24.25 7q7.2 0 13.425 4.2Q43.9 15.4 46.95 23q-1.2 3.3-3.3 6-2.1 2.7-4.65 4.75ZM27.8 22.5l-3.65-3.6q.6-.4 1.475-.325.875.075 1.575.575.65.65.875 1.425.225.775-.275 1.925Z"/></svg>}
                                            
                                        </button>
                                        <button
                                            className={rotationResetButton}
                                            style={{padding: "0px", marginTop: ".5rem"}}
                                            onClick={() => 
                                            setToggleTexture1(!toggleTexture1)}>
                                            {/* // toggleTextureAlsoWireframeOff()} */}
                                            
                                                {toggleTexture1 ? <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m38.55 17.25-2.5-5.65L30.2 9l5.85-2.5 2.5-5.4 2.35 5.4L46.75 9l-5.85 2.6Zm0 29.55-2.5-5.4-5.85-2.55 5.85-2.5 2.5-5.75 2.35 5.75 5.85 2.5-5.85 2.55ZM16.9 39.3l-4.95-10.5L1.2 23.95l10.75-4.85L16.9 8.6l4.95 10.5 10.65 4.85-10.65 4.85Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M8.4 42.95q-1.45-.4-2.1-1.175Q5.65 41 5.2 39.6L39.65 5.1q1.15.3 2.05 1.2.9.9 1.15 2.1ZM4.95 30.3v-6.6L23.7 4.9h6.6Zm0-16.1V9.5q0-1.85 1.35-3.225T9.5 4.9h4.7ZM33.8 43.05l9.3-9.25v4.7q0 1.85-1.375 3.2T38.5 43.05Zm-16.1 0L43.1 17.7v6.6L24.3 43.05Z"/></svg>}
                                            {/* Texture 1 */}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* MESH 2 CONTROLS */}

                            <div 
                            className={toggleMesh2Controls ? uiMaterialControls : hide}
                            style={{borderColor: materialColor2}}>
                                <HexColorPicker 
                                    color={materialColor2} 
                                    onChange={setMaterialColor2} 
                                    className={uiHexColorPicker}
                                    onMouseDown={() => setToggleTexture2(true)}
                                    
                                    />

                                <div className={toggleMesh2Controls ? uiMaterialPropertyControls : hide}>
                                    roughness
                                    <input 
                                        className={range}
                                        id="typeinp" 
                                        type="range" 
                                        min="0" max="1" 
                                        value={materialRoughness2}
                                        onChange={(e) => setMaterialRoughness2(e.target.value)}
                                        step=".01"
                                    /><br />
                                    metalness
                                    <input 
                                        className={range}
                                        id="typeinp" 
                                        type="range" 
                                        min="0" max="1" 
                                        value={material2Metalness}
                                        onChange={(e) => setMaterial2Metalness(e.target.value)}
                                        step=".01"
                                    /><br />
                                    
                                    <div className={uiVisibilityIcon}>
                                        <button 
                                            
                                            className={rotationResetButton}
                                            
                                            id="wireframeToggle"
                                            style={{padding: "0px", paddingRight: "15px", marginTop: ".5rem"}}
                                            
                                            onClick={() => 
                                                setWireFrameToggle2(!wireframeToggle2)}
                                                >
                                                {wireframeToggle2 ? <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M23.95 45.05q-4.3 0-8.15-1.675-3.85-1.675-6.675-4.525Q6.3 36 4.625 32.175 2.95 28.35 2.95 24q0-4.3 1.675-8.15Q6.3 12 9.125 9.15T15.8 4.6q3.85-1.7 8.15-1.7 4.35 0 8.225 1.7t6.7 4.55Q41.7 12 43.4 15.85q1.7 3.85 1.7 8.15 0 4.35-1.7 8.175Q41.7 36 38.875 38.85q-2.825 2.85-6.7 4.525Q28.3 45.05 23.95 45.05Zm9.95-25.3 3.45-1.2.85-3.2q-1.65-2.55-4.1-4.4-2.45-1.85-5.5-2.8l-3.25 2.15v3.45Zm-19.75 0 8.55-6V10.3l-3.25-2.15q-3.05.95-5.475 2.8-2.425 1.85-4.125 4.4l1.1 3.2ZM11.5 35.2l3-.35 1.95-3.25-3-9.25-3.55-1.2-2.4 1.95q0 3.5.8 6.375t3.2 5.725ZM24 40.65q1.3 0 2.625-.275T29.5 39.8l1.6-3.6-1.65-2.75H18.6L17 36.2l1.65 3.6q1.25.3 2.65.575 1.4.275 2.7.275Zm-5.2-9.95H29l2.95-8.9L24 16.05l-8.1 5.75Zm17.75 4.5q2.35-2.85 3.15-5.725.8-2.875.8-6.375l-2.35-1.65-3.55.9-2.95 9.25 1.85 3.25Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 45.05q-4.35 0-8.2-1.625-3.85-1.625-6.725-4.5Q6.2 36.05 4.575 32.2 2.95 28.35 2.95 24t1.625-8.2q1.625-3.85 4.5-6.725Q11.95 6.2 15.8 4.55q3.85-1.65 8.15-1.65 4.4 0 8.275 1.65t6.725 4.525q2.85 2.875 4.5 6.725 1.65 3.85 1.65 8.25 0 4.3-1.65 8.15-1.65 3.85-4.525 6.725-2.875 2.875-6.725 4.5-3.85 1.625-8.2 1.625Z"/></svg>}
                                        </button>
                                        <button
                                            className={rotationResetButton}
                                            style={{padding: "0px", paddingRight: "15px", marginTop: ".5rem"}}
                                            onClick={() => 
                                            setToggleMesh2Visibility(!toggleMesh2Visibility)}>
                                                {toggleMesh2Visibility ? <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 31.35q3.5 0 5.925-2.45T32.35 23q0-3.5-2.45-5.925T24 14.65q-3.5 0-5.925 2.45T15.65 23q0 3.5 2.45 5.925T24 31.35Zm0-3.55q-2 0-3.4-1.425T19.2 23q0-2 1.425-3.4T24 18.2q2 0 3.4 1.425T28.8 23q0 2-1.425 3.4T24 27.8ZM24 39q-7.55 0-13.725-4.45T1.05 23q3.05-7.1 9.225-11.55Q16.45 7 24 7t13.725 4.45Q43.9 15.9 46.95 23q-3.05 7.1-9.225 11.55Q31.55 39 24 39Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m40.3 45-7.65-7.55q-1.75.7-3.975 1.125Q26.45 39 24 39q-7.4 0-13.65-4.2T1.05 23q.85-2.6 2.75-5.175 1.9-2.575 4.35-4.975L2 6.85l2.4-2.5L42.55 42.5ZM24 31.35q.6 0 1.225-.15.625-.15 1.025-.3L16 20.75q-.1.5-.225 1.1-.125.6-.125 1.15 0 3.55 2.45 5.95 2.45 2.4 5.9 2.4Zm15 2.4-7.45-7.45q.4-.6.6-1.55.2-.95.2-1.75 0-3.5-2.425-5.925T24 14.65q-.85 0-1.65.175-.8.175-1.65.575l-6.4-6.45q1.7-.7 4.525-1.325T24.25 7q7.2 0 13.425 4.2Q43.9 15.4 46.95 23q-1.2 3.3-3.3 6-2.1 2.7-4.65 4.75ZM27.8 22.5l-3.65-3.6q.6-.4 1.475-.325.875.075 1.575.575.65.65.875 1.425.225.775-.275 1.925Z"/></svg>}
                                            
                                        </button>
                                        <button
                                            className={rotationResetButton}
                                            style={{padding: "0px", marginTop: ".5rem"}}
                                            onClick={() => 
                                            setToggleTexture2(!toggleTexture2)}>
                                            {/* // toggleTextureAlsoWireframeOff()} */}
                                            
                                                {toggleTexture2 ? <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m38.55 17.25-2.5-5.65L30.2 9l5.85-2.5 2.5-5.4 2.35 5.4L46.75 9l-5.85 2.6Zm0 29.55-2.5-5.4-5.85-2.55 5.85-2.5 2.5-5.75 2.35 5.75 5.85 2.5-5.85 2.55ZM16.9 39.3l-4.95-10.5L1.2 23.95l10.75-4.85L16.9 8.6l4.95 10.5 10.65 4.85-10.65 4.85Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M8.4 42.95q-1.45-.4-2.1-1.175Q5.65 41 5.2 39.6L39.65 5.1q1.15.3 2.05 1.2.9.9 1.15 2.1ZM4.95 30.3v-6.6L23.7 4.9h6.6Zm0-16.1V9.5q0-1.85 1.35-3.225T9.5 4.9h4.7ZM33.8 43.05l9.3-9.25v4.7q0 1.85-1.375 3.2T38.5 43.05Zm-16.1 0L43.1 17.7v6.6L24.3 43.05Z"/></svg>}
                                            {/* Texture 1 */}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* MESH 3 CONTROLS */}

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
