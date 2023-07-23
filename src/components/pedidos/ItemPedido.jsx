import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaSquareXmark, FaPenToSquare } from "react-icons/fa6";
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
    <tr>
      <td>Juan Perez</td>
      <td>Milanesas con papas fritas</td>
      <td>2</td>
      <td>$3000</td>
      <td>
        <Link
          className="btn btn-warning mb-2 mb-md-0"
          to={`/administrador/pedidos/editar`}
        >
          <FaPenToSquare className="fs-4"></FaPenToSquare>
        </Link>
        <Button className="ms-md-2" variant="danger">
          <FaSquareXmark
            className="fs-4"
            onClick={eliminarPedido}
          ></FaSquareXmark>
        </Button>
      </td>
    </tr>
  );
};

export default ItemPedido;
