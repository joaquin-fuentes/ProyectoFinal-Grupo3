import { useEffect } from "react";
import { useState } from "react";
import { Container, Row} from "react-bootstrap";
import { obtenerPedidos } from "../../helpers/queries";
import ItemPedido from "./ItemPedido";

const AdminPedidos = () => {

  const [pedidos, setPedidos] = useState([]);

  useEffect(()=>{
    obtenerPedidos().then((respuesta)=>{
      setPedidos(respuesta);
    })
  }, [])

  return (
    <Container className="mainSection my-4">
      <h1 className="display-4">Administrador de Pedidos</h1>
      <hr></hr>
        <Row>
          {
            pedidos.map((pedido)=> <ItemPedido key={pedido.id} pedido={pedido} setPedidos={setPedidos}></ItemPedido>)
          }
        </Row>
    </Container>
  );
};

export default AdminPedidos;
