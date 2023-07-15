import { Image, Container, Button } from "react-bootstrap";
import imgLanding from "../../../assets/banner.png";
import { BsChevronCompactDown } from "react-icons/bs/index.esm";

const LandingPage = () => {
  return (
    <Container className="banner text-light text-center mx-0 row align-items-center mb-5">
      <div className="col-md-6" id="banner-image">
        <Image src={imgLanding} className="w-100"></Image>
      </div>
      <div className="col-md-6 text-primary text-center text-lg-end texto-landing">
        <h1 className="my-3 display-4">JSONGourmet</h1>
        <p className="display-6">Menu especial!</p>
        <p>Disfuta de las mejores comidas y en el momento que quieras!</p>
        <div className="text-center ms-lg-5">
          <Button className="w-100" id="btn-landing">
            Elige ahora!  
          <BsChevronCompactDown className="icono-abajo-landing ms-2"></BsChevronCompactDown>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default LandingPage;
