import React from 'react'
import bodypartImage from '../assets/icons/body-part.png'
import targetImage from '../assets/icons/target.png'
import equipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetails}) => {

  const {bodyPart, gifUrl, name, target, equipment} =exerciseDetails

  const extraDetail =[
    {
      icon:bodypartImage,
      name:bodyPart
    },
    {
      icon:targetImage,
      name:target
    },
    {
      icon:equipmentImage,
      name:equipment
    },
  ]

  return (
    <div className='flex flex-col  lg:flex-row px-20 items-center  lg:gap-40 ' >
      <img src={gifUrl} alt={name} loading="lazy"/>
      <div className='flex flex-col gap-[20px] lg:gap-[35px] w-80  mt-10' >
        <p className='text-[32px] font-bold' >{name}</p>
        <p className='text-[18px] font-popy'>
          Exercises keep you strong. {name} is one of the best exercises to target 
          your {target}. It will help you improve your mood and gain energy
        </p>
        {
          extraDetail.map((item, index)=>(
            <div key={index} className="flex gap-x-[24px] items-center" >
              <button className='bg-[#fff2db] rounded-full w-[100px] h-[100px] flex justify-center items-center ' >
                <img src={item.icon} alt={bodyPart} width="50px" height="50px" />
                
              </button>
              <h5 className='capitalize' >{item.name}</h5>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Detail