import React, { useState } from 'react'
import { Box } from '@mui/material'

import HeroBanner from '../components/HeroBanner'
import SearchExcercises from '../components/SearchExcercises'
import Excersises from '../components/Excersises'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExcercises />
      <Excersises />




    </Box>
  )
}

export default Home
