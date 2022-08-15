import * as React from "react"
import '../style.css'
import Customizer3D from "../Components/CustomizerFolder/Customizer3D"
import { Helmet } from 'react-helmet';



const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Three.js Editor</title>
      </Helmet>
      <Customizer3D />
    </main>
    
  )
}

export default IndexPage
