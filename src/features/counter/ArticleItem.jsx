import React from 'react'
import {Card,ListGroup} from 'react-bootstrap'
export default function ArticleItem(props) {
  return (
    <div className="home-container">
        <Card style={{ width: '18rem' }} id='card'>
            <Card.Img variant="top" src={`http://localhost:5000/img/${props.item.image}`}/>
            <Card.Body class="card-body-h">
                <Card.Title>{props.item.name+" "+props.item.lastname}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush" id='listarticle'>
                <ListGroup.Item><h6 >Car Model :</h6>{props.item.carModel}</ListGroup.Item>
                <ListGroup.Item><h6>Weight :</h6> {props.item.weight}KG</ListGroup.Item>
                <ListGroup.Item><h6>Prix :</h6> {props.item.prix}$</ListGroup.Item>
            </ListGroup>
            <Card.Body class="card-body-h" id='cardLink'>
                <Card.Link href={`/detail${props.item._id}`}>See Details</Card.Link>
            </Card.Body>
        </Card>
    </div>
  )
}
