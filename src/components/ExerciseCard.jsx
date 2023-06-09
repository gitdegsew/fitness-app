import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ExerciseCard = ({exercise}) => {
  const navigate = useNavigate()
  
  return (
    <div onClick={()=>navigate(`/exercise/${exercise.id}`)} className=' p-8 w-72 h-[450px]   shadow-md m-5 bg-white hover:animate-showUp hover:cursor-pointer rounded-md'    >
        <img src={exercise.gifUrl} alt={exercise.name}  loading ="lazy" className='' />
        <div className='flex justify-center m-10  ' >
            <button className='mx-[21px] p-6 flex flex-col justify-center h-9  text-[#fff] bg-[#ffa9a9] text-[14px] rounded-[20px] capitalize ' >
                {exercise.bodyPart}
            </button>
            <button className='mx-x-[21px] p-6 flex flex-col justify-center h-9  text-[#fff] bg-[#fcc757] text-[14px] rounded-[20px] capitalize ' >
                {exercise.target}
            </button>
           

        </div>
        <p className=' text-black font-bold pb-[10px] capitalize text-[18px]  ' >
        {exercise.name}
        </p>

    </div>
  )
}

export default ExerciseCard