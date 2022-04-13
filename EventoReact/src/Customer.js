import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import { mystore } from './Store';


export default function Customer() {
  let navigate =useNavigate();
  const Logout=()=>{
     mystore.dispatch({type : 'LOGGEDOUT'});
     localStorage.removeItem("loggedinuser");
     alert("in logout....");
      navigate("/");
   }
  return (
    <>
        <div>
        
        <Navbar bg="primary" variant="dark">
          <Container>        
          <Navbar.Brand href="#home"  >EventoCustomerHome</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/eventrequest">AddRequest</Nav.Link>
            <Nav.Link href="/updatecustinfo">UpdateInfo</Nav.Link>
            <Nav.Link onClick={Logout}>Logout</Nav.Link> 
          </Nav>
      </Container>
        </Navbar>
        </div>
      
       
      </>
  )
}
