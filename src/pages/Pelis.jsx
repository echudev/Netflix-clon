import React, { useEffect } from 'react';

export const Pelis = () => {

  const style = {
    backgroundColor: '#121212',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100vh',
    width:'100%',
  }
  useEffect(() =>{
    document.title= `Películas — Netflix`;
 }, [])  


  return (
    <div style={style}>
      <h1>PELICULAS: en construcción</h1>
    </div>
  )
}