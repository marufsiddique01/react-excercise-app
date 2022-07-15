import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { exerciseOptions, fetchData } from '../utils/fetchData';

import ExerciseCard from '../components/ExerciseCard';
// import SearchExcercises from './SearchExcercises';

const Excersises = ({ exercises, setExercises, bodyPart }) => {
  // console.log(exercises);
  const [currentPage, setcurrentPage] = useState(1)
  const excercisesPerPage = 10;

  const indexOfLastExercise = currentPage * excercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - excercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setcurrentPage(value)

    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let excercisesData = [];

      if (bodyPart === 'all') {
        excercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        excercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(excercisesData)

    }
    fetchExercisesData();
  }, [bodyPart])



  return (
    <Box id='excercises' sx={{ mt: { lg: '110px' } }} mt='50px' p='20px' >
      <Typography variant='h3' mb='46px' textAlign='center'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap='wrap' justifyContent='center' >
        {currentExercises.map((exercise, index) => (
          /* <p>{exercise.name}</p> */
          < ExerciseCard key={index} exercise={exercise} />

        ))}

      </Stack>
      <Stack mt='100px' alignItems='center' >
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage='1'
            count={Math.ceil(exercises.length / excercisesPerPage)}
            page={currentPage}
            onChange={paginate}
          />
        )

        }


      </Stack>

    </Box>
  )
}

export default Excersises
