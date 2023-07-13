import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import '../../App.css';

const Menu = () => {
  return (
    <Navbar className="navbar-cristal pb-4" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>JSONGourmet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink exact className='nav-item nav-link mx-5' activeClassName='active' to={'/'}>Inicio</NavLink>
            <NavLink className='nav-item nav-link mx-3' activeClassName='active' to={'*'}>Chefs</NavLink>
            <NavLink className='nav-item nav-link mx-5' activeClassName='active' to={'*'}>Sucursales</NavLink>
            <NavLink className='nav-item nav-link me-5' activeClassName='active' to={'/administrador'}>Administrador</NavLink>
            <Button variant="dark">Cerrar Sesion</Button>
            <NavLink className='nav-item nav-link' activeClassName='active' to={'/login'}>Iniciar sesion</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;