// Copyright (c) Meta Platforms, Inc. and affiliates.
// All rights reserved.
/*




*/




// This source code is licensed under the license found in the
// LICENSE file in the root directory of this source tree.

import * as InPutname from './Name.js'
import React, { useContext, useEffect, useRef, useState } from "react";
import AppContext from "./hooks/createContext";
import { ToolProps } from "./helpers/Interfaces";
import * as _ from "underscore";
import axios from "axios";
const Tool = ({ handleMouseMove }: ToolProps) => {
  const canvas_Ref= useRef(null)
  const {
    image: [image],
    maskImg: [maskImg, setMaskImg],
    btn_click:[btn_click,set_btn_click],
    click_position:[click_position,setclick_position]
  } = useContext(AppContext)!;
  const [loading, setLoading] = useState(false);
 


  const IMAGE_LIST=[
    "./assets/data/01.png",
    "./assets/data/02.png",
    "./assets/data/03.png",
    "./assets/data/04.png"
  ]

  const title_name=[
    'Farm', 'Safari'
  ]
  
    

 const mask_ref= useRef<any>(null);
 const image_ref= useRef<any>(null)
  // Determine if we should shrink or grow the images to match the
  // width or the height of the page and setup a ResizeObserver to
  // monitor changes in the size of the page
  const [shouldFitToWidth, setShouldFitToWidth] = useState(true);
  const bodyEl = document.body;

  const isFetching = useRef(false);

  const fitToPage = () => {
    if (!image) return;
    const imageAspectRatio = image.width / image.height;
    const screenAspectRatio = window.innerWidth / window.innerHeight;
    setShouldFitToWidth(imageAspectRatio > screenAspectRatio);
  };
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === bodyEl) {
        fitToPage();
      }
    }
  });
 
  useEffect(() => {
    fitToPage();
    
    resizeObserver.observe(bodyEl);
    return () => {
      resizeObserver.unobserve(bodyEl);
    };
  }, [image]);



//apiu 


  

  useEffect(()=>{
   
    if (!isFetching.current) {
      return; // 이미 API 호출 중이면 함수를 종료합니다.
    } 
   
    const canvas = document.getElementById("canvas");

    {/* 
// @ts-ignore */}
    const ctx = canvas.getContext("2d");
{/* 
// @ts-ignore */}
ctx.globalCompositeOperation = "source-over";

{/* 
// @ts-ignore */}
//;

if(image!= null && maskImg){
  if(canvas_Ref.current){
    {/* 
  // @ts-ignore */}
  
  canvas_Ref.current.width = 450;
  {/* 
  // @ts-ignore */}
  canvas_Ref.current.height  = 350;
  // 서버로부터 OCR 결과를 받아옴
  }
 // context.drawImage(image.src, 0, 0, 500, 500)
 const image = document.getElementById("source");
 const image2 = document.getElementById("source2");

 {/* 
// @ts-ignore */}

 ctx?.drawImage(image, 0, 0,450,350);
 ctx?.drawImage(image2, 0, 0,450,350);

 function trimCanvas(canvas:any){
  const context = canvas.getContext('2d');

  const topLeft = {
      x: canvas.width,
      y: canvas.height,
      update(x:any,y:any){
          this.x = Math.min(this.x,x);
          this.y = Math.min(this.y,y);
      }
  };

  const bottomRight = {
      x: 0,
      y: 0,
      update(x:any,y:any){
          this.x = Math.max(this.x,x);
          this.y = Math.max(this.y,y);
      }
  };

  const imageData = context.getImageData(0,0,canvas.width,canvas.height);

  for(let x = 0; x < canvas.width; x++){
      for(let y = 0; y < canvas.height; y++){
       var index = (y * canvas.width + x) * 4;
       
          if(imageData.data[index] != 0 && imageData.data[index+1] != 0 && imageData.data[index+2] != 0){
              topLeft.update(x,y);
              bottomRight.update(x,y);
         
          }
      }
  }
   
  const width = bottomRight.x - topLeft.x;
  const height = bottomRight.y - topLeft.y;


  const croppedCanvas = context.getImageData(topLeft.x,topLeft.y,width,height);
  if(canvas_Ref.current){

     {/* 
// @ts-ignore */}
    canvas_Ref.current.width = width;
        {/* 
// @ts-ignore */}
    canvas_Ref.current.height  = height;


     context.putImageData(croppedCanvas,0,0);

  }
  
}

trimCanvas(canvas)




 try{
  {/* 
 // @ts-ignore */}
 
 canvas?.toBlob(async (blob:any) => {
 //blip2 api 호출하는 코드( image caption api )
 setLoading(true);
   const response = await axios.post('/test', blob, {
       headers: {
           Accept: 'application/json',
           Authorization: `Bearer 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`,
           'Content-Type': blob.type
       },
   });
   isFetching.current = false; 
   setLoading(false)
 const generate_text_output=response.data[0]['generated_text'];

 //const formData = new FormData();
 //formData.append("file",IMAGE_LIST[btn_click]);
 /*
 const response2 = await axios.post('/server', {
  "message": generate_text_output,
  "image_path":(btn_click+1).toString()
 },{
  headers: {
    'Content-Type': 'application/json'
  },
  //이미지 경로로 하는거 되나 나중에 확인하고 우선은 그냥 이미지 넣는걸로 할까?
});
*/


 //const response2_music= response2.data.INCLUDED[0] as any
 //console.log(response2_music)
  {/* 
 // @ts-ignore */}
 var animal_name=InPutname.Animal_name_isTure(generate_text_output)
 console.log(animal_name)
 
 if(animal_name[0]==1){
  const audioo_src= (new Audio(`https://www.google.com/logos/fnbx/animal_sounds/${animal_name[1]}.mp3`));
  audioo_src.play()
 }
 else if(animal_name[0]==2){
  const audioo_src= (new Audio(`./assets/data/sound/${animal_name[1]}.mp3`));
  audioo_src.play()
 }
 else{
  const audioo_src= (new Audio(`./assets/data/sound/${Math.floor(Math.random() * 3)}.mp3`))
  audioo_src.play()
 }


 }, 'image/jpeg');
 



 }
 catch(err){
   console.log(err,'에러')
 }


}









  },[maskImg])


 
  const imageClasses = "brightness-100 ";
  const maskImageClasses = `
  brightness-100
  left-0
  top-[50%]
  -translate-y-1/2
  w-[85%]
  absolute opacity-40 pointer-events-none`;

  // Render the image and the predicted mask image on top
  return (
    <>
    <div className="
    w-[100%]
    bg-indigo-300
    flex
    flex-row
    relative
    ">
      <div className='
    w-[30%]
      h-[15%]
      bg-white
      absolute
      z-10
      top-5
      left-5
      p-5
      flex
      flex-col
      
      justify-between
      '>
        <div className='
        flex
        '>
            <p className='
             font-bold 
             text-2xl
            '> {title_name[btn_click]}</p>
            <img 
            onClick={()=>{

               const TTS=  new Audio(`./assets/data/sound/TTS/0${btn_click}.mp3`);
               TTS.play()
            }}
            className='
            w-[5%]
            ml-5
            '
            src="./assets/icon/speak.svg">
            </img>
        </div>
        <div>
          <p className='
          
          text-sm'>
Can you find these 10 {title_name[btn_click]} animals in  the picture?</p>
<p>what sounds do they make</p>

        </div>
      
        <p></p>
      </div>
    {
      loading && (
        <img
        src={'../assets/data/tube-spinner.svg'}
         style={{
          top: click_position ?click_position[1]-50: 0,
          left: click_position? click_position[0]-50:0
         }}
        className='
        absolute
        w-[10%]
        h-[10%]
                z-10
        '> 
        
     </img>
      )
    }
    {image && (
        <img
        ref={image_ref}
        id="source" 
          onClick={(e)=>{
      
            //false 일때만 실행
            if(!isFetching.current){
              isFetching.current=true;

              handleMouseMove(e)
            }
            }}
         // onMouseOut={() => _.defer(() => {setMaskImg(null)
        //  })}
          onTouchStart={handleMouseMove}
          src={image.src}
          className={`${
            shouldFitToWidth ? "w-[95%]" : "h-full"
          } ${imageClasses}`}
        ></img>
      ) }
      {maskImg && (
        <img
        ref={mask_ref}
        id="source2" 

          src={maskImg.src}
          className={`${
            shouldFitToWidth ? "w-[95%]" : "h-full"
          } ${maskImageClasses}`}
     
        ></img>

      )
      }
      <canvas
      className='hidden'
       style={{
        position:'absolute',
        top:'10'
       }}
      width={450}
      height={350}
      ref={canvas_Ref}
      id="canvas"></canvas>
     <div className="
     w-[5%]
     h-auto
     bg-neutral-600
     flex
     flex-col
     justify-evenly 
     items-center
     ">
    <button 
    onClick={()=>{set_btn_click(0)
      _.defer(() => {setMaskImg(null)  })
   
    }}
    className=" w-[60%]
      h-[6%]
      rounded-full
      bg-red-500
      "></button>
      <button 
          onClick={()=>{set_btn_click(1)
            _.defer(() => {setMaskImg(null)  })

          }}
      className=" w-[59%]
      h-[6%]
      rounded-full
      bg-yellow-300">
     
      </button>
      
     
   
     </div>
    </div>

  
         
    </>
    
  );
};

export default Tool;
