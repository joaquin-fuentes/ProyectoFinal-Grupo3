import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const EditarUsuario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <Container className="mainSection my-4 border rounded border-5 border-secondary admin-formulario text-white">
      <h1 className="display-4 text-center">Editar Usuario</h1>
      <hr />
      <Form onSubmit={handleSubmit()}>
        <Form.Group className="mb-3 disabled" controlId="formUsuario">
          <Form.Label className="fs-4">Nombre de Usuario</Form.Label>
          <Form.Control type="text" disabled></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3 disabled" controlId="formUsuario">
          <Form.Label className="fs-4">Email</Form.Label>
          <Form.Control type="text" disabled></Form.Control>
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
