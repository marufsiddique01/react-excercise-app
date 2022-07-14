import React from 'react'

import { Box, Stack, Typography } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = (equipmentExercises, targetMuscleExercises) => {
  // console.log(equipmentExercises.equipmentExercises.length)
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography variant='h3'>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }} >
        {equipmentExercises.targetMuscleExercises.length ? <HorizontalScrollbar data={equipmentExercises.targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography variant='h3'>
        Exercises that target same equipment
      </Typography>
      <Stack direction='row' sx={{ p: '2', position: 'relative' }} >
        {equipmentExercises.equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises.equipmentExercises} /> : <Loader />}
      </Stack>

    </Box>
  )
}

export default SimilarExercises



