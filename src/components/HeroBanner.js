import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'
import { color } from '@mui/system'

const HeroBanner = () => {
  return (

    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color='#FF2625' fontWeight='600' fontSize='26px' >
        Fitness Club
      </Typography>
      <Typography fontWeight='700' sx={{
        fontSize: { lg: '44px', xs: '40px' }
      }} mb="23px" mt="30px">
        Sweat, Smile <br /> And Repeat
      </Typography>
      <Typography fontSize='22px' fontFamily="Alegreya" lineHeight='35px'>
        Check out the most effective excersises
      </Typography>
      <Button variant="contained" color="error" href="#excersises" sx={{ backgroundColor: '#ff2625', padding: '19px' }}>Explore Excersises</Button>
      <Typography fontWeight='600' color='#ff2625' sx={{
        opacity: 0.1,
        display: {
          lg: 'block',
          xs: 'none'
        }
      }} fontSize='200px' >Excercise</Typography>
      <img src={HeroBannerImage} alt="hero-banner" className='hero-banner-img' />
    </Box>

  )
}

export default HeroBanner


//     <Stack>
//       <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
//     </Stack>
//     <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
//       Exercise
//     </Typography>
//     <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
//   </Box>
// );

// export default HeroBanner;
