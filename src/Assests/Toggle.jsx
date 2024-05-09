import React, { useState } from 'react';
import toggleJson from "../Json/Toggle.json";

const Toggle = ({func , toggle , title , desc , toggleId , toggleDesc}) => {
    let upArrow = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
</svg>
;

let downArrow = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
<path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
</svg>
;
const [show, setShow] = useState(false);

  return (

    <div className="w-[96%] md:max-w-[990px] rounded-xl border cursor-pointer  text-[#28262C] flex-col justify-between align-center flex px-4 my-3" onClick={()=>setShow(!show)}>
       <div className="top flex justify-between font-[600] text-[14px] md:text-[16px] h-[59px] text-center items-center ">
       <div className="cont  text-left">{title}</div>
        {show == true ? <div className="arrow">{downArrow}</div> : <div className="arrow">{upArrow}</div>}
       </div>

 
        {show == true ?
        <div className="cont p-4 text-justify">
          {desc}
        </div> : null }

     
        
    </div>
  )
}

export default Toggle
