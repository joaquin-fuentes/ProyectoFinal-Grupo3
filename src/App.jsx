import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Error404 from "./components/views/Error404"
import SobreNosotros from "./components/views/SobreNosotros"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminProductos from "./components/productos/AdminProductos";
import AdminPedidos from "./components/pedidos/AdminPedidos";
import AdminUsuarios from "./components/usuarios/AdminUsuarios";
import DetalleProducto from "./components/views/DetalleProducto";
import Pedido from "./components/views/Pedido";
import PagPrincipal from "./components/views/Principal/PagPrincipal";
import RegistroUsuarios from "./components/views/RegistroUsuarios";


function App() {

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
      <Route path="/" element={<PagPrincipal></PagPrincipal>}></Route> 
      <Route path="/administradorProductos" element={<AdminProductos></AdminProductos>}></Route> 
      <Route path="/administradorPedidos" element={<AdminPedidos></AdminPedidos>}></Route> 
      <Route path="/administradorUsuarios" element={<AdminUsuarios></AdminUsuarios>}></Route> 
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
