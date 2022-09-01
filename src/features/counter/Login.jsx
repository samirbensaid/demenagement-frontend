import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
export default function Login() {
  const [user,setUser]=useState({})


  async function login(e){
    e.preventDefault()
    let obj={
      email:user.email,
      password:user.password,
    }
    await axios.post("http://localhost:5000/api/log",obj)
    .then((res) => {
      console.log(res.data.token);
      let userToken = "Bearer " + res.data.token;
      localStorage.setItem("token", JSON.stringify({ token: userToken }));
    });
  }
  return (
    <div className="Auth-form-container">
      <div class="card-body">
        <Form className="Auth-form">
         <div className="Auth-form-content">
         <h3 className="Auth-form-title">Sign In</h3>
          <Form.Group className="form-group mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e)=>setUser({...user,email:e.target.value})}/>
          </Form.Group>

          <Form.Group className="form-group mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' onChange={(e)=>setUser({...user,password:e.target.value})}/>
          </Form.Group>
          
          <Button variant="primary" type="submit" onClick={(e)=>{login(e)}}>
            Submit
          </Button>
          <a href='/register' style={{marginLeft:'2%',textDecoration:'none'}}>Register</a>
          </div>
        </Form>
      </div>
    </div>
  )
}
