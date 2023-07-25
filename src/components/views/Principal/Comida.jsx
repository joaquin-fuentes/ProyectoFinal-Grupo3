import { Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Comida = ({producto}) => {
  return (
    <Col className="mt-2">
      <Card>
        <div className="row g-0">
          <div className="col-md-5">
            <Image
              src={producto.imagen}
              className="img-fluid rounded-start h-100 object-fit-cover"
              alt="..."
            ></Image>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">{producto.nombreProducto}</h5>
              <p className="card-text">
                {producto.detalle}
              </p>
              <h5 className="card-title" id="precio-comida">$ {producto.precio}</h5>
              <Link id="btn-comida" className="btn">
                Agregar al pedido
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Comida;
