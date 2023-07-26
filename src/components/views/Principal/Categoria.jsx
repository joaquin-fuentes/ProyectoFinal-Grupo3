import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categoria = ({categoria , setCategoriaBuscada}) => {
  
  const filtroCategoria = () =>{
    setCategoriaBuscada(categoria)
  }
  return (
    <th>
      <Button className="categoria my-4 d-flex justify-content-center" onClick={filtroCategoria}>
        <span>{categoria}</span>
      </Button>
    </th>
  );
};

export default Categoria;
