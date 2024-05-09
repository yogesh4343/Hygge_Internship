import React, { useState } from 'react'
import Heading from '../Assests/Heading'
import Toggle from '../Assests/Toggle';
import toggleJson from "../Json/Toggle.json";

const FAQ = () => {
    const [toggle , setToggle] = useState(false);
    // func 

    const toggleFunc = (idx)=>{
        toggleJson.map((curEl,id)=>{
                    if(id == idx){
                        if(toggle == true){
                            setToggle(false);
                        }else{
                            setToggle(true);
                        }
                       
        
                    }
                }) ;
                
    }

  return (
    <div className="my-7">
         <Heading heading="FAQ"  weight="bold" text="32px" topMargin="7" />
         {/* .map  */}

         {toggleJson && toggleJson.map((curEl,idx)=>{
            return (
        <div key={idx} className="toggle mt-7" onClick={()=>toggleFunc(idx)}> <Toggle toggle={toggle} title={curEl.title} desc={curEl.desc} /> </div>
            )
         })}
    </div>
  )
}

export default FAQ
