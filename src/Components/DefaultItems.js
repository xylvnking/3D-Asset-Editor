import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { productCard, productCards, productCardTitle, productCardDescription, productCardsContainer } from './DefaultItems.module.css'
import ProductCard from './ProductCard'

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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
      </div>
    </div>
  )
}
