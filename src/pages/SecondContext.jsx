import React from 'react'
import { useContext } from 'react';
import { MyContext } from './MyContext';

const SecondContext = () => {
    const count = useContext(MyContext);
  return (
    <div>
        <h1>SecondContext</h1>
        <h3>hello 2 {count}</h3>
    </div>
  )
}

export default SecondContext