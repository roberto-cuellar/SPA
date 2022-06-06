import React from 'react'
import StarIcon from '@mui/icons-material/Star';




export const Estrellas = ({numero}) => {
                
  return (
        <>
          {[...Array(numero)].map(x => < StarIcon/> )}
        </>
  )
}
