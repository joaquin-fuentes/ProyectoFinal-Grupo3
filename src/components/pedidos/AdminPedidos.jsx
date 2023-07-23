import { Container, Row} from "react-bootstrap";
import ItemPedido from "./ItemPedido";

const AdminPedidos = () => {
  return (
    <Container className="mainSection my-4">
      <h1 className="display-4">Administrador de Pedidos</h1>
      <hr></hr>
        <Row>
            <ItemPedido></ItemPedido>
            <ItemPedido></ItemPedido>
            <ItemPedido></ItemPedido>
            <ItemPedido></ItemPedido>
        </Row>
    </Container>
  );
};

export default AdminPedidos;
