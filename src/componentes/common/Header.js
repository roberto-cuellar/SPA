import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar'

export const Header = () => {
    const [contenido,setContenido] = useState("inicio"); // Estado para 
    // llevar el control del contenido
    const navigate = useNavigate(); // hook para la navegación
    
    useEffect(()=>{ // En caso de que se cambie el estado de contenido, redirigir a dicha página
        navigate(contenido);
    },[contenido])
  return (
    <header>
        <button>Modo Nocturno</button>
        <h1>APLICACIÓN DE PÁGINA SENCILLA (SPA)</h1>
        <Navbar setContenido={setContenido}/>
    </header>
  )
}
