import React from 'react'
const styles ={
    'backgroundColor': 'gray',
    'marginRight': '10px'
}


export const Navbar = ({setContenido}) => {
    
  return (
    <nav>
        <span style={styles} onClick={()=>setContenido('inicio')}>INICIO</span>
        <span style={styles} onClick={()=>setContenido('items')}>ITEMS</span>
        <span style={styles} onClick={()=>setContenido('contacto')}>CONTACTO</span>
    </nav>
  )
}
