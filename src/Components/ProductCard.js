import React, { useRef, useState, useEffect } from 'react'

import { StaticImage } from 'gatsby-plugin-image'
import { productCard, productCards, productCardTitle, productCardDescription } from './DefaultItems.module.css'

// import { Canvas, useFrame } from "react-three-fiber";
import { Canvas, useFrame, useThree } from '@react-three/fiber'





export default function ProductCard(props) {
  const Box = () => {
    const boxRef = useRef();
  
    useFrame(() => {
      // boxRef.current.rotation.y += 0.01;
      boxRef.current.rotation.y += (props.rotationNumber2)
      boxRef.current.rotation.x += (props.rotationNumber2)
      boxRef.current.rotation.z += (props.rotationNumber2)
    });
  
    console.log(props.rotationNumber2)
  
    return (
      <mesh ref={boxRef} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <torusBufferGeometry args={[2, .5, 5, 30]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    );
  };
  return (

        <div className={productCard}>
            <h1 className={productCardTitle}>cyberWear Ring 1</h1>
            {/* <StaticImage 
                src="../images/Ring1.jpg"
                alt="A cyberpunk ring"
                placeholder="blurred"
            /> */}

            <Canvas style={{ height: 400, width: 400 }}>
              <pointLight position={[5, 5, 5]} />
              <Box />
            </Canvas>

            <p className={productCardDescription}>Cronut affogato hella heirloom snackwave seitan thundercats chicharrones salvia offal forage church-key. Coloring book DSA jianbing green juice brunch street art four loko.</p>
        </div>

  )
}
