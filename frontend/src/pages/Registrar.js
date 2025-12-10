import React, { useState } from "react";
import axios from "axios";

function Registrar() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [nivel, setNivel] = useState("debil");

  const guardar = async () => {
    try {
      await axios.post("http://localhost:3001/api/registro", {
        usuario,
        password,
        nivel,
      });
      alert("Usuario registrado");
    } catch (error) {
      alert("Error al registrar");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Registrar Usuario</h2>

        <label style={styles.label}>Usuario</label>
        <input
          style={styles.input}
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <label style={styles.label}>Contraseña</label>
        <input
          style={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label style={styles.label}>Nivel:</label>
        <select
          style={styles.select}
          value={nivel}
          onChange={(e) => setNivel(e.target.value)}
        >
          <option value="debil">Débil</option>
          <option value="intermedio">Intermedio</option>
          <option value="fuerte">Fuerte</option>
        </select>

        <button style={styles.button} onClick={guardar}>
          Guardar
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #4A90E2, #1C3B70)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "white",
    padding: "30px",
    width: "350px",
    borderRadius: "15px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "24px",
    color: "#333",
  },
  label: {
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  select: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    marginTop: "15px",
    borderRadius: "8px",
    border: "none",
    background: "#28A745",
    color: "white",
    cursor: "pointer",
    fontSize: "18px",
  },
};

export default Registrar;
