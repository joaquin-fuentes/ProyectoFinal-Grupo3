import {
  Container,
  CardGroup,
  Row,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import Comida from "./Comida";
import { obtenerProductos } from "../../../helpers/queries";
import Swal from "sweetalert2"



const ContenedorComidas = ({categoriaBuscada}) => {

  const [productos, setProductos] = useState([])


  useEffect(() => {
    obtenerProductos().then((respuesta) => {
      if (respuesta != null) {
        setProductos(respuesta)
      } else {
        Swal.fire("Error", "No se pudo obtener los datos de la API", "error")
        // navegacion("/error404")
      }
    })
  }, [])


  return (
    <Container className="my-5">
      <CardGroup>
        <Row xs={1} md={2} lg={3}>
          {
            productos.map((producto) => {
              if (categoriaBuscada === producto.categoria || categoriaBuscada === "" || categoriaBuscada === "Todos") {
                return  <Comida producto={producto} key={producto.id}></Comida>
               }
            })
          }
        </Row>
      </CardGroup>
    </Container>
  );
};

export default ContenedorComidas;
