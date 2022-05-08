import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Inicio } from "../pages/Inicio";
import { Series } from "../pages/Series";
import { Pelis } from "../pages/Pelis";
import { NotFound } from "../pages/NotFound";

function AppRoutes() {

  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/series" element={<Series />} />
        <Route path="/pelis" element={<Pelis />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;

