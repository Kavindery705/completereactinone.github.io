import React from 'react'
import { useContext } from 'react';
import { MyContext } from './MyContext';
const FirstContex = () => {
    const count = useContext(MyContext);
  return (
    <div>
        <h1>FirstContex</h1>
        <h3>Hello {count}</h3>
    </div>
  )
}

export default FirstContex