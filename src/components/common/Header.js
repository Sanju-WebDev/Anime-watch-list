import React, { useState, useEffect } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, 
    Row, 
    Col,
    Button, 
  } from 'reactstrap';
  import {Link} from 'react-router-dom'

function Header() {

const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

    return (
        <Row className= "header mb-5 p-5">
            <Col sm= {{ size: "auto" }} md= {{ size: "auto", offset: 2 }}>
                {/* <h1>My Anime History</h1> */}
                <Navbar color="light" light expand="md" fixed= "top">
                    <NavbarBrand href="/" tag= "h1"><h1>My Anime History</h1></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="/" className= "h5">Anime List</NavLink>
                        </NavItem>                        
                    </Nav>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="/add-anime/" className= "h5">Add Anime</NavLink>
                        </NavItem>                        
                    </Nav>
                    </Collapse>
                    <NavbarText>
                        <Link to= "/signin">
                        <Button size= "lg" color= "primary">
                            Sign In
                        </Button>
                        </Link>
                    </NavbarText>
                </Navbar>
            </Col>
        </Row>
    )
}

export default Header
