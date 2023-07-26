import React from 'react';
import { Container, Breadcrumb, Table, Button, Form } from "react-bootstrap"
import { BsFillTrashFill } from "react-icons/bs"
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { crearPedido } from '../../helpers/queries';

const Pedido = () => {

    const [productosDelMenu, setProductosDelMenu] = useState([])
    const [nota, setNota] = useState("")
    const [usuario, setUsuario] = useState("")
    const [fecha, setFecha] = useState("")
    const [estado, setEstado] = useState("pendiente")
    const [pedido, setPedido] = useState({})

    useEffect(() => {
        // Obtener el array de productos desde la sessionStorage
        const productosGuardadosEnSession = JSON.parse(sessionStorage.getItem("productosEnPedido")) || [];
        // Realizar la transformación para guardar solo los atributos deseados
        const productosSimplificados = productosGuardadosEnSession.map((producto) => ({
            nombreProducto: producto.nombreProducto,
            imagen: producto.imagen,
            precio: producto.precio,
        }));
        // Establecer los productos simplificados en el estado local
        setProductosDelMenu(productosSimplificados);

        // Obtener el usuario desde la sessionStorage
        const usaurioEnSession = JSON.parse(sessionStorage.getItem("usuario")) || [];
        setUsuario(usaurioEnSession);
        obtenerFechaDeHoy()
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
        Swal.fire({
            title: 'Estás seguro?',
            text: "Seguro que desea realizar el pedido?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro!',
            cancelButtonText: 'Cancelar',

        }).then((result) => {
            if (result.isConfirmed) {
                // console.log(productosDelMenu)
                // console.log(usuario.nombreUsuario)
                // console.log(estado)
                // console.log(nota)
                // obtenerFechaDeHoy()
                // console.log(fecha)
                const nuevoPedido = {
                    productosDelMenu: productosDelMenu.map((producto) => ({
                        nombreProducto: producto.nombreProducto,
                        imagen: producto.imagen,
                        precio: producto.precio,
                    })),
                    usuario: usuario.nombreUsuario,
                    estado,
                    nota: nota.nota,
                    fecha,
                }; console.log(nuevoPedido)
                crearPedido(nuevoPedido).then((respuesta) => {
                    if (respuesta.status === 201) {
                        Swal.fire(
                            'Listo!',
                            'El pedido fue creado correctamente',
                            'success'
                        )
                        reset()
                    } else {
                        Swal.fire(
                            'Error!',
                            `No se pudo procesar su peticion`,
                            'error'
                        )
                    }
                })

            }
        })

    }
    const calcularTotal = () => {
        let total = 0
        productosDelMenu.forEach((productoDelMenu) => {
            total = total + +productoDelMenu.precio
        })
        return total
    }
    const obtenerFechaDeHoy = () => {
        const hoy = new Date();
        const dia = hoy.getDate();
        const mes = hoy.getMonth() + 1; // Los meses en JavaScript comienzan desde 0, por lo que se suma 1 para obtener el mes correcto.
        const anio = hoy.getFullYear();
        // Formatear la fecha como 'YYYY/MM/DD' (año/mes/día)
        const fechaHoy = `${anio}/${mes < 10 ? '0' + mes : mes}/${dia < 10 ? '0' + dia : dia}`;
        setFecha(fechaHoy)
    };


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