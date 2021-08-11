import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <>
  <Navbar className='fixed-top' bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Store</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#pricing"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
    )
}
export default Header;
