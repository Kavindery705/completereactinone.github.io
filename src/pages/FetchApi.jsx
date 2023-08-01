import React, { useEffect } from 'react'
import { useState } from 'react'

const FetchApi = () => {
    const[data , setData]=useState([]);
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products`).then((response)=>response.json()).then(resp=>
      {
        console.log(resp);
        setData(resp);
      }).catch((err)=>{
        console.log(err); 
      }).catch((err)=>{
        console.log(err);
      })
    
      return () => {
        
      }
    }, [])
    
  return (
    <div> 
        <h1> fetchApi </h1>
        {/* {data[0].id} */}
        {data.map((e,index)=>
        <div key={index}>
            <div style={{border:`2px solid black`,width:"400px"}}>
                <p>{e.id}</p>
                <p>{e.price}</p>
                <p>{e.title}</p>
                <p>{e.description}</p>
                <p>{e.rating.rate}</p>
            </div>
        </div>

        )}
        </div>
  )
}

export default FetchApi