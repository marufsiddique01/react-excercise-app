import React, { useState } from 'react'
import { Box } from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import SearchExcercises from '../components/SearchExcercises'
import Excersises from '../components/Excersises'



const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  // console.log(bodyPart)

  return (
    <Box>
      <HeroBanner />
      <SearchExcercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Excersises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />

    </Box>
  )
}

export default Home
