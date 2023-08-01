import React , {useEffect} from 'react'
import { useState } from 'react';

const Useefffectdemo = () => {
    const [count,setCount] = useState(0);
    const [timer , setTimer]=useState(new Date().toLocaleTimeString());
    // useEffect(() => {
    //     setTimeout(()=>{setCount(count=>count+1)},1000)
    //   console.log("good morning");
    
    // })
    useEffect(() => {
      console.log("good ");
    setInterval(() => {
        setTimer(new Date().toLocaleTimeString());
    }, 1000);
      return () => {
        // console.log("mounting");
      }
    }, [timer])
    
  return (
    <div>
        Useefffectdemo {count}{timer}
    <button onClick={()=>{
        setCount(count=>count+1);
    }}>increase</button>
    </div>
  )
}

export default Useefffectdemo