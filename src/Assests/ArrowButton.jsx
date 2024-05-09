import React from 'react'

const ArrowButton = ({button}) => {
  return (
    <div className="md:w-[60px] w-[32px] h-[32px] md:h-[60px] bg-gradient-to-l from-[#06286E] to-[#164EC0]  rounded-full text-center flex justify-center items-center font-[700] text-white text-[15px] md:text-[28px]">  
        {button}
    </div>
  )
}

export default ArrowButton
