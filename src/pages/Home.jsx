import React, { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExersices from '../components/SearchExersices'
import Exersices from '../components/Exersices'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <div>
      <HeroBanner/>
      <SearchExersices
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
      <Exersices
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </div>
  )
}

export default Home