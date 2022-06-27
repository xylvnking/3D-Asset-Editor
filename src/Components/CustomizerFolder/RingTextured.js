/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function RingTextured({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/RingTextured.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Details001.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Extra_Rings001.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Main001.geometry} material={materials.Material} />
      {/* <mesh geometry={nodes.Spike_Ring_Twist001.geometry} material={materials['Material.003']} /> */}
      
      <mesh geometry={nodes.Spike_Ring_Twist001.geometry}>
        <meshPhysicalMaterial 
        color="blue"
        roughness={.1}
        metalness={1} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/RingTextured.glb')
