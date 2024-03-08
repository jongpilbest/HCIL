import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useFrame,useLoader } from '@react-three/fiber'
import { Image } from '@react-three/drei'
import { MeshBasicMaterial, TextureLoader } from 'three'
import { useLayoutEffect,useRef } from 'react'
import { useGLTF, Bounds } from '@react-three/drei'; 
import { useTimer } from 'use-timer'
export  function Background(){
  
    const { scene, nodes, materials } = useGLTF('./bottom.glb');
    const colorMap = useLoader(TextureLoader, './asset/backgr.jpg')
   
    const back = useLoader(TextureLoader, './asset/backgr.jpg')
  

    useLayoutEffect(()=>{
        
        Object.assign(materials,{
            map: colorMap
        })
        
    },[scene, nodes,colorMap ])
   
   console.log(scene)

    return(
        <primitive
        rotation-y={ - Math.PI  }
        position-y={10}
        scale={2}
        object={ scene } 
     
 >
 </primitive>
    )
}


export default function Experience()
{
    const { time, start, pause, reset, status } = useTimer();
    const model=useLoader(GLTFLoader, '/WOLF_sHEEP2.glb')
    const colorMap = useLoader(TextureLoader, './asset/groud.jpg')
    const colorMap2 = useLoader(TextureLoader, './asset/back.jpg')

    const back=useLoader(GLTFLoader, '/back.glb')
    console.log(back,'?')
    const ref= useRef(null)
    var fist=1;   
    /*
    useFrame((state, delta) => {
       if(time>2){
         fist= fist==1?-1:1
       }
       console.log(fist)
       
   
  
    
 })
 */



    return <>
 <Bounds fit clip observe margin={1.2}>
   <OrbitControls></OrbitControls>
        <Lights />


        <primitive
      
    
        scale={3}
       
        object={ model.scene } 
 >
 </primitive>

 



       

      

         <mesh>
          

         </mesh>
         </Bounds>
     
    </>
}