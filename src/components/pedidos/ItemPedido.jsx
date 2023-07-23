import { Link } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import { FaSquareXmark, FaPenToSquare } from "react-icons/fa6";
import { BsFillPinAngleFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { borrarPedido } from "../../helpers/queries";

const ItemPedido = ({ pedido, setPedidos }) => {
  const eliminarPedido = () => {
    Swal.fire({
      title: "¿Esta seguro de eliminar el pedido?",
      text: "Una vez borrado no se puede recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //aqui tengo que hacer la peticion delete
        borrarPedido(pedido.id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire(
              "Pedido Eliminado",
              `El Pedido del usuario ${pedido.usuario} fue eliminado`,
              "success"
            );
            ///obtenerPedidos().then((respuesta) => {
            setPedidos(respuesta);
            //})
          } else {
            Swal.fire("Se produjo un error", "Intentelo mas tarde", "error");
          }
        });
      }
    });
  };

  return (
    <Col xs={12} md={6} lg={6}>
      <Card className="mt-3 colorCardCuerpo">
        <Card.Header className="colorCard">
          <span className="d-flex justify-content-end">
            <Button variant="danger">
              <FaSquareXmark className="fs-4"></FaSquareXmark>
            </Button>
          </span>
          <h3 className="text-start">Pedido</h3>
        </Card.Header>
        <Card.Body className="colorCardCuerpo">
          <h6>Nombre de Usuario: Juan Perez</h6>
          <h6>Pedido:</h6>
          <ul className="ms-4">
            <li>2 Milanesa Napolitanas con Papas Fritas</li>
            <li>1 Gaseosa</li>
          </ul>
        </Card.Body>
        <Card.Footer className="justify-content-end d-flex colorCard">
          <Button className="disabled btn-secondary me-md-2">
            Pendiente...
          </Button>
          <Button variant="outline-success text-light">Realizado</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ItemPedido;
