import { Container } from "react-bootstrap";
import LandingPage from "./LandingPage";
import FormularioBuscador from "./FormularioBuscador";

const PagPrincipal = () => {

    return (
        <Container>
            <LandingPage></LandingPage>
            <FormularioBuscador></FormularioBuscador>
        </Container>
    );
};

export default PagPrincipal;