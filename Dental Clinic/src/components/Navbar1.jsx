import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Navbar1 = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
        <Navbar.Brand href="#home">Dental Studio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={Link}to="/register">Register</Nav.Link>
            <Nav.Link as={Link}to="/login">Login</Nav.Link>
            <Nav.Link as={Link}to="/home">Home</Nav.Link>
            <Nav.Link as={Link}to="/detail">Detail</Nav.Link>
            <Nav.Link as={Link}to="/about">About</Nav.Link>
            <NavDropdown title="Dental treatments" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Invisible orthodontics</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Dental cleaning
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Teeth whitening</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                login
            </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
