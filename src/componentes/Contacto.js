import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const contactosArray = [
  {
    avatar: <Avatar alt="Remy Sharp" src="https://mui.com//static/images/avatar/1.jpg" />,
    primary: "Brunch this weekend?",
    secondary: 
    <>
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="body2"
        color="text.primary"
      >
      Ali Connors
      </Typography>
      {" — I'll be in your neighborhood doing errands this…"}  
    </>
  },
  {
    avatar: <Avatar alt="Travis Howard" src="https://mui.com//static/images/avatar/2.jpg" />,
    primary: "Summer BBQ",
    secondary: 
    <>
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="body2"
        color="text.primary"
      >
      Ali Connors
      </Typography>
      {" — I'll be in your neighborhood doing errands this…"}  
    </>
  },
  {
    avatar: <Avatar alt="Cindy Baker" src="https://mui.com//static/images/avatar/3.jpg" />,
    primary: "Oui Oui",
    secondary: 
    <>
      <Typography
        sx={{ display: 'inline' }}
        component="span"
        variant="body2"
        color="text.primary"
      >
      Sandra Adams
      </Typography>
      {' — Do you have Paris recommendations? Have you ever…'}
    </>
  },

]


export const Contacto = () => {

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
        Contacto
      </Typography> 
      <Card sx={{
        margin: 2, 
        backgroundColor: 'action.selected',
        borderRadius: 4
      }}
        variant='outlined'
      >
        <CardContent>
          <Typography variant="body2" color='text.primary'>Encuentrenos en todas nuestras redes sociales</Typography>        
          <List sx={{ width: '80%', marginLeft:'10%' ,bgcolor: 'background.paper',boxShadow: 4, marginTop: 1,marginBottom: 1,borderRadius: 2 }}>
            {contactosArray.map((item,index)=>
            <>
              <ListItem alignItems="flex-start" key={item.primary}>
                <ListItemAvatar>
                  {item.avatar}    
                </ListItemAvatar>
                <ListItemText
                  primary={item.primary}
                  secondary={item.secondary}
                />
              </ListItem> 
              {(index!==contactosArray.length-1)&&<Divider variant="inset" component="li" />}
            </>
            )
            }
          </List>
        </CardContent> 
        <Divider variant="middle" />
        <CardActions>
          <Stack direction="row" spacing={1}>
            <IconButton><FacebookIcon /></IconButton>          
            <IconButton><InstagramIcon /></IconButton>          
            <IconButton><LinkedInIcon /></IconButton>         
          </Stack>
        </CardActions>
      </Card>
    </section>
  )
}
