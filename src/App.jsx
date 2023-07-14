import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Error404 from "./components/views/Error404"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AdminProductos from "./components/productos/AdminProductos";
import AdminPedidos from "./components/pedidos/AdminPedidos";
import AdminUsuarios from "./components/usuarios/AdminUsuarios";



function App() {

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
      <Route path="/404" element={<Error404></Error404>}></Route>
      <Route path="/administradorProductos" element={<AdminProductos></AdminProductos>}></Route> 
      <Route path="/administradorPedidos" element={<AdminPedidos></AdminPedidos>}></Route> 
      <Route path="/administradorUsuarios" element={<AdminUsuarios></AdminUsuarios>}></Route> 
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
