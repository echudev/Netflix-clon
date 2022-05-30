import React, { useEffect } from 'react';

export const Series = () => {

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
    document.title= `Series — Netflix`;
 }, [])  

  return (
    <div style={style}>
      <h1>SERIES: en construcción</h1>
    </div>
  )
}