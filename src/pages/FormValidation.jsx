import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../style/form.module.css'
import React from 'react'
import { useState } from 'react';

const FormValidation = () => {
    const [state,setState] =useState({username:'',userpass:''});
    const{username , userpass} = state;
    const [formerror,setFormerror]=useState({});
    const handleChange =(e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        const {name,value}=e.target;
        setState({...state,[name]:value});
    }
    const handleSubmit=(e)=>{
        console.log("button clicked");
       const  err={};
       let regname = /^[a-zA-Z0-9@_.]{3,}$/;
       let regpass = /^[a-zA-Z0-9@_.]{3,10}$/
        if(username=="")
        {
            err.username="Please fill username"
            e.preventDefault();
        }
        else if(!(username.match(regname)))
        {
            err.username="Please fill correct  username >3 char"

            e.preventDefault();
        }
       else if(userpass=="")
        {
            err.userpass="Please fill userpass"
            e.preventDefault();
        }
        else if(!(userpass.match(regpass)))
        {
            err.username="Please fill correct userpass >3 char & <10"

            e.preventDefault();
        }
        console.log(err);
        setFormerror(err)
    }
  return (
    <div>
        <h1>FormValidation</h1>
        <h1>username:-{username}</h1>
        <h1>userpass :-{userpass} </h1>
        <Form  className={styles.form1} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" name="username" value={username} placeholder="Enter email" onChange={handleChange} />
        <span>{formerror.username}</span>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="userpass" value={userpass} placeholder="Password" onChange={handleChange} />
        <span>{formerror.userpass}</span>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default FormValidation