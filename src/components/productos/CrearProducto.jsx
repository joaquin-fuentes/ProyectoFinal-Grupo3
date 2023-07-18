import React from "react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CrearProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formProducto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Milanesa con Papas Fritas"
            {...register("producto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message:
                  "El nombre del producto debe contener como mínimo 2 carácteres",
              },
              maxLength: {
                value: 50,
                message:
                  "El nombre del producto debe contener como máximo 50 carácteres",
              },
              pattern: {
                value: /^[A-Z][A-Za-z\s0-9]{1,49}$/,
                message:
                  "El nombre del producto solo puede contener letras y numeros entre 2 y 50 carácteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.producto?.message}
          </Form.Text>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default CrearProducto;
