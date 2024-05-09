import React from 'react'
import ArrowButton from '../Assests/ArrowButton';
import Heading from '../Assests/Heading';
import LogoImg from '../Assests/LogoImg';
import LogoName from '../Assests/LogoName';

const CreateFlashCard = () => {
    
    let plus = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
    <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
  </svg>
  ;
    
  return (
    <div className="flex justify-between mt-6 cursor-pointer max-w-[92%] md:max-w-[100%] m-auto ">
      <div className="left flex gap-2 items-center">
        {/* <div className="leftFirst">{iconImg}</div> */}
       <div className="logo  p-2 md:p-4 border rounded-full shadow-2xl"><LogoImg /> </div>
        <div className="leftSecond">
            <div className="top text-[#696671] font-[700] text-[10px]">Published by</div>
            <div className="bottom"><LogoName /></div>
        </div>
      </div>


      <div className="right flex items-center text-center gap-3 ">
        <ArrowButton button={plus} />
        <Heading heading="Create FlashCard" weight="semibold" text="19px" smallText="14px" topMargin="0" />
      </div>

    </div>
  )
}

export default CreateFlashCard

