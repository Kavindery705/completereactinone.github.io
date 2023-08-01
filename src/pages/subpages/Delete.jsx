import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom'
const Delete = () => {
    let {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
      async function deleteRecord(){
        await axios.delete(`http://localhost:3000/users/${id}`);
    navigate('/get');
      }
    deleteRecord();
      return () => {
        
      }
    }, [])
    
  return (
    <div>
        <h1>Delete</h1>

    </div>
  )
}

export default Delete