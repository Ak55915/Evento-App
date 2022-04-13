import React from 'react'
import { Container, Nav, Navbar, } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { mystore } from './Store';
// import Header from './Header'

export default function Admin() {
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
        <Navbar bg="dark" variant="dark">
          <Container>        
          <Navbar.Brand href="#home" >EventoAdminHome</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/addevent">AddNewEvent</Nav.Link>
            <Nav.Link href="/vendorreg">AddVendor</Nav.Link>
            <Nav.Link href="/report">ViewReport</Nav.Link>
            <Nav.Link href="" onClick={Logout}>Logout</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
         </div>
     
     </>
  )
}
