import React from 'react'
import Logo from '../assets/images/Logo.png'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  function scrollToExercise() {
    document.getElementById('exercises').scrollIntoView();
    // will scroll to 4th h3 element
  }
  const navigate = useNavigate()
  return (
    <div className="flex  justify-start items-end gap-32 p-[20px] " >
        <img src={Logo} width="48px"  height="48px" className='my-0 mx-[20px]' />
        <div className='flex  items-end gap-[40px] text-[24px] z-20' >
            <p className='cursor-pointer hover:text-[#b25b6a]' onClick={()=>navigate('/')} >Home</p>
            <p onClick={scrollToExercise} className='cursor-pointer hover:text-[#b25b6a]' >Exersices</p>
        </div>
    </div>
  )
}

export default NavBar