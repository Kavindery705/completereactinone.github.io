import React ,{useState} from 'react'

const Count1 = () => {
  // const [count,setCount]=useState(0);
  // const [color,setColor]=useState("");
  const [state,setState] =useState({count:0,color:'red'})
  const {count,color}=state;
  const [changed , setChanged] =useState(false);
  const Increment =()=>{
    // setCount(prevcount=>prevcount+1);
    // setColor('red');
    setState(prevstate =>
      {
        return {...state,count:prevstate.count+1,color:'green'}
      })
  }
  const TwiceIncrement =()=>{
    Increment();
    Increment();
    setState(prevstate=>{
      return {...state,count:prevstate.count,color:'yellow'}
    })
    // setColor('yellow');
  }
  const Decrement =()=>{
    // setCount(count-1);
    // setColor('green');
    setState(prevstate=>{
      return {...state,count:prevstate.count-1,color:'decrease'}
    })
  }
  const ChangeText =()=>{
    setChanged(!changed);
    console.log(changed);
  }
  return (
    <div>
      {/* {count}{color } */}
      {/* <br /> */}
      {/* {state.count}{state.color} */}
      {count}
      {color}
       <button onClick={Increment}>Increment</button>
      <button onClick={TwiceIncrement}>TwiceIncrement</button>
      <button onClick={Decrement}>Decrement</button>
      {changed ? <h1>Hello</h1>:<h1>hi</h1>}
      <button onClick={ChangeText}>Toggle</button>
    </div>
  )
}

export default Count1