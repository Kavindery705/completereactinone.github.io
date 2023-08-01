
import { useEffect } from 'react';
import { useState } from 'react'

const useFetch= (url) => {
    const [data , setData] = useState([]);
    useEffect(() => {
      fetch(url).then((resp)=>resp.json()).then(response=>
        {
            setData(response)
        }).catch(err=>{
        console.log(err);
      })
    
      return () => {
        
      }
    }, [url])
    
  return [data];
}

export default useFetch