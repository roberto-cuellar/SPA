import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Tooltip from '@mui/material/Tooltip';



export const Header = ({setMode,theme,mode}) => {

    const [contenido,setContenido] = useState("inicio"); // Estado para 
    // llevar el control del contenido
    const navigate = useNavigate(); // hook para la navegación
    
    useEffect(()=>{ // En caso de que se cambie el estado de contenido, redirigir a dicha página
        navigate(contenido);
    },[contenido])
  return (
    <header>
    <Box>
    <Tooltip title={mode === 'light' ? 'Cambiar a Modo Nocturno' : 'Cambiar a Modo Día'}>
      <IconButton sx={{ ml: 1 }} onClick={()=> setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))} >
            {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
    </Tooltip>
     
        <Typography  
          sx={{
            textAlign: 'center'
          }}
          variant="h3" 
          color='text.primary' 
          my={2}
          >APLICACIÓN DE PÁGINA SENCILLA (SPA)</Typography>
        <Navbar setContenido={setContenido}/>
    </Box>
    </header>
  )
}
