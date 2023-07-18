import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const EditarPedido = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();

    return (
        <Container className="mainSection my-4 border rounded border-5 border-secondary admin-formulario text-white">
      <h1 className="display-4 text-center">Editar Pedido</h1>
      <hr />
      <Form onSubmit={handleSubmit()}>
        <Form.Group className="mb-3 disabled" controlId="formUsuario">
          <Form.Label className="fs-4">Usuario</Form.Label>
          <Form.Control
            type="text"
            disabled
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPedido">
            <Form.Label className="fs-4">Pedido</Form.Label>
            <Form.Control as="textarea" rows={3} disabled
            ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFecha">
            <Form.Label className="fs-4">Fecha</Form.Label>
            <Form.Control type='date' disabled
            ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label className="fs-4">Estado*</Form.Label>
          <Form.Select aria-label="Estado" {...register("estado",{required: 'Debe elegir una opcion'})}>
            <option value=''>Seleccione una Categoria</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Realizado">Realizado</option>
            </Form.Select>
            <Form.Text className="text-danger">
            {errors.estado?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formNota'>
            <Form.Label className="fs-4">Nota*</Form.Label>
            <Form.Control as="textarea" rows={3} 
            {...register('nota',{
                minLength:{
                  value: 2,
                  message: 'La nota del pedido debe contener como mínimo 2 carácteres y debe empezar con la primera letra mayúscula'
                },
                maxLength:{
                  value: 30,
                  message: 'La nota debe tener como máximo 30 carácteres'
                },
                pattern:{
                  value: /^(?=.*[A-Z])[A-Za-z0-9:,.\s]{1,29}$/,
                  message: 'La nota debe ser corta entre 2 y 30 carácteres (puede usar letras, numeros y signos de puntuacion'
                }
              })}
            ></Form.Control>
            <Form.Text className="text-danger">
              {errors.nota?.message}
            </Form.Text>
        </Form.Group>
        <Button type="submit" className="btn btn-primary mb-2">Guardar Producto</Button>
      </Form>
    </Container>
    );
};

export default EditarPedido;