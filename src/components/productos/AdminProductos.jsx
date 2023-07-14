import React from 'react';
import { Container, Table } from 'react-bootstrap';
import ItemProducto from './ItemProducto';
const AdminProductos = () => {
    return (
        <Container className='mainSection my-4'>
        <h1 className='display-4'>Administrador de Productos</h1>
        <hr></hr>
        <section className='table-responsive'>
            <Table bordered hover className='table-dark'>
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