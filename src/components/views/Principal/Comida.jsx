import { Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Comida = () => {
  return (
    <Col className="mt-2">
      <Card>
        <div className="row g-0">
          <div className="col-md-5">
            <Image
              src="https://clasicoygourmet.com/wp-content/uploads/2017/02/Pechugas-de-pollo-rellenas-FUENTE-ABCdesevilla.com_-678x470.jpg"
              className="img-fluid rounded-start h-100 object-fit-cover"
              alt="..."
            ></Image>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <h5 className="card-title" id="precio-comida">$ 3.500</h5>
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
