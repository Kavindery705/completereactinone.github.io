import React from 'react'
import useFetch from './useFetch'


const CustomHooks = () => {
    const [data] = useFetch("https://fakestoreapi.com/products");
  return ( 
    <div>
        <h1>CustomHooks</h1>
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

export default CustomHooks