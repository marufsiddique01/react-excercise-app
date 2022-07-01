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
        width: '270px',
        height: '280px',
        gap: '47px'
      }}

    >
      <img
        src={Icon}
        alt=''
        style={{
          width: '',
          height: '',

        }}
      />
    </Stack >
  )
}

export default BodyPart
