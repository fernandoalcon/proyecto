import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Logo";
import Menu from "./pages/Menu";
import Grafico from "./pages/Grafico";
import Reporte from "./pages/Reporte";
import Libros from "./pages/Libros";

function RoutesWithBodyClass() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.add("bg-login");
      document.body.classList.remove("bg-app");
    } else {
      document.body.classList.add("bg-app");
      document.body.classList.remove("bg-login");
    }

    return () => {
      document.body.classList.remove("bg-login", "bg-app");
    };
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/grafico" element={<Grafico />} />
      <Route path="/reporte" element={<Reporte />} />
      <Route path="/libros" element={<Libros />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RoutesWithBodyClass />
    </BrowserRouter>
  );
}
