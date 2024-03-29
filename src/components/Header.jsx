import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brasao from '../assets/brasao-watanabe.png';

function BasicExample() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary justify-content-between" >
      <Container>
        <Navbar.Brand href="/portfolio-web">
          <img
            src={brasao}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt='brasao-watanabe' 
          />
        </Navbar.Brand>
        Igor Watanabe
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav activeKey="/home">
            <Nav.Link href="/portfolio-web">Home</Nav.Link>
            <Nav.Link href="/portfolio-web/projects">Projects</Nav.Link>
            <Nav.Link href="/portfolio-web/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default BasicExample;
