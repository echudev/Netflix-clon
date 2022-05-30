import React, { useEffect } from 'react';

export const Novedades = () => {

  const style = {
    backgroundColor: '#121212',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
  }

  useEffect(() =>{
    document.title= `Netflix`;
 }, []) 

  return (
    <div style={style}>
      <h1>Novedades Populares</h1>
    </div>
  )
}