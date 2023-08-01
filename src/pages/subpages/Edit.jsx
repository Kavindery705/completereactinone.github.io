import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../../style/form.module.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Edit = () => {
    const navigate = useNavigate();
    const [state , setState] = useState({
        email:"",password:""
    })
    const{email,password}=state;
    let {id} = useParams();
    console.log(id);
    const [formerror,setFormerror] =useState({});
    const[isSubmit , setIsSubmit] = useState(false);
    useEffect(() => {
      async function editget(){
        const result = await axios.get(`http://localhost:3000/users/${id}`);
        console.log(result.data);
        setState(result.data);
      }
    editget();
      return () => {
        
      }
    }, [])
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setState({...state,[name]:value});
    }
    useEffect(() => {
        let l = Object.keys(formerror).length;
        if(isSubmit && l===0)
        {

            async function editpost(){
                await axios.put(`http://localhost:3000/users/${id}`,state);
                navigate("/get");
      }
      editpost();
    
    }
      return () => {
        
      }
    }, [formerror])
    
    const handleSubmit =(e)=>{
        console.log("button clicked");
        const  err={};
        e.preventDefault();
        setIsSubmit(true);
       let regname = /^[a-zA-Z0-9@_.]{3,}$/;
       let regpass = /^[a-zA-Z0-9@_.]{3,10}$/
        if(email=="")
        {
            err.email="Please fill email"
            // e.preventDefault();
        }
        else if(!(email.match(regname)))
        {
            err.email="Please fill correct  email >3 char"

            // e.preventDefault();
        }
       else if(password=="")
        {
            err.password="Please fill password"
            // e.preventDefault();
        }
        else if(!(password.match(regpass)))
        {
            err.email="Please fill correct password >3 char & <10"

        }
        console.log(err);
        setFormerror(err)
    }

  return (
    <div>
        <h1>Edit</h1>
        <Form  className={styles.form1} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" name="email" value={email}  placeholder="Enter email" onChange={handleChange} />
        <span>{formerror.email}</span>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password} placeholder="Password" onChange={handleChange} />
        <span>{formerror.password}</span>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Edit