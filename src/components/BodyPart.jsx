import React from 'react'
import Icon from '../assets/icons/gym.png'


const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <div onClick={()=>{
      setBodyPart(item)
      window.scrollTo({top:1500,left: 100,behavior: 'smooth'})
    }}  className={`w-[148px] m-6  h-32 shadow-md flex bg-white rounded-md flex-col justify-center items-center text-center shrink-0 hover:animate-showUp hover:cursor-pointer p-4 ${item===bodyPart&& "border-t-2 border-t-red-600"} `}>
        <img src={Icon} alt='dumbbell' className='w-[40px] h-[40px] '  />
        <p className='text-[18px] font-bold text-[#3a1212] capitalize ' >{item}</p>

    </div>
  )
}

export default BodyPart