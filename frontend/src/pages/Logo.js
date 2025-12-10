import React, { useState, useEffect } from "react";
import "./Logo.css";
import "../styles/global.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [genCaptcha, setGenCaptcha] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const c = Math.floor(10000 + Math.random() * 90000).toString();
    setGenCaptcha(c);
    document.body.classList.add("bg-login");
    return () => {
      document.body.classList.remove("bg-login");
    };
  }, []);

  const generar = () => {
    const c = Math.floor(10000 + Math.random() * 90000).toString();
    setGenCaptcha(c);
  };

  const entrar = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMsg("Completa todos los campos");
      return;
    }
    if (!captcha) {
      setMsg("Ingrese el captcha");
      return;
    }
    if (captcha !== genCaptcha) {
      setMsg("Captcha incorrecto");
      return;
    }
    setMsg("Inicio de sesión correcto");
    window.location.href = "/menu";
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Inicio de Sesión</h2>
        <form onSubmit={entrar}>
          <input
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="captcha-box">
            <button type="button" onClick={generar} className="btn-login">
              Generar Captcha
            </button>
            <div className="captcha">{genCaptcha}</div>
          </div>
          <input
            placeholder="Escriba el captcha"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
          />
          <button className="btn-login" type="submit">Ingresar</button>
        </form>
        {msg && <p className="msg">{msg}</p>}
      </div>
    </div>
  );
}