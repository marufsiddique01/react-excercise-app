import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    // <div>BodyPart</div>
    <Stack
      type="button"
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '250px',
        height: '250px',
        cursor: 'pointer',
        gap: '47px'
      }}
      onclick={() => setBodyPart(item)}

    >
      <img
        src={Icon}
        alt='gym-category'
        style={{
          width: '50px',
          height: '50px',
        }}
      />
      <Typography
        fontSize='24px'
        fontWeight='bold'
        color='#3a1212'
        textTransform='capitalize'
      >{item}</Typography>
    </Stack >
  )
}

export default BodyPart
