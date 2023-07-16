import {
  Container,
  CardGroup,
  Row,
} from "react-bootstrap";
import Comida from "./Comida";

const ContenedorComidas = () => {
  return (
    <Container className="my-5">
      <CardGroup>
        <Row xs={1} md={2} lg={3}>
         <Comida></Comida>
         <Comida></Comida>
         <Comida></Comida>
         <Comida></Comida>
         <Comida></Comida>
         <Comida></Comida>
        </Row>
      </CardGroup>
    </Container>
  );
};

export default ContenedorComidas;
