import React from 'react';
import { Container, Breadcrumb, Table, Button, Form } from "react-bootstrap"
import { BsFillTrashFill } from "react-icons/bs"
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const Pedido = () => {

    const [productosDelMenu, setProductosDelMenu] = useState([])
    const [nota, setNota] = useState("")
    const [usuario, setUsuario] = useState("")
    const [fecha, setFecha] = useState("")
    const [estado, setEstado] = useState("")

    useEffect(() => {
        // Obtener el array de nombres de productos desde la sessionStorage
        const productosGuardadosEnSession = JSON.parse(sessionStorage.getItem("productosEnPedido")) || [];
        setProductosDelMenu(productosGuardadosEnSession);
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const borrarProductoDelPedido = (index) => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Seguro que deseas eliminar el producto del pedido?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!',
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                // Copiar el array de productos para poder modificarlo
                const nuevosProductos = [...productosDelMenu];
                // Eliminar el producto específico del array usando el índice
                nuevosProductos.splice(index, 1);
                // Actualizar el estado local con el array actualizado
                setProductosDelMenu(nuevosProductos);
                // Guardar el array actualizado en la sessionStorage
                sessionStorage.setItem("productosEnPedido", JSON.stringify(nuevosProductos));
                Swal.fire(
                    'Eliminado!',
                    'El producto fue eliminado con exito!',
                    'success'
                  )
            }
        })

    };

    const onSubmit = (nota) => {
        console.log(nota)
    }
    const calcularTotal =()=>{
        let total = 0
        productosDelMenu.forEach((productoDelMenu)=>{
            total = total + +productoDelMenu.precio
        })
        return total
    }

    return (
        <Container className='mainSection my-3'>
            <h2>Pedido</h2>
            <hr />
            <div className='table-responsive'>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th className="text-center align-middle"></th>
                            <th className="text-center align-middle"></th>
                            <th className="text-center align-middle">Producto</th>
                            <th className="text-center align-middle">Precio</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            productosDelMenu.map((productoDelMenu, index) => {
                                return <tr key={index}>
                                    <td className="text-center align-middle"><Button variant="danger" type='button' onClick={() => borrarProductoDelPedido(index)}><BsFillTrashFill /></Button></td>
                                    <td className="text-center align-middle">
                                        <img className='imgTabla' src={productoDelMenu.imagen} alt="Sanguche de milanesa" />
                                    </td>
                                    <td className="text-center align-middle">{productoDelMenu.nombreProducto}</td>
                                    <td className="text-center align-middle">${productoDelMenu.precio}</td>
                                </tr>
                            })
                        }

                    </tbody>
                </Table>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Nota para el pedido (opcional):</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Ingrese una nota para el pedido si lo desea"
                        maxLength={100} {
                        ...register('nota', {
                            maxLength: {
                                value: 100,
                                message: "Este campo debe tener como maximo 100 caracteres"
                            },
                        })
                        } />
                    <Form.Text className="text-danger">
                        {errors.nota?.message}
                    </Form.Text>
                </Form.Group>
                <h3 className='my-2'>TOTAL PEDIDO: <span> ${calcularTotal()}</span></h3>

                <Button type='submit' variant="primary" size="lg" className='my-3'>
                    Realizar Pedido
                </Button>
            </Form>
            <Breadcrumb className='my-4'>
                <Breadcrumb.Item href="/">Volver a la página principal</Breadcrumb.Item>
            </Breadcrumb>
        </Container>
    );
};

export default Pedido;