import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Error404 from "./components/views/Error404"
import SobreNosotros from "./components/views/SobreNosotros"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";



function App() {

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
      <Route path="/404" element={<Error404></Error404>}></Route> 
      <Route path="/AcercaDe" element={<SobreNosotros></SobreNosotros>}></Route> 
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
