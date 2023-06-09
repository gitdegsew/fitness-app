import React, { useEffect, useState } from 'react'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData,youtubeSearchOptions } from '../utils/fetchData'

const ExerciseDetails = () => {
  const [exerciseDetails,setExerciseDetails] = useState({})
  const [exerciseVideos, setexerciseVideos] = useState([])
  const [targetMuscleExercises, setMuscleExercises] = useState([])
  const [targetEquipmentExercises, setEquipmentExercises] = useState([])
  const {id} = useParams()
 
  
  useEffect(()=>{
    const fetchExercises = async () =>{
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
        const youTubeSearchUrl ='https://youtube-search-and-download.p.rapidapi.com'
         fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions).then((data)=>{
          setExerciseDetails(data)
          console.log('before fetching exercise videos')
          console.log(data)
          console.log(`${youTubeSearchUrl}/search?query=${exerciseDetails.name}`)

      
          fetchData(`${youTubeSearchUrl}/search?query=${data.name}`,youtubeSearchOptions).then((data)=>{
            setexerciseVideos(data.contents)
           }).catch((err) =>{
            console.log('error on videos')
            console.log(err)
           })
           fetchData(`${exerciseDbUrl}/exercises/target/${data.target}`,exerciseOptions).then((data)=>{
            setMuscleExercises(data)
           }).catch((err) =>{
            console.log('error on similar target muscle')
            console.log(err)
           })
           fetchData(`${exerciseDbUrl}/exercises/equipment/${data.equipment}`,exerciseOptions).then((data)=>{
            setEquipmentExercises(data)
           }).catch((err) =>{
            console.log('error on equipment')
            console.log(err)
           })
  
         }).catch((err) =>{
          console.log('error on exercise details')
          console.log(err)
         })
         
         
        
    }

    fetchExercises()
  },[id])

  return (
    <div className=''>
      <Detail exerciseDetails={exerciseDetails} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name}  />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} targetEquipmentExercises={targetEquipmentExercises} />
    </div>
  )
}

export default ExerciseDetails