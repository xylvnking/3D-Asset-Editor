/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

//animating model idle
import {useFrame } from "@react-three/fiber"

// I really wanted to use a ternary to switch between materials but I couldn't get it to work.
// I tried swapping between meshes and also between materials on the same mesh and couldn't get either.
// Ended up using a boolean prop to toggle visibility

export default function RingTextured({ ...props }) {
  
  //this animates the model to float around a bit but might be too performance heavy
  // this also disables(overides?) the slider position controls
  useFrame((state) => {
      const t = state.clock.getElapsedTime()
      group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
      group.current.rotation.x = Math.cos(t / 4) / 8
      group.current.rotation.y = Math.sin(t / 4) / 8
      group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    })
    
    
    
    const group = useRef()
    const { nodes, materials } = useGLTF('/RingTextured.glb')
    

  //i need a way to have the texture buttons toggle different textures on the same mesh, not toggle one premade texture for each mesh

  return (
    <group ref={group} {...props} dispose={null}>

      {/* MESH 1 */}
      <mesh 
        geometry={nodes.Details001.geometry} 
        visible={props.toggleTexture1 && props.toggleMesh1Visibility}>
        <meshPhysicalMaterial 
          color={props.materialColor1}
          roughness={props.materialRoughness1}
          metalness={props.material1Metalness}
          wireframe={props.wireframeToggle1}
          />
      </mesh> 
      <mesh 
        geometry={nodes.Details001.geometry} 
        material={materials['Material.001']} 
        
        visible={!props.toggleTexture1 && props.toggleMesh1Visibility}/>
      
      
      {/* MESH 2 */}
      <mesh 
        geometry={nodes.Extra_Rings001.geometry} 
        visible={props.toggleTexture2 && props.toggleMesh2Visibility}>
        <meshPhysicalMaterial 
          color={props.materialColor2}
          roughness={props.materialRoughness2}
          metalness={props.material2Metalness}
          wireframe={props.wireframeToggle2} />
      </mesh>
      <mesh 
        geometry={nodes.Extra_Rings001.geometry} 
        material={materials['Material.002']} 
        visible={!props.toggleTexture2 && props.toggleMesh2Visibility}/>

      {/* MESH 3 */}
      <mesh 
        geometry={nodes.Main001.geometry} 
        visible={props.toggleTexture3 && props.toggleMesh3Visibility}>
        <meshPhysicalMaterial 
          color={props.materialColor3}
          roughness={props.materialRoughness3}
          metalness={props.material3Metalness}
          wireframe={props.wireframeToggle3}
          // flatShading={true} 
          // wireframe={true}
          />
      </mesh>
      <mesh 
        geometry={nodes.Main001.geometry} 
        material={materials.Material} 
        visible={!props.toggleTexture3 && props.toggleMesh3Visibility}/>
      {/* weird that the 'main' one uses material.Material as opposed to materials['Material.00#'] */}
      
      {/* MESH 4 */}
      <mesh 
      geometry={nodes.Spike_Ring_Twist001.geometry}
      visible={props.toggleTexture4 && props.toggleMesh4Visibility}>
      <meshPhysicalMaterial 
        color={props.materialColor4}
        roughness={props.materialRoughness4}
        metalness={props.material4Metalness} 
        wireframe={props.wireframeToggle4}/>
      </mesh>
      <mesh 
        geometry={nodes.Spike_Ring_Twist001.geometry} 
        material={materials['Material.003']} 
        visible={!props.toggleTexture4 && props.toggleMesh4Visibility}/>
    </group>
  )
}

useGLTF.preload('/RingTextured.glb')
