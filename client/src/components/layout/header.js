import React from 'react'
import HeaaderTop from './HeaaderTop'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-scroll'
import './header.css'

function header() {
  return (
    <>
      <HeaaderTop />
      <Navbar fixed='top' collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Link to='slider'>
            <LinkContainer to='/'>
              <Navbar.Brand>
                <img
                  src='/images/logos/logo.png'
                  className='d-inline-block align-top '
                  alt='Paradise Group of Companies'
                  height='70'
                  width='150'
                />
              </Navbar.Brand>
            </LinkContainer>
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto text-center nav'>
              <Link to='slider'>
                <LinkContainer className='link-container' to='/'>
                  <Nav.Link className='navbar-link'>HOME</Nav.Link>
                </LinkContainer>
              </Link>

              <Link to='about'>
                <LinkContainer to='/'>
                  <Nav.Link className='navbar-link'>ABOUT US</Nav.Link>
                </LinkContainer>
              </Link>
              <Link to='services'>
                <LinkContainer to='/'>
                  <Nav.Link className='navbar-link'>SERVICES</Nav.Link>
                </LinkContainer>
              </Link>
              <Link to='companies'>
                <LinkContainer to='/'>
                  <Nav.Link className='navbar-link'>Our Companies</Nav.Link>
                </LinkContainer>
              </Link>

              <Link to='/'>
                <LinkContainer to='/info/blogs'>
                  <Nav.Link className='navbar-link' active>
                    BLOGS
                  </Nav.Link>
                </LinkContainer>
              </Link>

              <Link to='/'>
                <LinkContainer to='/info/career'>
                  <Nav.Link className='navbar-link' active>
                    Career
                  </Nav.Link>
                </LinkContainer>
              </Link>

              <Link to='contact'>
                <LinkContainer to='/'>
                  <Nav.Link className='navbar-link'>
                    <span className='contact-btn'>CONTACT US</span>
                  </Nav.Link>
                </LinkContainer>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default header
