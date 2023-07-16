import { Container, Form, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs/index.esm";

const FormularioBuscador = () => {
  return (
    <Container fluid className="my-5">
      <Form className="d-flex justify-content-center">
        <Form.Group controlId="buscador" className="buscador">
          <Form.Control
            type="text"
            placeholder="Encuentra tu comida favorita!"
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="ms-2"
          id="btn-buscador"
        >
          <BsSearch></BsSearch>
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioBuscador;
