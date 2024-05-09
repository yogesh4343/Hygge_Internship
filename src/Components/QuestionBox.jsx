import React, { useState } from 'react';
import ArrowButton from '../Assests/ArrowButton';
import Ques from "../Json/Ques.json";

const QuestionBox = () => {
    let bulb = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 md:w-9 md:h-9">
    <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
    <path fill-rule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clip-rule="evenodd" />
  </svg>

let speaker = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 md:w-9 md:h-9">
<path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
<path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
</svg>

let reload = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 md:w-9 md:h-9">
<path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clip-rule="evenodd" />
</svg>

let leftArrow = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-9 md:h-9">
<path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
</svg>

let rightArrow =<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-9 md:h-9">
<path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
</svg>

let zoom = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-9 md:h-9">
<path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
</svg>
;

console.log(Ques)

// useState 
const [newZoom , setNewZoom] = useState(false);
let [count , setCount] = useState(0);
const [quesState , setQuesState] = useState("9 + 6 + 7x - 2x - 3");

// func 
const zoomFunc = ()=>{
  if(newZoom == true){
    setNewZoom(false);
  }else{
    setNewZoom(true);
  }
}

const add=()=>{
  if(count <= 10){
    setCount(count+1)

    Ques.map((curEl,ix)=>{
      if(curEl.id == count){
        setQuesState(curEl.ques);
      }
    });
  }
}

const sub = ()=>{
  if(count>0){
    setCount(count-1);
  }
  Ques.map((curEl,ix)=>{
    if(curEl.id == count){
      setQuesState(curEl.ques);
    }
  })

}


const reloadFunc = ()=>{
  setCount(0);
  Ques.map((curEl,ix)=>{
      setQuesState("9 + 6 + 7x - 2x - 3");
  })
}

  return (
   <>
{newZoom == true ? 

  <div className="h-full w-full md:w-[712px] gap-[32px]  m-auto mt-7">
      <div className="innerBoxTop relative w-full h-[200px] md:h-[390px] rounded-[40px] bg-gradient-to-l from-[#06286E] to-[#164EC0]    ">
            <div className="bulbCont flex max-w-[87%] justify-between m-auto relative  ">
                <div className="bulb text-[#fff] font-[900] absolute top-7 ">{bulb}</div>
                <div className="speacker text-[#fff] font-[900] absolute top-7 right-1">{speaker}</div>
            </div>

            <div className="quiz font-[700] text-[20px] md:text-[38.26px] text-[#FFFFFF] flex justify-center align-center text-center h-full items-center">{quesState}
            </div>
      </div>

      <div className="innerLower max-w-[87%] justify-between m-auto   mt-5 flex items-center">
        <div className="loader  text-[24px] text-gradient-to-l from-[#06286E] to-[#164EC0]" onClick={()=>reloadFunc()}>{reload}</div>
      <div className="middleLower flex gap-3">
      <div className="leftArrow" onClick={()=>sub()} > <ArrowButton button={leftArrow}  onClick={()=>sub()}/> </div>
        <div className="middle font-[700] text-[18px] md:text-[24px]  text-[#202B37] flex items-center">{count}/10</div>
        <div className="rightArrow"  onClick={()=>add()}> <ArrowButton button={rightArrow} onClick={()=>add()}/> </div>
      </div>
        <div className="zoom w-[24px] text-gradient-to-l from-[#06286E] to-[#164EC0] " onClick={zoomFunc}>{zoom}</div>
      </div>
    </div>
    
    :
    
    <div className="h-full w-full md:w-[89%] gap-[32px]  m-auto mt-7">
      <div className="innerBoxTop relative w-full h-[200px] md:h-[390px] rounded-[40px] bg-gradient-to-l from-[#06286E] to-[#164EC0]    ">
            <div className="bulbCont flex max-w-[87%] justify-between m-auto relative  ">
                <div className="bulb text-[#fff] font-[900] absolute top-7 ">{bulb}</div>
                <div className="speacker text-[#fff] font-[900] absolute top-7 right-1">{speaker}</div>
            </div>

            <div className="quiz font-[700] text-[20px] md:text-[38.26px] text-[#FFFFFF] flex justify-center align-center text-center h-full items-center">
            {quesState}
            </div>
      </div>

      <div className="innerLower max-w-[87%] justify-between m-auto   mt-5 flex items-center">
        <div className="loader  text-[24px] text-gradient-to-l from-[#06286E] to-[#164EC0]"onClick={()=>reloadFunc()}>{reload}</div>
      <div className="middleLower flex gap-3">
      <div className="leftArrow" onClick={()=>sub()} > <ArrowButton button={leftArrow}  onClick={()=>sub()}/> </div>
        <div className="middle font-[700] text-[18px] md:text-[24px]  text-[#202B37] flex items-center">{count}/10</div>
        <div className="rightArrow"  onClick={()=>add()}> <ArrowButton button={rightArrow} onClick={()=>add()}/> </div>
      </div>
        <div className="zoom w-[24px] text-gradient-to-l from-[#06286E] to-[#164EC0] " onClick={zoomFunc}>{zoom}</div>
      </div>
    </div>}

   </>
  )
}

export default QuestionBox
