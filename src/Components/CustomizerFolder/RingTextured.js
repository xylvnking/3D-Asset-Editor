/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

//animating model idle
import {useFrame } from "@react-three/fiber"


export default function RingTextured({ ...props }) {

  //this animates the model to float around a bit but might be too performance heavy
  // this also disables(overides?) the slider position controls
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime()
  //   group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
  //   group.current.rotation.x = Math.cos(t / 4) / 8
  //   group.current.rotation.y = Math.sin(t / 4) / 8
  //   group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  // })



  const group = useRef()
  const { nodes, materials } = useGLTF('/RingTextured.glb')

  
  const newMaterial = () => { 
    return (
      <meshPhysicalMaterial 
        color={props.materialColor1}
        roughness={props.materialRoughness1}
        metalness={1} />
    )
  }
  return (
    <group ref={group} {...props} dispose={null}>
 
      {/* <mesh geometry={nodes.Details001.geometry} material={materials['Material.001']} visible={props.mesh3Visibility}/> */}
      <mesh 
        geometry={nodes.Details001.geometry}
        visible={props.mesh1Visibility}
        // material={props.textureToggle && materials['Material.001']}
        
      >
        {!props.textureToggle ?
        <meshPhysicalMaterial 
        color={props.materialColor1}
        roughness={props.materialRoughness1}
        metalness={1} /> :
        <meshBasicMaterial
        attach='materials'
        map={materials['Material.001']}

        />
       }
      
      </mesh>
      
      {/* <mesh geometry={nodes.Extra_Rings001.geometry} material={materials['Material.002']} visible={props.mesh2Visibility}/> */}
      <mesh 
      geometry={nodes.Extra_Rings001.geometry}
      visible={props.mesh2Visibility}
      >
        <meshPhysicalMaterial 
        color={props.materialColor2}
        roughness={props.materialRoughness2}
        metalness={1} />
      </mesh>

      {/* <mesh geometry={nodes.Main001.geometry} material={materials.Material} visible={props.mesh1Visibility}/> */}
      <mesh 
      geometry={nodes.Main001.geometry}
      visible={props.mesh3Visibility}
      >
        <meshPhysicalMaterial 
        color={props.materialColor3}
        roughness={props.materialRoughness3}
        metalness={1} />
      </mesh>
      
      {/* <mesh geometry={nodes.Spike_Ring_Twist001.geometry} material={materials['Material.003']} visible={props.mesh4Visibility}/> */}
      <mesh 
      geometry={nodes.Spike_Ring_Twist001.geometry}
      visible={props.mesh4Visibility}
      >
        <meshPhysicalMaterial 
        color={props.materialColor4}
        roughness={props.materialRoughness4}
        metalness={1} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/RingTextured.glb')
