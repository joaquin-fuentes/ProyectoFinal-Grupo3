import { Container, Row, Col, Card } from 'react-bootstrap';
import brand from "../../assets/brand.png"
import chef1 from "../../assets/chefs/MauroDiazSantilli.jpeg"
import chef2 from "../../assets/chefs/JoaquinFuentes.jpeg"
import chef3 from "../../assets/chefs/FedericoLedesma.jpeg"
import chef4 from "../../assets/chefs/JulianMartin.jpeg"
import chef5 from "../../assets/chefs/AgustinSandoval.jpeg"
import '../../App.css';

const AcercaDe = () => {
  return (
    <Container className="mainSection">
      <section className="my-5">
        <h1 className="display-4 text-center pb-3">¿Que es Bon dia?</h1>
        <p className="text-center fw-bold fst-italic texto-acerca">
        Uno de los restaurantes más famosos de Argentina, conocido por ofrecer una experiencia gastronómica única e inigualable. Su pasión por la comida de calidad se refleja en platos exquisitos y creativos que satisfacen los paladares más exigentes.
        </p>
        <p className="text-center fw-semibold texto-acerca">
        Los usuarios pueden explorar el menú, conocer a los chefs y realizar pedidos en línea a través de su página web. Bon dia espera darles la bienvenida y brindarles una experiencia culinaria única e inigualable.
        </p>
        <img src={brand} alt="Logo Bon dia" className="brandBondia" />
      </section>
      <hr />
      <section className="my-5 rounded">
        <h1 className="display-6 text-center mb-4 pt-4 fw-bolder">Nuestros chefs</h1>
        <Row className="sobreNosotros-card">
          <Col md={5} className="mb-3 mx-1 p-1">
            <Card className='border-0'>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img
                    src={chef1}
                    className="img-fluid rounded-circle p-2"
                    alt="Foto Mauro Diaz Santilli"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Mauro Diaz Santilli</Card.Title>
                    <Card.Text>
                     Realizó maquetado y diseños iniciales, login y creacion de usuarios.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={5} className="mb-3 mx-1 p-1">
            <Card className='border-0' className='border-0'>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img
                    src={chef2}
                    className="img-fluid rounded-circle p-2"
                    alt="Foto Joaquin Fuentes"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Joaquin Fuentes</Card.Title>
                    <Card.Text>
                      Realizó maquetado de pagina de detalle de pedidos, detalle de pedidos, carrito y rutas protegidas
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={5} className="mb-3 mx-1 p-1">
            <Card className='border-0' className='border-0'>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img
                    src={chef3}
                    className="img-fluid rounded-circle p-2"
                    alt="Foto Federico Ledesma"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Federico Ledesma</Card.Title>
                    <Card.Text>
                    Realizó el maquetado de página principal, backend y filtro de búsqueda.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={5} className="mb-3 mx-1 p-1">
            <Card className='border-0' className='border-0'>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img
                    src={chef4}
                    className="img-fluid rounded-circle p-2"
                    alt="Foto Julian Martin"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Julian Martin</Card.Title>
                    <Card.Text>
                      Realizó validaciones de productos, pedidos y usuarios, alta y baja de productos y las categorias.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={5} className="mb-3 mx-1 p-1">
            <Card className='border-0'>
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img
                    src={chef5}
                    className="img-fluid rounded-circle p-2"
                    alt="Foto Agustin Sandoval"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Agustin Sandoval</Card.Title>
                    <Card.Text>
                      Realizó maquetado de login, creacion de usuarios, validaciones de los mismos y modificacion de usuarios, productos y pedidos.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default AcercaDe;