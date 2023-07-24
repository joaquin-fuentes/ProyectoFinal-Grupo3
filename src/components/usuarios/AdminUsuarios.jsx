import ItemUsuario from "./ItemUsuario";
import { Container, Table } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
const AdminUsuarios = () => {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(()=>{
    
  })

  return (
    <Container className="mainSection my-4">
      <h1 className="display-4">Administrador de Usuarios</h1>
      <hr></hr>
      <section className="table-responsive">
        <Table bordered hover className="table-dark">
          <thead>
            <tr>
              <th>Nombre de Usuario</th>
              <th>Email</th>
              <th>Estado de la Cuenta</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {
              
            }
            <ItemUsuario></ItemUsuario>
          </tbody>
        </Table>
      </section>
    </Container>
  );
};

export default AdminUsuarios;
