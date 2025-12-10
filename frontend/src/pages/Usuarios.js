import React, { useState } from "react";
export default function Menu(){ return <div>Menu (temporal)</div>; }
function Usuarios() {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  const [nivel, setNivel] = useState("");

  const validar = (p) => {
    if (p.length < 4) return "Débil";
    if (p.length < 8) return "Intermedia";
    return "Fuerte";
  };

  const guardar = () => {
    alert("Usuario registrado con contraseña " + nivel);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Registrar Usuario</h1>

      <input
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        placeholder="Contraseña"
        type="password"
        value={pass}
        onChange={(e) => {
          setPass(e.target.value);
          setNivel(validar(e.target.value));
        }}
      />

      <p>Nivel: {nivel}</p>

      <button onClick={guardar}>Guardar</button>
    </div>
  );
}

