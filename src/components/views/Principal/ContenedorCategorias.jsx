import { Table } from "react-bootstrap";
import Categoria from "./Categoria";

const ContenedorCategorias = ({categoriaBuscada,setCategoriaBuscada}) => {
  return (
    <section className="table-responsive" id="categoria">
      <Table>
        <thead>
          <tr>
            <Categoria categoria="Todos" categoriaBuscada={categoriaBuscada} setCategoriaBuscada={setCategoriaBuscada}></Categoria>
            <Categoria categoria="Al Plato" categoriaBuscada={categoriaBuscada} setCategoriaBuscada={setCategoriaBuscada}></Categoria>
            <Categoria categoria="Pastas" categoriaBuscada={categoriaBuscada} setCategoriaBuscada={setCategoriaBuscada}></Categoria>
            <Categoria categoria="Pizzas" categoriaBuscada={categoriaBuscada} setCategoriaBuscada={setCategoriaBuscada}></Categoria>
            <Categoria categoria="Postres" categoriaBuscada={categoriaBuscada} setCategoriaBuscada={setCategoriaBuscada}></Categoria>
            <Categoria categoria="Bebidas" categoriaBuscada={categoriaBuscada} setCategoriaBuscada={setCategoriaBuscada}></Categoria>
          </tr>
        </thead>
      </Table>
    </section>
  );
};

export default ContenedorCategorias;
