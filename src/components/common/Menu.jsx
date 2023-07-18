import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import "../../App.css";

const Menu = () => {
  return (
    <Navbar className="navbar-cristal pb-4" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
        <img src={logo} alt="Logo JSON" className="logoJSON" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-gourmet" />
        <Navbar.Collapse id="navbar-gourmet">
          <Nav className="ms-auto">
            <NavLink className="nav-item nav-link" to={"/"}>
              Inicio
            </NavLink>
            <NavLink className="nav-item nav-link" to={"/AcercaDe"}>
              Chefs
            </NavLink>
            <NavLink className="nav-item nav-link" to={"/404"}>
              Sucursales
            </NavLink>
            <NavDropdown title="Administrador" id="admin-dropdown">
              <NavDropdown.Item
                as={NavLink}
                to={"/administrador/productos"}
              >
                Productos
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to={"/administrador/usuarios"}
              >
                Usuarios
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to={"/administrador/pedidos"}
              >
                Pedidos
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="dark">Cerrar Sesion</Button>

            <NavLink className='nav-item nav-link'to={'/login'}>Iniciar sesion</NavLink>
            <NavLink className='nav-item nav-link'to={'/registro'}>Registrarse</NavLink>
     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
