import React from 'react';
import { Container, Row, Col, Breadcrumb } from "react-bootstrap"

const DetalleProducto = () => {
    return (
        <Container className='mainSection my-3'>
          
            <h2>Detalle del producto</h2>
            <hr />
            <Row className="m-4">
                <Col xs={12} lg={6} className="text-center " >
                    <img src="https://fegasacruz.org/wp-content/uploads/2020/08/f7cbe0acb20add4be4804bc052302767.jpg" alt="imagen de milanesa con pure" className="w-100" />
                </Col>
                <Col xs={12} lg={6} >
                    <article className="p-2 py-md-0">
                        <h3>Milanesa con pure</h3>
                        <hr />
                        <p className="fw-bold ">Categoria: <span className="fw-normal">Al plato</span></p>
                        <p className="fw-bold ">Detalle: <span className="fw-normal"> Nuestra Milanesa con Puré es un plato
                            clásico y reconfortante que combina una jugosa milanesa de carne empanizada con un suave puré de papas casero.
                            La milanesa se sirve crujiente por fuera y tierna por dentro, mientras que el puré de papas es cremoso
                            y lleno de sabor. Cada bocado es una deliciosa combinación de texturas y sabores tradicionales que
                            te transportará a la cocina casera. Disfruta de esta opción satisfactoria y sabrosa que captura la esencia
                            de la cocina reconfortante en cada plato. Ven y déjate deleitar por nuestra Milanesa con Puré,
                            un clásico que nunca pasa de moda.</span></p>

                        <p className="fw-bold">Precio: <span className="fw-normal">$1500</span></p>


                    </article>
                </Col>
            </Row>
            <Breadcrumb>
                <Breadcrumb.Item href="/">Volver a la página principal</Breadcrumb.Item>
            </Breadcrumb>
        </Container>
    );
};

export default DetalleProducto;