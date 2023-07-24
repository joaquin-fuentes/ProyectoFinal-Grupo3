import { Link } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import { FaSquareXmark} from "react-icons/fa6";
import { HiX } from "react-icons/hi";
import Swal from "sweetalert2";
import { borrarPedido } from "../../helpers/queries";

const ItemPedido = ({ pedido, setPedidos }) => {

  const calcularTotal = () => {
    let total = 0;
    pedido.productos.forEach((producto) => {
      const precioTotalProducto = parseInt(producto.precio) * parseInt(producto.cantidad);
      total += precioTotalProducto;
    });
    return total;
  };

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
      <Card className="mt-3">
        <Card.Header className="colorCard">
          <span className="d-flex justify-content-end">
            <Button variant="danger">
              <HiX className="fs-4"></HiX>
            </Button>
          </span>
          <h3 className="text-start">Pedido</h3>
        </Card.Header>
        <Card.Body className="colorCard">
          <h6>Nombre de Usuario: {pedido.usuario}</h6>
          <h6>Pedido:</h6>
          <ul className="ps-5">
            {pedido.productos.map((producto, index) => (
              <li key={index}>{producto.cantidad} {producto.nombreProducto}</li>
            ))}
          </ul>
          <h6 className="text-end">Total: ${calcularTotal()}</h6>
        </Card.Body>
        <Card.Footer className="justify-content-end d-flex colorCard">
          <Button className="disabled btn-secondary me-md-2">
            Pendiente...
          </Button>
          <Button className="btn-success">Realizado</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ItemPedido;
