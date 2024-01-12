import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function NavBar() {
  return (
    // <div >
    // <ol className='str'>
    //     <li><Link to={'/'}>Я</Link></li>
    //     <li><Link to={'/projects'}>Проекты</Link></li>
    //     <li><Link to={'/about'}>Обо мне</Link></li>
    //     <li><Link to={'/how'}>На чём я умею писать</Link></li>
        
    //     </ol>
      
    // </div>
    <>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Я</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/projects">Проекты</Nav.Link>
            <Nav.Link href="/about">Обо мне</Nav.Link>
            <Nav.Link href="/how">На чём я умею писать</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
