import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import "./style/Navbar.scss"


export default function Header() {
  const [toggle, setToggle ] = useState(false)
  return(
    <div className="container-fluid">
      <div className="container">
        <Navbar className="Navbar" collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand className="Navbrand" href="#home">
            <img src="/logo.png" alt="Brand"></img>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="navCollapse" id="responsive-navbar-nav">
            <Nav className="midNav">
              <ul className ="navLinks">
                <li><a href="#">Home</a></li>

                <li><a href="#" className="dropdwon-After">Shop</a>
                  <ul className="dropdwon">
                    <li><a href="#">shop Category</a></li>
                    <li><a href="#">Product details</a></li>
                  </ul>
                </li>

                <li><a href="#" className="dropdwon-After">Pages</a>
                  <ul className="tallOne">
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Tracking</a></li>
                    <li><a href="#">prodact Chekout</a></li>
                    <li><a href="#">shoping Cart</a></li>
                    <li><a href="#">Confirmation</a></li>
                    <li><a href="#">Elements</a></li>
                  </ul>
                </li>

                <li><a href="#" className="dropdwon-After">Blog</a>
                  <ul className="dropdwon">
                    <li><a href="#">Elements</a></li>
                    <li><a href="#">single Blog</a></li>
                  </ul>
                </li>

                <li><a href="#">Contact</a></li>
              </ul>
            </Nav>
          </Navbar.Collapse>
          <Nav className="navIcon">
            <i class="fas fa-search"onClick={() =>setToggle(!toggle)}></i>
            <i class="far fa-heart"></i>
            <i class="fas fa-cart-plus"></i>
          </Nav>
        </Navbar>
        <>
          { toggle ?
          <div className="searchIcon">
            <input type="text" placeholder="Search Here" className="search"></input>
            <span><i class="fas fa-times" onClick={() =>setToggle(!toggle)}></i></span>
          </div>
          : null}
          </>
      </div>
    </div>
  )
}