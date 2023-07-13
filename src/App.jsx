import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/common/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  return (
    <BrowserRouter>
      <Menu></Menu>
    </BrowserRouter>
  );
}

export default App;
