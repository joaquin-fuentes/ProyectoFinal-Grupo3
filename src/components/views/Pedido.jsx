import { Container, Breadcrumb, Table, Button, Form } from "react-bootstrap"
import { BsFillTrashFill } from "react-icons/bs"
import { set, useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { crearPedido, obtenerProductos } from '../../helpers/queries';

const Pedido = () => {
    const [productos, setProductos] = useState([])
    const [productosDelMenu, setProductosDelMenu] = useState([])
    const [nota, setNota] = useState("")
    const [usuario, setUsuario] = useState("")
    const [fecha, setFecha] = useState("")
    const [estado, setEstado] = useState(true)
    const [pedido, setPedido] = useState({})
    const [pedidoEnviado, setPedidoEnviado] = useState(false);


    useEffect(() => {
        const productosGuardadosEnSession = JSON.parse(sessionStorage.getItem('productosEnPedido')) || [];

        // Obtener los productos de la base de datos
        obtenerProductos().then((respuesta) => {
            if (respuesta) {
                setProductos(respuesta);

                // Filtrar los productos que coinciden con los IDs guardados en la sesión
                const productosEnMenu = [];
                productosGuardadosEnSession.forEach((idProducto) => {
                    const productosRepetidos = respuesta.filter((producto) => producto._id === idProducto);
                    productosEnMenu.push(...productosRepetidos);
                });

                // Actualizar el estado con los productos filtrados
                setProductosDelMenu(productosEnMenu);


            } else {
                Swal.fire(
                    'Se produjo un error al intentar cargar los datos',
                    'Intente realizar esta operación más tarde',
                    'error'
                );
            }
        });

        const usuarioEnSession = JSON.parse(sessionStorage.getItem('usuario')) || [];
        setUsuario(usuarioEnSession);
        obtenerFechaDeHoy();
    }, []);



    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const borrarProductoDelPedido = (index, idProducto) => {
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
                // Obtener el producto que se eliminará
                const productoEliminado = nuevosProductos[index];
                // Actualizar la cantidad del producto eliminado
                if (productoEliminado.cantidad > 1) {
                    productoEliminado.cantidad--;
                } else {
                    nuevosProductos.splice(index, 1); // Eliminar el producto si la cantidad llega a 0
                }
                // Actualizar el estado local con el array actualizado
                setProductosDelMenu(nuevosProductos);

                // Actualizar la sesión con los productos
                const productosGuardadosEnSession = JSON.parse(sessionStorage.getItem("productosEnPedido")) || [];
                const indexProductoEnSession = productosGuardadosEnSession.indexOf(idProducto);

                if (productoEliminado.cantidad > 0) {
                    productosGuardadosEnSession[indexProductoEnSession] = productoEliminado._id;
                } else {
                    productosGuardadosEnSession.splice(indexProductoEnSession, 1);
                }

                sessionStorage.setItem("productosEnPedido", JSON.stringify(productosGuardadosEnSession));

                Swal.fire(
                    'Eliminado!',
                    'El producto fue eliminado con éxito!',
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
                const nuevoPedido = {
                    productosDelMenu: productosDelMenu.map((producto) => producto._id), // Solo seleccionar el id de cada producto
                    usuario: usuario.uid,
                    estado,
                    nota: nota.nota,
                    fecha,
                    subTotal: calcularTotal()

                }; console.log(nuevoPedido)
                crearPedido(nuevoPedido).then((respuesta) => {
                    if (respuesta.status === 201) {
                        Swal.fire(
                            'Listo!',
                            'El pedido fue creado correctamente',
                            'success'
                        )
                        reset()
                        sessionStorage.removeItem("productosEnPedido");
                        setPedidoEnviado(true); // Establecer pedidoEnviado en true después del envío exitoso
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
        setFecha(hoy)
    };

    const mostrarFilas = () => {
        const productosAgrupados = {}; // Objeto para agrupar productos por su ID

        // Agrupar productos por su ID y contar repeticiones
        productosDelMenu.forEach(producto => {
            if (productosAgrupados[producto._id]) {
                productosAgrupados[producto._id].cantidad++;
            } else {
                productosAgrupados[producto._id] = {
                    ...producto,
                    cantidad: 1
                };
            }
        });

        return Object.values(productosAgrupados).map((producto, index) => (
            <tr key={index}>
                <td className="text-center align-middle">
                    <Button variant="danger" type="button" onClick={() => borrarProductoDelPedido(index, producto._id)}>
                        <BsFillTrashFill />
                    </Button>
                </td>
                <td className="text-center align-middle">
                    <img className="imgTabla" src={producto.imagen} alt={producto.nombreProducto} />
                </td>
                <td className="text-center align-middle">{producto.nombreProducto}</td>
                <td className="text-center align-middle">${producto.precio}</td>
                <td className="text-center align-middle">{producto.cantidad}</td>
                <td className="text-center align-middle">${producto.precio * producto.cantidad}</td>
            </tr>
        ));
    };


    return (
        <Container className='mainSection my-3'>
            <h2>Pedido</h2>
            <hr />
            {!pedidoEnviado && ( // Solo renderiza la tabla de productos si pedidoEnviado es false
                <div className='table-responsive'>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th className="text-center align-middle"></th>
                                <th className="text-center align-middle"></th>
                                <th className="text-center align-middle">Producto</th>
                                <th className="text-center align-middle">Precio Unitario</th>
                                <th className="text-center align-middle">Cantidad</th>
                                <th className="text-center align-middle">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mostrarFilas()}
                        </tbody>
                    </Table>
                </div>
            )}
            {pedidoEnviado ? ( // Muestra el mensaje cuando el pedido se envíe con éxito
                <div>
                    <h3>El pedido fue enviado con éxito.</h3>
                    <p>Gracias por su pedido.</p>
                </div>
            ) : (
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
                    {productosDelMenu.length ? (
                        <>
                            <Button type='submit' size="lg" className='my-3' id='btn-realizar-pedido'>
                                Realizar Pedido
                            </Button></>
                    ) : (
                        <>
                            <Button type='submit' size="lg" className='my-3 disabled' id='btn-realizar-pedido'>
                                Realizar Pedido
                            </Button>
                        </>
                    )}

                </Form>
            )}
            <Breadcrumb className='my-4'>
                <a href="/" className='volver-atras'>Volver</a>
            </Breadcrumb>
        </Container>
    );
};

export default Pedido;