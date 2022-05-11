import React from 'react';
import { Banner } from '../components/Banner/Banner';
import { Slider } from '../components/Slider/Slider';

export const Inicio = () => {
  const style = {
    width:'100vw',
    backgroundColor:'#121212',
   }

  return (
    <div style={style}>
      <Banner />
      <Slider title={"Series Premiadas"}/>
      <Slider />
      <Slider />
    </div>
  )
}

