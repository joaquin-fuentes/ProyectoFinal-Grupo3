import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaSquareXmark, FaPenToSquare } from "react-icons/fa6";

const ItemUsuario = () => {
  return (
    <tr>
      <td>Juan Perez</td>
      <td>juanperez@gmail.com</td>
      <td>Normal</td>
      <td>
        <Link
          className="btn btn-warning mb-2 mb-md-0"
          to={`/administradorProductos/editar`}
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

export default ItemUsuario;
