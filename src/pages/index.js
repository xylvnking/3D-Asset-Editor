import * as React from "react"
import Hero from "../Components/Hero"
import '../style.css'
import Nav from "../Components/Nav"
import DefaultItems from "../Components/DefaultItems"
import BrandBuilder from "../Components/BrandBuilder"



const IndexPage = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <DefaultItems />
      <BrandBuilder />
      <footer></footer>
    </main>
    
  )
}

export default IndexPage
