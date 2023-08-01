import React, { useState } from 'react'

import { MyContext } from './MyContext'
import FirstContex from './FirstContex';
import SecondContext from './SecondContext';

const UseContext = () => {
    const [count , setCount]=useState(0);
  return (
    <div>
        <h1>UseContext</h1>
        <button onClick={()=>{
            setCount(count=>count+1);
        }}>Click</button>
        <MyContext.Provider value={count}>
            <FirstContex/>
            <SecondContext/>
        </MyContext.Provider>
    </div>
  )
}

export default UseContext