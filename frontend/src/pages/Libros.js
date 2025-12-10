import React, { useState } from "react";

export default function Libros() {
  const [libros, setLibros] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [estado, setEstado] = useState("activo");
  const [editIndex, setEditIndex] = useState(null);

  const guardar = () => {
    if (!titulo || !autor) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const nuevo = { titulo, autor, estado };

    if (editIndex === null) {
      setLibros([...libros, nuevo]);
    } else {
      const copia = [...libros];
      copia[editIndex] = nuevo;
      setLibros(copia);
      setEditIndex(null);
    }

    setTitulo("");
    setAutor("");
  };

  const editar = (i) => {
    setTitulo(libros[i].titulo);
    setAutor(libros[i].autor);
    setEstado(libros[i].estado);
    setEditIndex(i);
  };

  const eliminar = (i) => {
    const copia = [...libros];
    copia[i].estado = "eliminado";
    setLibros(copia);
  };

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Gestión de Libros</h1>

      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />
      <button onClick={guardar}>Guardar</button>

      <h2>Listado</h2>

      {libros.map((l, i) => (
        <div key={i}>
          {l.titulo} - {l.autor} - {l.estado}
          <button onClick={() => editar(i)}>Editar</button>
          <button onClick={() => eliminar(i)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
