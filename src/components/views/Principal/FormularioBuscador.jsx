import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import ContenedorComidas from "./ContenedorComidas";

const FormularioBuscador = () => {
  const [categoriaBuscada, setCategoriaBuscada] =  useState('')
  const [busqueda, setBusqueda] = useState('')

  return (
    <Container fluid className="my-5">
      <Form className="d-flex justify-content-center">
        <Form.Group controlId="buscador" className="buscador">
          <Form.Control
            type="text"
            placeholder="Encuentra tu comida favorita!"
            onInput={e => setBusqueda(e.target.value)}
            value={busqueda}
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
      <ContenedorComidas categoriaBuscada={categoriaBuscada} setCategoriaBuscada={setCategoriaBuscada} busqueda={busqueda}></ContenedorComidas>
    </Container>
  );
};

export default FormularioBuscador;
