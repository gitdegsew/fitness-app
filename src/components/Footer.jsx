import React from 'react'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <div className='mt-[80px] bg-[#fff3f4] gap-[40px] flex flex-col items-center px-[40px] pt-[24px] ' >
      <img src={Logo} alt="logo" width="200px" height="40px" />
      <p className='text-[24px] pb-[40px] mt-[20px] ' >Made with love by <i>Degsew Abebaw</i> </p>
    </div>
  )
}

export default Footer