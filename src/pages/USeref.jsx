import React ,{useRef} from 'react'

import '../style/ref.css'
import { useState } from 'react';
import { useEffect } from 'react';
const USeref = () => {
    const [inputValue , setInputValue] = useState("");
    const prev = useRef("");
    const myRef = useRef();
    const myRef1 = useRef();

    const handleClick =()=>{
        myRef.current.focus();
        myRef1.current.classList.toggle('a');
    }
    useEffect(() => {
      
    prev.current=inputValue;
      return () => {
        
      }
    }, [inputValue])
    
  return (
    <div>
        <h1>UseRef</h1>
        <input type="text"  ref={myRef} />
        <h1 ref={myRef1}>Good morning</h1>
        <button onClick={handleClick}>click</button>
        <input type="text" ref={prev} value={inputValue}  onChange={(e)=>{
            setInputValue(e.target.value)}} />
         <h1> input value : {inputValue}</h1>   
         <h1> previous value : {prev.current}</h1>   
        
    </div>
  )
}

export default USeref