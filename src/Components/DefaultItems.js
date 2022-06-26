import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { productCard, productCards, productCardTitle, productCardDescription, productCardsContainer } from './DefaultItems.module.css'
import ProductCard from './ProductCard'

// I'd like it if the 3D sections rotated slowly. I had more important things to work on than getting the clamp to work though.

export default function DefaultItems() {
  return (
    // <div className={productCards}> 

    //     <div className={productCard}>
    //         <h1 className={productCardTitle}>cyberWear Ring 1</h1>
    //         <StaticImage 
    //             src="../images/Ring1.jpg"
    //             alt="A cyberpunk ring"
    //             placeholder="blurred"
    //         />
    //         <p className={productCardDescription}>Cronut affogato hella heirloom snackwave seitan thundercats chicharrones salvia offal forage church-key. Coloring book DSA jianbing green juice brunch street art four loko.</p>
    //     </div>
    // </div>
    <div className={productCardsContainer}>

      <div className={productCards}>
          <ProductCard rotationNumber2={(Math.random() * Math.random()) * .02}/>
          <ProductCard rotationNumber2={(Math.random() * Math.random()) * .02}/>
          <ProductCard rotationNumber2={(Math.random() * Math.random()) * .02}/>
          <ProductCard rotationNumber2={(Math.random() * Math.random()) * .02}/>
          <ProductCard rotationNumber2={(Math.random() * Math.random()) * .02}/>
          <ProductCard rotationNumber2={(Math.random() * Math.random()) * .02}/>


          
          
          
      
          
      </div>
    </div>
  )
}
