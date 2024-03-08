

import React from "react"
import vin from './asset/vin.jpg'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
const APP= function(){
  return(<div style={{
    width:'100%',
    height:'100%',
   backgroundImage:`url(${vin})`
  }}>
  
  <div style={{
    width:'100%',
    height:'90%'
  }}>
    <Canvas
        shadows
        camera ={{ 
          rotateZ:20,
          position:[0,0,0]}}
       //orthographic camera={{zoom:100, position:[0,0,3]}}
    >
        <Experience />
    </Canvas>
  </div>
   
   <div style={{
    width:'100%',
    height:'15%',
   
    position:'absolute',
    bottom:'1%',
    display:'flex',
    justifyContent:'center'
   }}> 
   <div style={{
    width:'75%',
  

    borderRadius:'15px'
   }}>

   </div>

    
    </div>
    </div>
  )
}
export default APP