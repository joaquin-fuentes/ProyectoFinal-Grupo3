import React from 'react';
import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerProducto } from "../../helpers/queries"

const DetalleProducto = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState({})

    useEffect(() => {
        obtenerProducto(id).then((respuesta) => {
            setProducto(respuesta)
        })

    }, [])


    return (
        <Container className='mainSection my-3'>

            <h2>Detalle del producto</h2>
            <hr />
            <Row className="m-4">
                <Col xs={12} lg={6} className="text-center " >
                    <img src={producto.imagen} alt="imagen de milanesa con pure" className="w-100" />
                </Col>
                <Col xs={12} lg={6} >
                    <article className="p-2 py-md-0">
                        <h3>{producto.nombreProducto}</h3>
                        <hr />
                        <p className="fw-bold ">Categoria: <span className="fw-normal">{producto.categoria}</span></p>
                        <p className="fw-bold ">Detalle: <span className="fw-normal"> {producto.detalle}</span></p>

                        <p className="fw-bold">Precio: <span className="fw-normal">${producto.precio}</span></p>
                        <Link id="btn-comida" className="btn w-100">
                            Agregar al pedido
                        </Link>

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