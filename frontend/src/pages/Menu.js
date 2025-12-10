import React from "react";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const nav = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Biblioteca Virtual</h1>

      <div style={styles.menu}>
        <button style={styles.btn} onClick={() => nav("/libros")}>
          Libros
        </button>

        <button style={styles.btn} onClick={() => nav("/grafico")}>
          Gráfico
        </button>

        <button style={styles.btn} onClick={() => nav("/reporte")}>
          Reporte PDF
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  title: {
    fontSize: "40px",
    marginBottom: "30px",
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  btn: {
    width: "250px",
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    background: "#00ff08ff",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
  },
};
