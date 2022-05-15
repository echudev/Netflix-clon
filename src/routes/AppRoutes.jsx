import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Inicio } from "../pages/Inicio";
import { Series } from "../pages/Series";
import { Pelis } from "../pages/Pelis";
import { MiLista } from "../pages/MiLista";
import { Novedades } from "../pages/Novedades";
import { NotFound } from "../pages/NotFound";
import { Footer } from "../components/Footer/Footer";

function AppRoutes() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/series" element={<Series />} />
        <Route path="/peliculas" element={<Pelis />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/milista" element={<MiLista />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default AppRoutes;

