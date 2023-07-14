import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import ItemProducto from "./ItemProducto";
import { Link } from "react-router-dom";

const AdminProductos = () => {
  return (
    <Container className="mainSection my-4">
      <h1 className="display-4">Administrador de Productos</h1>
      <hr></hr>
      <Link to={'/administradorProductos/crear'}><Button className="btn btn-primary mb-3 rounded-pill">Agregar Producto</Button></Link>
      <section className="table-responsive">
        <Table bordered hover className="table-dark">
          <thead>
            <tr>
              <th>Nombre del Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <ItemProducto></ItemProducto>
          </tbody>
        </Table>
      </section>
    </Container>
  );
};

export default AdminProductos;
