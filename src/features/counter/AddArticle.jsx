import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function AddArticle() {

  const [article,setArticle]=useState({})

  const navigate = useNavigate

  async function addArticles(e){
    e.preventDefault()
    let obj={
      name:article.name,
      lastname:article.lastname,
      prix:article.prix,
      tel:article.tel,
      carModel:article.carModel,
      weight:article.weight,
      image:article.image,
    }
    await axios.post("http://localhost:5000/api/newArticle",obj)
window.location.href='/'  
}


  async function uploadFile(event){
    let data=new FormData()
    data.append("file",event.target.files[0])
    await axios.post("http://localhost:5000/api/upload",data).then((res)=>{
     setArticle({...article,image:res.data.filename}) 
    })
  }


  return (
    <div className="Auth-add-container">
    <div class="card-body">
      <Form className="Auth-form-add">
       <div className="Auth-add-content">
       <h3 className="Auth-form-title">Add Pack</h3>
      <Form.Group className="form-group mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name='name' onChange={(e)=>setArticle({...article,name:e.target.value})}/>
      </Form.Group>

      <Form.Group className=" form-group mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" name='lastname' onChange={(e)=>setArticle({...article,lastname:e.target.value})}/>
      </Form.Group>
     
      <Form.Group className="form-group mb-3">
        <Form.Label>Prix</Form.Label>
        <Form.Control type="number" placeholder="0" name='prix' onChange={(e)=>setArticle({...article,prix:e.target.value})}/>
      </Form.Group>

      <Form.Group className="form-group mb-3" controlId="formBasicPassword">
        <Form.Label>Tel</Form.Label>
        <Form.Control type="tel" placeholder="Enter tel" name='tel' onChange={(e)=>setArticle({...article,tel:e.target.value})}/>
      </Form.Group>

      <Form.Group className="form-group mb-3" controlId="formBasicPassword">
        <Form.Label>Car Model</Form.Label>
        <Form.Control type="text" placeholder="Enter car model" name='carModel' onChange={(e)=>setArticle({...article,carModel:e.target.value})}/>
      </Form.Group>

      <Form.Group className="form-group mb-3" controlId="formBasicPassword">
        <Form.Label>Weight</Form.Label>
        <Form.Control type="number" placeholder="0" name='weight' onChange={(e)=>setArticle({...article,weight:e.target.value})}/>
      </Form.Group>

      <Form.Group className="form-group mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="Enter Image" name='image' onChange={uploadFile}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e)=>{addArticles(e)}}>
        Add Article
      </Button>
      </div>
    </Form>
    </div>
    </div>
  )
}
