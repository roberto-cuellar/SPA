import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Tooltip from '@mui/material/Tooltip';


export const Navbar = ({setContenido}) => {
  const [value, setValue] = React.useState(0);
    
  return (
    <Box sx={{ 
      width: '80%',
      marginLeft: '10%',
      boxShadow: 5,
      borderRadius: 4
      }}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{backgroundColor: 'action.selected',borderRadius: 4}}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
      <Tooltip title='Ir a inicio'>
        <BottomNavigationAction onClick={()=>setContenido('inicio')} label="Inicio" icon={<HomeIcon />} />
      </Tooltip>
      <Tooltip title='Ver contenidos'>
        <BottomNavigationAction onClick={()=>setContenido('items')} label="Items" icon={<ListAltIcon />} />
      </Tooltip>
      <Tooltip title='Ver contactos'>
        <BottomNavigationAction onClick={()=>setContenido('contacto')} label="Contacto" icon={<ContactPageIcon />} />
        </Tooltip>
      </BottomNavigation>
    </Box>

    
  )
}
