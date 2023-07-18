import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
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
            <NavLink className='nav-item nav-link' to={'/'}>Inicio</NavLink>
            <NavLink className='nav-item nav-link' to={'/AcercaDe'}>Chefs</NavLink>
            <NavLink className='nav-item nav-link' to={'/404'}>Sucursales</NavLink>
            <NavDropdown title="Administrador" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to={'/administrador'}>Productos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={'/administrador/usuarios'}>Usuarios</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={'/administrador/pedidos'}>Pedidos</NavDropdown.Item>
            </NavDropdown>
            <Button variant="dark">Cerrar Sesion</Button>
            <NavLink className='nav-item nav-link'to={'/login'}>Iniciar sesion</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
