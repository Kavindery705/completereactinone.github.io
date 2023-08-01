import React from 'react'
import { useState } from 'react'

const LocalStorage = () => {
    const [state,setState] = useState({});
    const setStorage=()=>{
        const info = {
            name : "kavinder",
            city :"gurugram"
        }
        localStorage.setItem('myData',JSON.stringify(info));
    }

    const getStorage=()=>{
        let data = localStorage.getItem('myData');
        console.log(data);
        let data1 = JSON.parse(data);
        setState(data1);
    }

    const removeStorage=()=>{
        localStorage.removeItem("myData");
    }
  return (
    <div>
        <h1>LocalStorage</h1>
        <button onClick={setStorage}>setStorage</button>
 
        {state.name}
        <button onClick={getStorage}>getStorage</button>

        <button onClick={removeStorage}>removeStorage</button>
    </div>
  )
}

export default LocalStorage