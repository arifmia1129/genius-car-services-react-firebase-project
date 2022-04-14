import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from "../../../images/logo.png";
const Header = () => {
    const [user] = useAuthState(auth);
    const [githubUser] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img height={30} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#experts">Experts</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        {
                            githubUser || user ?
                                <button onClick={() => signOut(auth)} className='btn btn-outline text-white'>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                        }
                    </Nav>
                    {
                        (user || githubUser) && <p className='text-white mt-3'>{user.email || githubUser.displayName}</p>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;