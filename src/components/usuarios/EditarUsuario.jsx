import React from 'react';
import { useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { consultaEditarUsuario, obtenerUsuario } from "../../helpers/queries";

const EditarUsuario = () => {
  const {id} = useParams();
  const navegacion = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  useEffect(()=>{
    obtenerUsuario(id).then((respuesta)=>{
      console.log(respuesta);
      setValue('nombreUsuario',respuesta.nombreUsuario);
      setValue('emailUsuario',respuesta.email);
      setValue('perfil',respuesta.rol);
    })
  }, [])

  const onSubmit = (usuarioEditado) =>{
    console.log(usuarioEditado);
    consultaEditarUsuario(usuarioEditado, id).then((respuesta)=>{
        if (respuesta) {
            if (respuesta.status === 200) {
                Swal.fire('Usuario actualizado', `El Usuario: ${usuarioEditado.nombreUsuario} fue editado correctamente`, 'success');
                navegacion('/admin');
            }else{
                Swal.fire('Se produjo un error', `El Usuario: ${usuarioEditado.nombreUsuario} no fue editado, intentelo mas tarde`, 'error');
            }
        }else{
            Swal.fire('Se produjo un error', `El Usuario: ${usuarioEditado.nombreUsuario} no fue editado, intentelo mas tarde`, 'error');
        }
        
    })
  }

  return (
    <Container className="mainSection my-4 border rounded border-5 border-secondary admin-formulario text-white">
      <h1 className="display-4 text-center">Editar Usuario</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 disabled" controlId="formUsuario">
          <Form.Label className="fs-4">Nombre de Usuario</Form.Label>
          <Form.Control type="text" disabled {...register("nombreUsuario")}></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3 disabled" controlId="formUsuario">
          <Form.Label className="fs-4">Email</Form.Label>
          <Form.Control type="text" disabled {...register("emailUsuario")}></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEstado">
          <Form.Label className="fs-4">Estado de la cuenta*</Form.Label>
          <Form.Select
            aria-label="Estado"
            {...register("estado", { required: "Debe elegir una opcion" })}
          >
            <option value="">Seleccione el estado de la cuenta</option>
            <option value="Habilitada">Habilitada</option>
            <option value="Suspendida">Suspendida</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.estado?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPerfil">
          <Form.Label className="fs-4">Perfil del Usuario*</Form.Label>
          <Form.Select
            aria-label="Perfil"
            {...register("perfil", { required: "Debe elegir una opcion" })}
          >
            <option value="">Seleccione el perfil del usuario</option>
            <option value="Cliente">Cliente</option>
            <option value="Administrador">Administrador</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.perfil?.message}
          </Form.Text>
        </Form.Group>
        <Button type="submit" className="btn btn-warning mb-2">
          Guardar Cambios
        </Button>
      </Form>
    </Container>
  );
};

export default EditarUsuario;
