import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import { Link} from 'react-router-dom';
function NavbarHeader() {
  return (
    <Navbar expand="lg" className="bg-body-primary navigation">
      <Container>
      
        <Navbar.Brand href="#home" id="heading">NK PLANNERS &<br/>CONSTRUCTION</Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav navmenufl" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navmenu">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="project" id="basic-nav-dropdown" className="dropdown">
               
                    <NavDropdown.Item href="#action/3.1">Commercial</NavDropdown.Item>
               
              <NavDropdown.Item href="#action/3.2">
                Residential 
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Interior</NavDropdown.Item>
              </NavDropdown>
          
                  <Nav.Link>Plan</Nav.Link>
           
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;