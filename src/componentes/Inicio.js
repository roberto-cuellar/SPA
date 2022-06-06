import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';


export const Inicio = () => {
  return (
    <section>
      <Typography  
        sx={{
          fontWeight: 700
        }}
          variant="h6" 
          color='text.primary' 
          my={2}
          >Inicio</Typography> 

      <Card 
        variant='outlined' 
        sx={{
          margin: 2, 
          backgroundColor: 'action.selected',
          borderRadius: 4
        }}
      >
        <CardContent>
          <Typography variant="body2" color='text.primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor ex orci, ut porttitor est elementum a. Cras lorem purus, imperdiet in dapibus quis, sollicitudin ac dui. Nam vel turpis vitae odio facilisis congue. In scelerisque vulputate ex et scelerisque.  Fusce id placerat risus. Sed nec erat maximus mi molestie pharetra vel vel odio. In ut nulla auctor velit finibus commodo a nec urna. Cras risus dolor, sodales in tristique sed, finibus at dui. Suspendisse sem augue, elementum non iaculis sed, fermentum vitae ligula. Curabitur ante metus, lacinia eu ipsum in, bibendum interdum risus. Proin erat leo, malesuada nec faucibus non, ultrices nec sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</Typography>
        </CardContent>
        <Divider variant='middle' />
        <CardActions>
          <Typography variant="caption" color='text.primary' sx={{fontWeight: 700}}>Roberto Cuellar</Typography>
        </CardActions>
      </Card>
    </section>
  )
}
