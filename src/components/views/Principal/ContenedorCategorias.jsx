import { Container } from "react-bootstrap";
import Categoria from "./Categoria";

const ContenedorCategorias = () => {
    return (
        <Container fluid className="d-flex justify-content-between">
            <Categoria categoria="Categoria"></Categoria>
            <Categoria categoria="Categoria"></Categoria>
            <Categoria categoria="Categoria"></Categoria>
            <Categoria categoria="Categoria"></Categoria>
            <Categoria categoria="Categoria"></Categoria>
        </Container>
    );
};

export default ContenedorCategorias;