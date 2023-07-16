import { Container } from "react-bootstrap";
import LandingPage from "./LandingPage";
import ContenedorCategorias from "./ContenedorCategorias";
import FormularioBuscador from "./FormularioBuscador";

const PagPrincipal = () => {
    return (
        <Container>
            <LandingPage></LandingPage>
            <ContenedorCategorias></ContenedorCategorias>
            <FormularioBuscador></FormularioBuscador>
        </Container>
    );
};

export default PagPrincipal;