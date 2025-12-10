import React from "react";
import jsPDF from "jspdf";

export default function Reporte() {
  const generarPDF = () => {
    const doc = new jsPDF();
    doc.text("Reporte de Libros - Biblioteca Virtual", 10, 10);
    doc.save("reporte.pdf");
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Generar Reporte PDF</h1>
      <button onClick={generarPDF}>Descargar PDF</button>
    </div>
  );
}
