import React,{useState,useEffect} from 'react'
import {Card,Button,Form,ListGroup} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import axios from 'axios'
export default function Detail(props) {
  const location =useParams()
  const [detail,setDetail]=useState([])
  const [input,setInput]=useState('')
  const [commente,setCommnete]=useState([])
  async function displayDetails(){
    let res=await fetch("http://localhost:5000/api/display/:"+location.id)
    let json=await res.json()
    console.log(json);
    setDetail(json.chaufeur)
  }

  useEffect(()=>{displayDetails()},[input])
console.log(location);

async function addComment(e){
e.preventDefault()
  await axios.post('http://localhost:5000/api/addComment/'+location.id,{comment:input})
}


async function displayComment(){
  let res=await fetch('http://localhost:5000/api/display/'+location)
  let json= await res.json()
  setCommnete(json.chaufeur.comment)
}

  return (
    <div>
{
  detail.map((elem,i)=>{
    return(

  
<Card className="text-center">
      <Card.Header>
      <Card.Img variant="top" src={`http://localhost:5000/img/${elem.image}`} style={{width:'50%'}}/>
      </Card.Header>
      <Card.Body>
        <Card.Title>{elem.name+" "+elem.lastname}</Card.Title>
        <Card.Text>
          Car Model :{elem.carModel}
        </Card.Text>
        <Card.Text>
          Car Weight :{elem.weight} KG
        </Card.Text>
        <Card.Text>
          Prix :{elem.prix} $
        </Card.Text>
        <Button variant="primary" onClick={()=>props.Confirm()}>Confirm </Button>{/*add panier*/}
      </Card.Body>
      <Card.Footer className="text-muted" style={{paddingTop:'2%'}}>
      <ul>
        {
          elem.comment.map((item)=>{
            console.log(item.comment)
            return(

         
      <li>{item.comment}</li>
      )
    })
          }
    </ul>
      </Card.Footer>
    
    
  
    </Card>
    

      )
    })
}

<Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Add Comment</Form.Label>
        <Form.Control type="text" placeholder="Enter Comment" name='comment' onChange={(e)=>setInput(e.target.value)}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={(e)=>{addComment(e)}}>
        Add
      </Button>
    </Form>
    </div>
  )
}
