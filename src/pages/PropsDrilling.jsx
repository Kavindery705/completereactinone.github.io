import React from 'react'
import { useState } from 'react'
import FirstPropsDril from './FirstPropsDril';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import SecondPropsDril from './SecondPropsDril';

const PropsDrilling = () => {
    const [count ,  setCount] =useState(0);

    const handleClick=()=>{
        setCount(count=>count+1);
    }
  return (
    <div>
        <h1>PropsDrilling</h1>
        {count}
        <button onClick={handleClick}>click</button>
        <FirstPropsDril info={count}/>
    </div>
  )
}

export default PropsDrilling