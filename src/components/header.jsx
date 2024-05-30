import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/header.css';
function Header() {
  return (
    <Navbar expand="lg" className="header-container">
      <Container>
        <Navbar.Brand href="/"><img className="logo" src="/image/logo/logo192.png" alt="WebX.com" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#">Service</Nav.Link>

            <NavDropdown title="Credentials" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">login</NavDropdown.Item>
              <NavDropdown.Item href="/forgot-password">
                Forgot Password
              </NavDropdown.Item>
              <NavDropdown.Item href="/register">Sign Up</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/terms-and-condition">
              Terms & Condition
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;