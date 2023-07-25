import { Table } from "react-bootstrap";
import Categoria from "./Categoria";

const ContenedorCategorias = () => {
  return (
    <section className="table-responsive" id="categoria">
      <Table>
        <thead>
          <tr>
            <Categoria categoria="Todos"></Categoria>
            <Categoria categoria="Al Plato"></Categoria>
            <Categoria categoria="Pastas"></Categoria>
            <Categoria categoria="Pizzas"></Categoria>
            <Categoria categoria="Postres"></Categoria>
            <Categoria categoria="Bebidas"></Categoria>
          </tr>
        </thead>
      </Table>
    </section>
  );
};

export default ContenedorCategorias;
