import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTruck} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Navbar,Container,Nav,NavDropdown,Form,Button } from 'react-bootstrap'
import logo from '../../assest/logo demenagement.webp'


export default function Header(props) {
  return (
    <div class="header-t">
       <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{textAlign:'center'}}>
        <img
              src={logo}
              style={{width:'27%',borderRadius:'100%'}}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll 
            id='navlink'
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">AddPack</Nav.Link>
            <Nav.Link href="/register">
              SignUp
            </Nav.Link>
            <Nav.Link href="/log">
              Login
            </Nav.Link>
          </Nav>
          ({props.count})<FontAwesomeIcon icon={faTruck} style={{marginRight:'3%'}}/>
          <Form className="d-flex">
          
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>props.setSearch(e.target.value)}
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}
