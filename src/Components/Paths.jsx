import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavLinks from '../Assests/NavLinks';
import HomeContainer from './HomeContainer';


const Paths = () => {

    let arrow=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:w-6 md:h-6 w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>

  let iconHome = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-6 md:h-6 w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>


// useState 
const [click , setClick] = useState("Flash Card");

    // funct 
    const linkClick=(e)=>{
      setClick(e);
    }
    // console.log(click , typeof(click));
  
  return (
    <div className="max-w-[98%] lg:max-w-[80%] p-1 md:p-4 w-full flex   items-center text-center m-auto cursor-pointer gap-1 md:gap-3 ">

    
            <div className="arrow ">{iconHome}</div>
            <div className="arrow">{arrow}</div>
           {click == "Flash Card" ? <NavLink to="/flashcard" className="font-bold " onClick={()=>linkClick("Flash Card")}> <NavLinks link="Flashcard">  </NavLinks></NavLink> : <NavLink to="/flashcard" onClick={()=>linkClick("Flash Card")}> <NavLinks link="Flashcard">  </NavLinks></NavLink>}
           {/* <NavLink to="/flashcard"> Flashcard</NavLink> */}

            <div className="arrow">{arrow}</div>

            {click == "Mathematics" ? <NavLink to="/mathematics" className="font-bold" onClick={()=>linkClick("Mathematics")}> <NavLinks link="Mathematics" /></NavLink> :<NavLink to="/mathematics" onClick={()=>linkClick("Mathematics")}> <NavLinks link="Mathematics" /></NavLink>}
            {/* <NavLink to="/mathematics" onClick={()=>linkClick("Mathematics")}> <NavLinks link="Mathemaatics" /></NavLink> */}
            <div className="arrow">{arrow}</div>

            {click == "Relation And Functions" ? <NavLink to="/relation" className="font-bold" onClick={()=>linkClick("Relation And Functions")} > <NavLinks link="Relation and Functions" /></NavLink> : <NavLink to="/relation" onClick={()=>linkClick("Relation And Functions")} > <NavLinks link="Relation and Function" /></NavLink>}
            {/* <NavLink to="/relation" onClick={()=>linkClick("Relation And Functions")} > <NavLinks link="Relation and Function" /></NavLink> */}

    </div>
  )
}

export default Paths
