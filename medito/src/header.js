import React from 'react'
import a from "./logo1.png"



import search from './scan.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header(){
    
    return(

        <>
               <nav class="navbar navbar-light">
  <a class="navbar-brand" href="/">
    <img src={a}  height="30" alt=""></img>
  </a>
  <div className='search-bar'>
            <div className='data'>
            <input type='text' placeholder='You Can Search here' className='inputs form-control'></input>
            </div>
            <div className='png'>
            <img src={search} className='search'></img>
            </div>
        </div>




        <Navbar bg="white" data-bs-theme="white">
        <Container>
          
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
























</nav>
        
        
        </>

    );




}
export default Header;