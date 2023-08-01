import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from '../style/weather.module.css'

const AxiosApi = () => {
    const [state , setState]=useState([]);
    const [data , setData] = useState([]);
    const [cityname,setCityname]=useState("Gurugram");
    const [coords,setCoords]=useState([]);
    const [wind,setWind]=useState([]);
    useEffect(() => {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=bdff438f65a747506865f4e7169a2978`).then(resp=>{
            console.log(resp.data);
            setState(resp);
            setData(resp.data);
            setCoords(resp.data.coord)
            setWind(resp.data.wind)
        })
    
      return () => {
        
      }
    }, [cityname])
    
  return (
    <div>
        <h1>AxiosApi</h1>
        <div className={styles.srch}>
        <input type="search" className={styles.inputfeild} id="srch" defaultValue={cityname} />
    <input type="submit" value="search" onClick={()=>{
      setCityname(document.getElementById("srch").value);
    }} />
    </div>
    {!data ? ("no data found "): <div>
        <h1>Cityname :-{data.name}</h1>
        <h1>Latitude :-{coords.lat}</h1>
        <h1>Wind</h1>
        <div> :- <p>{wind.speed}</p>
        <p>{wind.gust}</p></div>
        </div>}

    </div>
  )
}

export default AxiosApi