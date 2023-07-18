import { Routes, Route } from "react-router-dom";
import AdminProductos from "../productos/AdminProductos";
import CrearProducto from "../productos/CrearProducto";
import AdminUsuarios from "../usuarios/AdminUsuarios";
import AdminPedidos from "../pedidos/AdminPedidos";

const RutasAdministrador = () => {
    return (
        <>
            <Routes>
            <Route path="/" element={<AdminProductos></AdminProductos>}></Route> 
            <Route exact path="/crear" element={<CrearProducto></CrearProducto>}></Route>
            <Route path="/administradorPedidos" element={<AdminPedidos></AdminPedidos>}></Route> 
            <Route path="/administradorUsuarios" element={<AdminUsuarios></AdminUsuarios>}></Route>
            </Routes>
        </>
    );
};

export default RutasAdministrador;