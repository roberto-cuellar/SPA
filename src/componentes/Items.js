import React from 'react'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Box from '@mui/material/Box';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import StarIcon from '@mui/icons-material/Star';
import { Estrellas } from './common/Estrellas';


export const Items = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  /// Arreglo para los items
    const itemsData= [
      {
        id: 0, /// Esto solo es para ajustar el key de react, no para efectos de organización
        label: 'JavaScript',
        nivel: 5,
        icon: <JavascriptIcon />
      },
      {
        id: 1,
        label: 'CSS',
        nivel: 3,
        icon: <CssIcon />
      },
      {
        id: 2,
        label: 'HTML',
        nivel: 3,
        icon: <HtmlIcon />

      }
    ]

 
    

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <section>
      <Typography  
        sx={{
          fontWeight: 700
        }}
          variant="h6" 
          color='text.primary' 
          my={2}
          >
          Items
      </Typography> 
      <Box 
        sx={{ 
          width: '90%',
          marginLeft: '5%',
          border: "1px solid rgb(220,220,220)",
          borderRadius: 4}} 
          color='text.primary'>
      <List 
        sx={{ 
          width: '100%', 
          marginLeft: '0%',
          backgroundColor: 'action.selected',
          borderRadius: 4
          }} 
        component="nav" 
        aria-label="main mailbox folders">
        {
          itemsData.map((item,index)=>(
            <ListItemButton
              key={item.id}
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
            >
              <ListItemIcon
                key={item.id+2}
              >
                  {item.icon}
              </ListItemIcon>
              
              <ListItemText
                key={item.id+4}
                primary={item.label} secondary={<Estrellas numero={item.nivel} /> } 
              />
            </ListItemButton>
          ))
        }
      </List>
      </Box>
    </section>
  )
}
