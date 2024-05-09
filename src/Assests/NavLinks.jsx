import React from 'react'
import HomeContainer from '../Components/HomeContainer'

const NavLinks = ({link}) => {
  return (
    <div className="main">
      <div className="font-[Inter] font-[400px] text-[14px] md:text-[18px] hover:font-semibold text-[#3A3740]">
      {link}
    </div>
    </div>
  )
}

export default NavLinks
