import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { productCard, productCards, productCardTitle, productCardDescription } from './DefaultItems.module.css'


export default function ProductCard() {
  return (

        <div className={productCard}>
            <h1 className={productCardTitle}>cyberWear Ring 1</h1>
            <StaticImage 
                src="../images/Ring1.jpg"
                alt="A cyberpunk ring"
                placeholder="blurred"
            />
            <p className={productCardDescription}>Cronut affogato hella heirloom snackwave seitan thundercats chicharrones salvia offal forage church-key. Coloring book DSA jianbing green juice brunch street art four loko.</p>
        </div>

  )
}
