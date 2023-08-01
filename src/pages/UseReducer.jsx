import React from 'react'
import { useReducer } from 'react'

const initialstate = {count :0 , color :'red'};
const reducer=(state,action)=>{
    switch (action.type){
        case 'increment':
            return {...state,count : state.count+1 , color :'green'}
        case 'decrement':
            return {...state,count : state.count-1,color :'yellow'}
        default:
            state;    
    }
}
const UseReducer = () => {
    const [state , dispatch] =useReducer(reducer,initialstate);

    
  return (
    <div>
        <h1>UseReducer</h1>
        {state.count}
        {state.color}
        <button onClick={()=>{dispatch({type:"increment"})}}>Increase</button>
        <button onClick={()=>{dispatch({type:"decrement"})}}>Decrease</button>
    </div>
  )
}

export default UseReducer;