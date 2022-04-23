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
    const [fbUser] = useAuthState(auth);
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
                    </Nav>

                    <Nav>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                        {
                            user &&

                            <>
                                <Nav.Link as={Link} to="manageservice">Manage</Nav.Link> <Nav.Link as={Link} to="addservice">Add</Nav.Link>
                            </>
                        }
                        {
                            (user || githubUser || fbUser) && <p className='text-white mt-3'>{user?.displayName || githubUser?.displayName || fbUser?.displayName}</p>
                        }

                        {
                            fbUser && <img style={{ borderRadius: "50%", width: "30px", height: "30px" }} className='mx-2' src={fbUser.photoURL} alt="" />
                        }
                        {
                            githubUser || user ?
                                <button onClick={() => signOut(auth)} className='btn btn-outline text-white'>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                    Login
                                </Nav.Link>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;