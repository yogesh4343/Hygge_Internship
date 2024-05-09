import React from 'react'
import Button from '../Assests/Button'
import LogoImg from '../Assests/LogoImg'
import LogoName from '../Assests/LogoName'
import NavLinks from '../Assests/NavLinks'

const NavBar = () => {
  return (
    <div className='max-w-[98%] flex-wrap lg:max-w-[80%] p-1 md:p-4 w-full flex   items-center text-center m-auto cursor-pointer justify-center gap-2 sm:justify-between'>
      <div className="left flex gap-2">
      <LogoImg /><LogoName />
      </div>
      <div className="right gap-[12px] md:gap-[40px] flex  items-center text-center ">
        <NavLinks link="Home"/>
        <NavLinks link="FlashCard"/>
        <NavLinks link="Contact"/>
        <NavLinks link="FAQ"/>

        <Button />
      </div>
    </div>
  )
}

export default NavBar
