import { Container } from "react-bootstrap";
import LandingPage from "./LandingPage";
import ContenedorCategorias from "./ContenedorCategorias";
import FormularioBuscador from "./FormularioBuscador";
import ContenedorComidas from "./ContenedorComidas";

const PagPrincipal = () => {
    return (
        <Container>
            <LandingPage></LandingPage>
            <ContenedorCategorias></ContenedorCategorias>
            <FormularioBuscador></FormularioBuscador>
            <ContenedorComidas></ContenedorComidas>
        </Container>
    );
};

export default PagPrincipal;