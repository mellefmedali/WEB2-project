import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'
import CartButton from './CartButton';

function NavbarC() {
    return (
        <>
            <Navbar bg="light" expand="md" className="mb-3 pt-0 sticky-top shadow">
                <Container fluid>
                    <Link className='btn' to="/">
                        <img src='./images/icons/logo941x1147transparent.png' alt="logo50x60.jpg" height={'30px'} />
                        <span className='tw'>TWEMMAN</span>
                    </Link>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 gap-2">
                                <Link to="/sport" className='btn btn-outline-primary'>Sport</Link>
                                <Link to="/industrie" className='btn btn-outline-primary'>Industrie</Link>
                                <Link to="/decoration" className='btn btn-outline-primary'>Décoration</Link>
                                <Link to="/contact" className='btn btn-outline-primary'>Contact</Link>
                            </Nav>
                            <CartButton/>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    );
}

export default NavbarC;