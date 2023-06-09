import React from 'react'
import HorizontalScrollbar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({targetMuscleExercises,targetEquipmentExercises}) => {
  
  
  return (
    <><div className='lg:mt-[100px] pl-10'>
      <p className='mb-[33px] text-[2rem]' >Exercises that target the <span className='text-[#ff2625]  ' >same muscle</span> group</p>
      {!targetMuscleExercises.length?<Loader/>: <HorizontalScrollbar data={targetMuscleExercises} />}
    </div><div className='lg:mt-[100px] pl-10'>
        <p className='mb-[33px] text-[2rem]' >Exercises that use the same <span className='text-[#ff2625]  ' >equipment</span></p>
        {!targetEquipmentExercises.length?<Loader/>: <HorizontalScrollbar data={targetEquipmentExercises} />}
      </div></>
  )
}

export default SimilarExercises