import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Error404 from "./components/views/Error404"
import SobreNosotros from "./components/views/SobreNosotros"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./components/views/DetalleProducto";
import Pedido from "./components/views/Pedido";
import PagPrincipal from "./components/views/Principal/PagPrincipal";
import RegistroUsuarios from "./components/views/RegistroUsuarios";
import Login from "./components/views/Login";
import RutasAdministrador from "./components/routes/RutasAdministrador";


function App() {

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
      <Route path="/" element={<PagPrincipal></PagPrincipal>}></Route> 
      <Route exact path="/administrador/*" element={<RutasAdministrador></RutasAdministrador>}></Route>
      <Route path="/404" element={<Error404></Error404>}></Route> 
      <Route path="/AcercaDe" element={<SobreNosotros></SobreNosotros>}></Route> 
      <Route exact path="/detalleProducto/:id" element={<DetalleProducto></DetalleProducto>} ></Route>
      <Route exact path="/pedido" element={<Pedido></Pedido>} ></Route>
      <Route exact path="/registro" element={<RegistroUsuarios></RegistroUsuarios>} ></Route>
      <Route exact path="/login" element={<Login></Login>} ></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
