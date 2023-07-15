import { Link } from "react-router-dom";

const Categoria = ({ categoria }) => {
    return (
        <Link className="categoria my-4 d-flex justify-content-center">
                <span>{ categoria }</span>
        </Link>
    );
};

export default Categoria;