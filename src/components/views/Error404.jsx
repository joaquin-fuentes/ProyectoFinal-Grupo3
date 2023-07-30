import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import error from '../../assets/Error404.png';
import '../../App.css';

const Error404 = () => {
  return (
    <section className="mainSection text-center">
      <img src={error} alt="error 404" className="error404-img" />
      <p className="error404-texto">Ups, error al cargar la pagina.</p>
        <div className="error404-contenido">
        <Link to="/">
          <Button id='btn-error404'>Volver al inicio</Button>
        </Link>
      </div>
    </section>
  );
};

export default Error404;