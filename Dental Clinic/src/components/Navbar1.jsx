import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from "react-redux";
import { userData, userout } from "../layout/userSlice";

export const Navbar1 = () => {

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userout({credentials: {}, token: ""}))
    }

    const datosCredentialsRdx = useSelector(userData);

    return (



        <Navbar bg="dark" expand="lg" variant="dark">
    <Container>
        <Navbar.Brand href="#home">Dental Studio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            {!datosCredentialsRdx.credentials.usuario ? (
                //si estoy logueada me aparece esto:
            <>

            <Nav.Link as={Link}to="/register">Register</Nav.Link>
            <Nav.Link as={Link}to="/login">Login</Nav.Link>
            <Nav.Link as={Link}to="/home">Home</Nav.Link>
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
            </>

            ): datosCredentialsRdx.credentials.usuario.roles.includes('User') ? (
                <>
    
                <Nav.Link as={Link}to="/about">About</Nav.Link> 
                <Nav.Link onClick= {logout} as={Link}to="/home">Logout</Nav.Link>
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
                </> 
            ): datosCredentialsRdx.credentials.usuario.roles.includes('Doctor') ?(
                <>
    
                <Nav.Link as={Link}to="/detail">Detail</Nav.Link>
                <Nav.Link as={Link}to="/about">About</Nav.Link> 
                <Nav.Link onClick= {logout} as={Link}to="/home">Logout</Nav.Link>
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
                </> 
                ): datosCredentialsRdx.credentials.usuario.roles.includes('Admin') ?(
                
                <>
                    <Nav.Link as={Link}to="/detail">Detail</Nav.Link>
                    <Nav.Link as={Link}to="/about">About</Nav.Link> 
                    <Nav.Link onClick= {logout} as={Link}to="/home">Logout</Nav.Link>
                    <Nav.Link as={Link}to="/userDetails">UserDetails</Nav.Link>
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
                    </> 
                    
                    )
                    : ( <Nav.Link onClick= {logout} as={Link}to="/home">Logout</Nav.Link>)}
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

