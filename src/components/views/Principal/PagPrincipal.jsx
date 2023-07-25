import { Container } from "react-bootstrap";
import LandingPage from "./LandingPage";
import ContenedorCategorias from "./ContenedorCategorias";
import FormularioBuscador from "./FormularioBuscador";
import ContenedorComidas from "./ContenedorComidas";
import { useState } from "react";

const PagPrincipal = () => {

    const [categoriaBuscada, setCategoriaBuscada] =  useState('')

    return (
        <Container>
            <LandingPage></LandingPage>
            <ContenedorCategorias categoriaBuscada={categoriaBuscada} setCategoriaBuscada={setCategoriaBuscada}></ContenedorCategorias>
            <FormularioBuscador></FormularioBuscador>
            <ContenedorComidas></ContenedorComidas>
        </Container>
    );
};

export default PagPrincipal;