import React from 'react';
import { Container, Table } from 'react-bootstrap';
import ItemProducto from './ItemPedido';
const AdminPedidos = () => {
    return (
        <Container className='mainSection my-4'>
        <h1 className='display-4'>Administrador de Pedidos</h1>
        <hr></hr>
        <section className='table-responsive'>
            <Table bordered hover className='table-dark'>
                <thead>
                    <tr>
                        <th>Nombre del Cliente</th>
                        <th>Pedido</th>
                        <th>Cantidad</th>
                        <th>Total</th>
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

export default AdminPedidos;