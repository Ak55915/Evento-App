import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { mystore } from "./Store";


export default function Header(){
  const [flag, setFlag] = useState(false);
  
  mystore.subscribe(() => {
    setFlag( mystore.getState().loggedin );
  }); 
  console.log("header flag :"+flag);
    return(
        <>
        <Navbar bg="dark" variant="dark" style={{display: flag?'none':'block'}}s>
          <Container>
          <Navbar.Brand href="#home" >Evento</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/customerregister">Register</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      
       
      </>
      


    )

   
}