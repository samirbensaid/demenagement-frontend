import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
export default function SignUp() {
const [user,setUser]=useState({})


async function addUser(e){
   e.preventDefault()
  let obj={
    name:user.name,
    lastname:user.lastname,
    email:user.email,
    password:user.password,
    tel:user.tel,
    address:user.address,
  }
  await axios.post("http://localhost:5000/api/register",obj)
}


  return (
    <div className="Auth-form-container">
    <div class="card-body">
      <Form className="Auth-form">
       <div className="Auth-form-content">
       <h3 className="Auth-form-title">Sign Up</h3>
       <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" name='name' onChange={(e)=>setUser({...user,name:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your last name" name='lastname' onChange={(e)=>setUser({...user,lastname:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e)=>setUser({...user,email:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={(e)=>setUser({...user,password:e.target.value})}/>
      </Form.Group>
    
      <Form.Group className="mb-3" >
        <Form.Label>Tel</Form.Label>
        <Form.Control type="tel" placeholder="Enter your Tel number" name='tel' onChange={(e)=>setUser({...user,tel:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter your address" name='address' onChange={(e)=>setUser({...user,address:e.target.value})}/>
      </Form.Group>
    <Button variant="primary" type="submit" onClick={(e)=>{addUser(e)}}>
        Submit
      </Button>
      <a href='/log' style={{marginLeft:'2%',textDecoration:'none'}}>You have an account ?</a>
      </div>
    </Form>
     </div>
    </div>
  )
}
