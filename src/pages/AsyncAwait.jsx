import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const AsyncAwait = () => {
    const [state,setState] = useState([]);
    useEffect(() => {
      async function ProductApi(){
        const result = await axios.get(`https://fakestoreapi.com/products`).catch(err=>{
            console.log(err);
        })

        console.log(result);
        setState(result.data);
      }

ProductApi();    
      return () => {
        
      }
    }, [])
    
  return (
    <div>
<h1>AsyncAwait</h1>

<table  style={{border:"2px solid black"}}>
    <thead>
    <tr style={{border:"2px solid black"}}>
        <th style={{border:"2px solid black"}}>id</th>
        <th style={{border:"2px solid black"}}>title</th>
        <th style={{border:"2px solid black"}}>price</th>
        <th style={{border:"2px solid black"}}>description</th>
    </tr>
    </thead>
    <tbody>
    {state.map((e,index)=>
    <tr key={index} style={{border:"2px solid black"}}>
        <td style={{border:"2px solid black"}}>{e.id}</td>
        <td style={{border:"2px solid black"}}>{e.title}</td>
        <td style={{border:"2px solid black"}}>${e.price}</td>
        <td style={{border:"2px solid black"}}>{e.description}</td>

    </tr>
    )}
    </tbody>
</table>

    </div>
  )
}

export default AsyncAwait