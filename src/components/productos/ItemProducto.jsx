import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaSquareXmark, FaPenToSquare } from "react-icons/fa6";

const ItemProducto = () => {
  return (
    <tr>
      <td>Milanesa con Papas Fritas</td>
      <td>$2000</td>
      <td>10</td>
      <td>Al Plato</td>
      <td>
        <Link
          className="btn btn-warning mb-2 mb-md-0"
          to={`/administrador/editar`}
        >
          <FaPenToSquare className="fs-4"></FaPenToSquare>
        </Link>
        <Button className="ms-md-2" variant="danger">
          <FaSquareXmark className="fs-4"></FaSquareXmark>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
