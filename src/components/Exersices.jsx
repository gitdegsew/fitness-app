import React, { useEffect, useState } from 'react'
import ExerciseCard from './ExerciseCard'
import { Pagination } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'

const Exersices = ({exercises,setExercises,bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage =9

  

  let  currentExercises=[]
  if(exercises && exercises.length>9){
   
    const indexOfLastExercise =currentPage*exercisesPerPage

  const indexOfFirsExercise = indexOfLastExercise -exercisesPerPage
    currentExercises= exercises.slice(indexOfFirsExercise,indexOfLastExercise)
  }
  
  const paginate=(e,value) =>{
    setCurrentPage(value)
    window.scrollTo({top:1500,behavior:"smooth"})

  }

  useEffect(()=>{
    
      if(bodyPart=="all"){
      fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions).then((exercises)=>{
        setExercises(exercises)

      }).catch((error) =>{
        console.log(error)
      })}
      else{
        fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions).then((exercises)=>{
          setExercises(exercises)
      }).catch((error) =>{
        console.log(error)
      })
      }
    
      
    
  },[bodyPart])


  return (
    <div id="exercises" className='mt-[50px] lg:mt-[110px] p-[20px]  rounded-lg' >
      <p className='mb-[46px] text-[26px] font-semibold' >
        Showing Results
      </p>
      <div className=' flex gap-[50px] lg:gap-[70px] flex-wrap justify-around  ' >
        {
          currentExercises.map((exercise, index) =><ExerciseCard key={index} exercise={exercise} />
          )
        }
      </div>
      <div className='mt-[100px] flex items-center justify-center' >
        {
          exercises.length>9 && (
            <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length/exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            />
          )
        }

      </div>
    </div>
  )
}

export default Exersices