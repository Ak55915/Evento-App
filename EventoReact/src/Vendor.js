import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { mystore } from './Store';
// import Header from './Header'

export default function Vendor() {
  let navigate =useNavigate();
  const Logout=()=>{
     mystore.dispatch({type : 'LOGGEDOUT'});
     localStorage.removeItem("loggedinuser");
     alert("in logout....");
      navigate("/");
  }
   
  return (
    <div>
      <Navbar bg="dark" variant="dark">
          <Container>        
          <Navbar.Brand href="#home" >EventoVendorHome</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/viewrequest">ViewRequest</Nav.Link>
            <Nav.Link href="/vendorupdate">UpdateInfo</Nav.Link>
            <Nav.Link onClick={Logout}>Logout</Nav.Link> 
          </Nav>
          </Container>
        </Navbar>
     </div>
  )
}
