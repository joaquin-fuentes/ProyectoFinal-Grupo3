import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Card, Form, Button } from 'react-bootstrap';
import '../../Registro.css';
import { crearUsuario } from "../../helpers/queries.js";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

const RegistroUsuarios = () => {
  const [formData, setFormData] = useState({
    nombreUsuario: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   

    crearUsuario(formData)
      .then((respuesta) => {
        if (respuesta.ok) {
          Swal.fire('Usuario creado', 'El usuario ha sido registrado correctamente', 'success');
        
        } else {
          Swal.fire('Error', 'No se pudo crear el usuario', 'error');
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire('Error', 'Hubo un error al crear el usuario', 'error');
      });
  };

  return (
    <Container className="mainSection">
      <Card className="my-5 cardPrincipal">
        <Card.Header as="h5" className='headLine'>Registro</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Nombre de Usuario</Form.Label>
              <Form.Control
                type="text"
                name="nombreUsuario"
                placeholder="Ingrese el nombre de usuario"
                value={formData.nombreUsuario}
                onChange={handleChange}
              />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Ingrese el email"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Mayor a 8 caracteres, debe tener una mayúscula y números"
                value={formData.password}
                onChange={handleChange}
              />
              <Form.Text className="text-danger"></Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" className='botonRegistrar'
              onMouseOver={(e) => (e.target.style.backgroundColor = "#654321")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#8c7851")}>
              Registrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RegistroUsuarios;
