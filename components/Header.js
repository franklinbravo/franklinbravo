import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Head from 'next/head'
export const Header = ({ showHeader }) => {
  const [open, setOpen] = useState(false)
  return (
    <Navbar fixed="top" expand="lg" expanded={open} onToggle={(v) => { setOpen(v) }} className={`header ${open || showHeader ? "toggleNavbar" : "toggleNavbarOff"}`} >
      <Container className="mt-1" >
        <Head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,800;0,900;1,900&display=swap" rel="stylesheet"></link>
          <title>Franklin Bravo 🚀</title>
        </Head>
        <div href="#home" className={`ml-2 brand ${open || showHeader ? "toggleBrand" : "toggleBrandOff"}`} >Franklin Bravo</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link className="ml-3" href="#home" onClick={() => setOpen(false)}>Home</Nav.Link>
            <Nav.Link className="ml-3" href="#skills" onClick={() => setOpen(false)}>Skills</Nav.Link>
            <Nav.Link className="ml-3" href="#contact" onClick={() => setOpen(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
