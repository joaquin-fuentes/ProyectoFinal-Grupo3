import { Container } from "react-bootstrap";
import LandingPage from "./LandingPage";
import ContenedorCategorias from "./ContenedorCategorias";

const PagPrincipal = () => {
    return (
        <Container>
            <LandingPage></LandingPage>
            <ContenedorCategorias></ContenedorCategorias>
        </Container>
    );
};

export default PagPrincipal;