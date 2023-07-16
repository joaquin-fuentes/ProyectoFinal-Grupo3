import React from 'react';
import { Container, Breadcrumb, Table, Button } from "react-bootstrap"
import { BsFillTrashFill } from "react-icons/bs"

const Pedido = () => {
    return (
        <Container className='mainSection my-3'>
            <h2>Pedido</h2>
            <hr />
            <div className='table-responsive'>
            <Table  striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th className="text-center align-middle"></th>
                        <th className="text-center align-middle"></th>
                        <th className="text-center align-middle">Producto</th>
                        <th className="text-center align-middle">Precio</th>
                        <th className="text-center align-middle">Cantidad</th>
                        <th className="text-center align-middle">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center align-middle"><Button variant="danger"><BsFillTrashFill /></Button></td>
                        <td className='text-center align-middle'>
                            <img className='imgTabla' src="https://fegasacruz.org/wp-content/uploads/2020/08/f7cbe0acb20add4be4804bc052302767.jpg" alt="Milanesa con pure" />
                        </td>
                        <td className="text-center align-middle">Milanesa con puré</td>
                        <td className="text-center align-middle">$1500</td>
                        <td className="contenedorCantidad text-center align-middle d-flex justify-content-center align-items-center ">
                            <Button variant='outline-danger' className='m-2'>-</Button>
                            <div>2</div>
                            <Button variant='outline-primary' className='m-2'>+</Button>

                        </td>
                        <td className="text-center align-middle">$3000</td>
                    </tr>
                    <tr>
                        <td className="text-center align-middle"><Button variant="danger"><BsFillTrashFill /></Button></td>
                        <td className="text-center align-middle">
                            <img className='imgTabla' src="https://miro.medium.com/v2/resize:fit:1200/1*F8l4EawhVuNF_EsS1evv6w.jpeg" alt="Sanguche de milanesa" />
                        </td>
                        <td className="text-center align-middle">Sanguche de milanesa</td>
                        <td className="text-center align-middle">$1200</td>
                        <td className="contenedorCantidad text-center align-middle d-flex justify-content-center align-items-center ">
                            <Button variant='outline-danger' className='m-2'>-</Button>
                            <div>1</div>
                            <Button variant='outline-primary' className='m-2'>+</Button>

                        </td>
                        <td className="text-center align-middle">$1200</td>
                    </tr>
                    <tr>
                        <td className="text-center align-middle"><Button variant="danger"><BsFillTrashFill /></Button></td>
                        <td className="text-center align-middle">
                            <img className='imgTabla' src="https://www.cocinavital.mx/wp-content/uploads/2017/10/ravioles-en-salsa-de-pimienta-1.jpg" alt="Ravioles con salsa" />
                        </td>
                        <td className="text-center align-middle">Ravioles con salsa roja</td>
                        <td className="text-center align-middle">$1300</td>
                        <td className="contenedorCantidad text-center align-middle d-flex justify-content-center align-items-center ">
                            <Button variant='outline-danger' className='m-2'>-</Button>
                            <div>1</div>
                            <Button variant='outline-primary' className='m-2'>+</Button>

                        </td>
                        <td className="text-center align-middle">$1300</td>
                    </tr>
                </tbody>
            </Table>
            </div>
            <h3 className='my-2'>TOTAL PEDIDO: <span> $5500</span></h3>
            <Button variant="primary" size="lg" className='my-3'>
                Realizar Pedido
            </Button>
            <Breadcrumb className='my-4'>
                <Breadcrumb.Item href="/">Volver a la página principal</Breadcrumb.Item>
            </Breadcrumb>
        </Container>
    );
};

export default Pedido;