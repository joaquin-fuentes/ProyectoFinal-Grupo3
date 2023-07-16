import { Table } from "react-bootstrap";
import Categoria from "./Categoria";

const ContenedorCategorias = () => {
  return (
    <section className="table-responsive">
      <Table>
        <thead>
          <tr>
            <Categoria categoria="Categoria"></Categoria>
            <Categoria categoria="Categoria"></Categoria>
            <Categoria categoria="Categoria"></Categoria>
            <Categoria categoria="Categoria"></Categoria>
            <Categoria categoria="Categoria"></Categoria>
          </tr>
        </thead>
      </Table>
    </section>
  );
};

export default ContenedorCategorias;
