import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Home from '../Home/Home'
import Pricing from '../Pricing/Pricing'
import Contact from '../Contact/Contact'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="md" >
                <Container className="w-100">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='w-75'>
                        <Nav>

                            <Nav.Item className="m-2">
                                <Nav.Link eventKey="1" as={NavLink} to="/Home" className="navbarlink">
                                    Home
                                </Nav.Link>
                            </Nav.Item>


                            <Nav.Item className="m-2">
                                <Nav.Link eventKey="2" as={NavLink} to="/Pricing" className="navbarlink">
                                    Pricing
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="m-2">
                                <Nav.Link eventKey="3" as={NavLink} to="/Contact" className="navbarlink">
                                    Contact
                                </Nav.Link>
                            </Nav.Item>

                        </Nav>

                    </Navbar.Collapse>

                    <Navbar.Brand href="/Home" className="w-25">
                        K O N T R A K O
                    </Navbar.Brand>

                </Container>
            </Navbar>



            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </div>
    )
}

export default Header