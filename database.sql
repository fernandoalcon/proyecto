CREATE DATABASE IF NOT EXISTS biblioteca;
USE biblioteca;
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    rol VARCHAR(20)
);
CREATE TABLE libros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100),
    autor VARCHAR(100),
    stock INT
);
CREATE TABLE reportes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion TEXT,
    fecha DATE
);