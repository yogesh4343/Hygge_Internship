import React, { useState } from 'react'
import NavLinks from './NavLinks'

const Quiz = () => {

    const [selectQuiz , setSelectQuiz] = useState("Study");
    // func 
    const selectQuizFunc =(e)=>{
        setSelectQuiz(e);
    }
        // console.log(selectQuiz);
  return (
    <div className="max-w-[90%] md:max-w-[70%] flex m-auto w-full justify-center  cursor-pointer gap-5 md:gap-20 mt-12">

           {selectQuiz == "Study" ? <div className="box border-b-4 border-black " onClick={()=>selectQuizFunc("Study")} ><NavLinks link="Study"  /> </div>  : <div  onClick={()=>selectQuizFunc("Study")} ><NavLinks link="Study"  /> </div> }

            {selectQuiz == "Quiz" ? <div className="box border-b-4 border-black "  onClick={()=>selectQuizFunc("Quiz")}><NavLinks link="Quiz" /></div> : <div   onClick={()=>selectQuizFunc("Quiz")}><NavLinks link="Quiz" /></div> }
          
            {selectQuiz == "Test" ?   <div className="box border-b-4 border-black " onClick={()=>selectQuizFunc("Test")} >  <NavLinks link="Test" /> </div> :   <div  onClick={()=>selectQuizFunc("Test")} >  <NavLinks link="Test" /> </div> }

            {selectQuiz == "Games" ?     <div className="box border-b-4 border-black " onClick={()=>selectQuizFunc("Games")} > <NavLinks link="Games"  /> </div> :    <div  onClick={()=>selectQuizFunc("Games")} > <NavLinks link="Games"  /> </div> }

            {selectQuiz == "Others" ?      <div className="box border-b-4 border-black "  onClick={()=>selectQuizFunc("Others")}> <NavLinks link="Others" /> </div>:    <div    onClick={()=>selectQuizFunc("Others")}> <NavLinks link="Others" /> </div> }
    </div>
  )
};

export default Quiz
