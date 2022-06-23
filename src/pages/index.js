import * as React from "react"
import Hero from "../Components/Hero"
import '../style.css'
import Nav from "../Components/Nav"
import DefaultItems from "../Components/DefaultItems"
import BrandBuilder from "../Components/BrandBuilder"
import Customizer from "../Components/CustomizerFolder/Customizer"



const IndexPage = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <DefaultItems />
      <BrandBuilder />
      <Customizer />
      <footer></footer>
    </main>
    
  )
}

export default IndexPage
