import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './getapi.css'

const GetApi = () => {
    const [state,setState]=useState([]);
    useEffect(() => {
      async function getApi(){
        const getA = await axios.get(`http://localhost:3000/users`);
        console.log(getA.data);
        setState(getA.data)
      }
    getApi();
      return () => {
        
      }
    }, [])
    
  return (
    <div>
        <Link to='/crudapi'>Home</Link>
        <h1>GetApi</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                {state.map((e,index)=>
                <tr key={index}>
                    <td>{e.id}</td>
                    <td>{e.email}</td>
                    <td>{e.password}</td>
                    <td><Link to={`/edit/${e.id}`}>Edit</Link>/<Link to={`/delete/${e.id}`}>Delete</Link></td>
                </tr>
                )}
            </tbody>
        </table>

    </div>
  )
}

export default GetApi