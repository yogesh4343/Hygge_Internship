import React from 'react'

const Heading = ({heading , weight , text , topMargin , smallText}) => {
  return (
    <div className={`font-${weight} mt-${topMargin} text-center md:text-left text-[${smallText}] md:text-[${text}]  text-transparent bg-clip-text bg-gradient-to-r from-[#06286E] to-[#164EC0]`}>
      {heading}
    </div>
  )
}

export default Heading
