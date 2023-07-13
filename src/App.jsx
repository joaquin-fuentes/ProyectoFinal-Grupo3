import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";



function App() {

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
